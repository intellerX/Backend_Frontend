/* eslint-disable no-console */
/* eslint-disable func-names */
import express from 'express';
import dotenv from 'dotenv';
import helmet from 'helmet';
import React from 'react';
import { renderToString } from 'react-dom/server';
import { renderRoutes } from 'react-router-config'
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { StaticRouter } from 'react-router-dom';
import cookieParser from 'cookie-parser';
import boom from '@hapi/boom';
import passport from 'passport';
import axios from 'axios';
import reducer from '../frontend/reducers';
import getManifest from './getManifest';
import serverRoutes from '../frontend/routes/serverRoutes';
import Layout from '../frontend/components/Layout';

import initialState  from '../frontend/initialState';



dotenv.config();

const app = express();
const { ENV, PORT } = process.env;

app.use(express.json());
app.use(cookieParser());
app.use(passport.initialize());
app.use(passport.session());

require('./utils/auth/strategies/basic');


  app.use( (req, res, next) => {
    if (!req.hashManifest) req.hashManifest = getManifest();
    next();
  });
  app.use(express.static(`${__dirname}/public`));
  app.use(helmet());
  app.use(helmet.permittedCrossDomainPolicies());
  app.disable('x-powered-by');


const setResponse = (html, preloadedState, manifest) => {
  const mainStyles = manifest ? manifest['main.css'] : 'assets/app.css';
  const mainBuild = manifest ? manifest['main.js'] : 'assets/app.js';
  const vendorBuild = manifest ? manifest['vendors.js'] : 'assets/vendor.js';

  return (`
      <!DOCTYPE html>
      <html lang="es">
      <head>
          <meta charset="UTF-8">
          <meta name="viewport" minimum-scale=1.0, maximum-scale=1.0, initial-scale=1.0">
          <link href=${mainStyles} rel="stylesheet" type="text/css"></link>
          <title>La Casita de Magy</title>
      </head>
      <body>
          <div id="app">${html}</div>
          <script>
            window.__PRELOADED_STATE__ = ${JSON.stringify(preloadedState).replace(/</g,'\\u003c')}
          </script>
          <script src=${mainBuild} type="text/javascript"></script>
          <script src=${vendorBuild} type="text/javascript"></script>
      </body>
      </html>
  `);
}

const renderApp = async (req, res) => {


  /*
  const { token ,email, name, id } = req.cookies;

  try {
    let movieList = await axios({
      url: `${process.env.API_URL}/api/movies`,
      headers: { Authorization: `Bearer ${token}` },
      method: 'get'
    });

    movieList = movieList.data.data;

    initialState = {
      user: {
        id, email, name
      },
      myList: [],
      trends: movieList,// .filter(movie => movie.contentRating === 'PG' && movie._id),
      originals: movieList, // .filter(movie => movie.contentRating === 'G' && movie._id)
    };

  } catch (err) {
    initialState = {
      user: {},
      trends: [4],
      originals: []
    };
  }; */

  const store = createStore(reducer, initialState);
  const preloadedState = store.getState();
  const isLogged = (initialState.user.id);
  const html = renderToString(
    <Provider store={store}>
      <StaticRouter location={req.url} context={{}}>
        <Layout>
          {renderRoutes(serverRoutes(isLogged))}
        </Layout>
      </StaticRouter>
    </Provider>
  );

  res.send(setResponse(html, preloadedState, req.hashManifest));
};

app.post('/auth/sign-in', async function(req, res, next) {

  // get attr from body request
  // const { rememberMe } = req.body;

  passport.authenticate('basic', function(error, data) {
    try {
      if (error || !data) {
        next(boom.unauthorized());
      };

      req.login(data, { session: false }, async function(err) {
        if (err) {
          next(err);
        };

        const { token, ...user } = data;

        res.cookie("token", token, {
          httpOnly: !(ENV === 'development'),
          secure: !(ENV === 'development')
        });
        res.status(200).json(user);

      });
    }catch(err) {
      next(err);
    };

  })(req, res, next);
});

app.post("/auth/sign-up", async function(req, res, next) {
  const { body: user } = req;

  try {
    const userData = await axios({
      url: `${process.env.API_URL}/api/auth/sign-up`,
      method: 'post',
      data: {
        'email': user.email,
        'name': user.name,
        'password': user.password
      },
    });

    res.status(201).json({
      name: req.body.name,
      email: req.body.email,
      id: userData.data.id
    });

  }catch(error) {
    next(error);
  };

});

app.get('*', renderApp);

app.listen(PORT, (err) => {
  if (err) console.log(err);
  else console.log(`The server is running (http://localhost:${PORT})`);
});