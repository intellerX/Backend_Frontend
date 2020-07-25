import Home from '../containers/Home';
import Player from '../containers/Player';
import Login from '../containers/Login';
import Register from '../containers/Register';
import NotFount from '../containers/NotFound';

const serverRoutes = (isLogged) => {
  return [
    {
      path: '/',
      exact: true,
      component:  Home ,
    },
    {
      path: '/player/:id',
      exact: true,
      component: isLogged ? Player : Login,
    },
    {
      path: '/login',
      exact: true,
      component: Login,
    },
    {
      path: '/register',
      exact: true,
      component: Register,
    },
    {
      name: 'NotFount',
      component: NotFount,
    },
  ]
}

export default serverRoutes;
