/* eslint-disable react/no-danger */
import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Categories from '../components/Categories';
import Carousel from '../components/Carousel';
import CarouselItem from '../components/CarouselItem';
import '../assets/styles/components/Home.scss';
import Image1 from '../assets/static/Image11.jpg';
import Medalla from '../assets/static/Medalla.jpg';

import ImgHome from '../assets/static/home.png';
import ImgInfo from '../assets/static/info.png';
import ImgFood from '../assets/static/food.png';
import ImgPuzzle from '../assets/static/puzzle.png';
import ImgFotos from '../assets/static/fotos.png';

import '../assets/styles/App.scss';


const Home = ({  trends  }) => {
  // const initialState = useInitialState(API);
  return (
    <div className='home'>

      <h1 className='title'>La Casita de Magy</h1>

      <img className='image1' id='Image1' data-type='image' src={Image1} alt='niño' />

      <div className='icons__bar'>
        <Link to='/'>
          <div className='contenedor' id='uno'>
            <img className='icon' src={ImgHome} alt='home' />
            <p className='texto'>Home</p>
          </div>
        </Link>
        <Link to='/info'>

          <div className='contenedor' id='dos'>
            <img className='icon' src={ImgInfo} alt='info' />
            <p className='texto'>Información</p>
          </div>
        </Link>
        <Link to='/servicios'>
          <div className='contenedor' id='tres'>
            <img className='icon' src={ImgFood} alt='Food' />
            <p className='texto'>Servicios</p>
          </div>
        </Link>
        <a href='https://www.psepagos.co/PSEHostingUI/ShowTicketOffice.aspx?ID=8807'>
          <div className='contenedor' id='cuatro'>
            <img className='icon' src={ImgPuzzle} alt='puzzle' />
            <p className='texto'>Pagos</p>
          </div>
        </a>

        <Link to='/info'>
          <div className='contenedor' id='cinco'>
            <img className='icon' src={ImgFotos} alt='fotos' />
            <p className='texto'>Imágenes</p>
          </div>
        </Link>
      </div>

      <img className='medalla' id='Medalla' data-type='image' src={Medalla} alt='medalla' />

      <div>
        <h1 className='title__2'>La Misión de La Casita de Magy</h1>
        <p className='par'>Asumir un compromiso con los niños y familias, ofreciendo con afecto, responsabilidad y profesionalismo la máxima calidad en la educación infantil, apoyándose en el modelo de las inteligencias múltiples, en la pedagogía Montessori, en proyectos de ética ambiental, identidad colombiana y ética para la vida “ formación en valores” y en un equipo humano, sensible y talentoso, que garantiza el desarrollo de una variedad de experiencias innovadoras y significativas para llevar a nuestros niños a ser personas autónomas, líderes con la capacidad de influenciar positivamente su entorno.</p>
        <h3>Propuesta pedagogica</h3>
        <p className='par'>
          nuestra propuesta pedagógica va más allá de encasillarnos en la educación tradicional. Nuestro proyecto, es una amalgama enriquecida con la pedagogía montessori y las inteligencias multiples. Es un instrumento que plasma nuestras intenciones educativas que van encaminadas a formar niños  independientes, líderes, preparados para enfrentar el mundo con más asertividad.
        </p>
      </div>

      <Categories title='El Método Montessori'>
        <Carousel className='carousel'>
          {trends.map(item => (
            <CarouselItem key={item.id} {...item} />
          ))}
        </Carousel>
      </Categories>

      <div dangerouslySetInnerHTML={{ __html: '<iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d497.01349103469977!2d-75.9169507!3d4.7512781!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e38714751cd6395%3A0xdb37bc25ca3a345b!2sLa%20Casita%20de%20Magy!5e0!3m2!1ses!2sco!4v1593642280353!5m2!1ses!2sco" width="100%" height="500" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>' }} />

    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    mylist: state.mylist,
    trends: state.trends,
    originals: state.originals,
  };
};
// export default Home;
// export default connect(props, actions)(Home);
export default connect(mapStateToProps, null)(Home);
