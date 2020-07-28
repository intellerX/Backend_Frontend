import React from 'react';
import '../assets/styles/components/Info.scss';

import ImgArte from '../assets/static/slider/Arte.jpg';
import ImgArte2 from '../assets/static/slider/arte2.jpg';
import ImgArte3 from '../assets/static/slider/Pintor.jpg';
import ImgArte4 from '../assets/static/slider/Futbol.jpg';

import ImgPrevencion from '../assets/static/slider/Prevencion1.jpg';
import ImgPrevencion2 from '../assets/static/slider/Prevencion2.jpg';
import ImgPrevencion3 from '../assets/static/slider/Prevencion3.jpg';
import ImgPrevencion4 from '../assets/static/slider/Prevencion4.jpg';

import ImgDemocracia from '../assets/static/slider/Democracia 1.jpg';
import ImgDemocracia2 from '../assets/static/slider/Democracia 2.jpg';
import ImgDemocracia3 from '../assets/static/slider/Democracia 3.jpg';
import ImgDemocracia4 from '../assets/static/slider/Democracia 4.jpg';

import ImgCapacitacion from '../assets/static/slider/Capacitacion.jpg';
import ImgCapacitacion2 from '../assets/static/slider/Capacitacion2.jpg';
import ImgCapacitacion3 from '../assets/static/slider/Capacitacion3.jpg';
import ImgCapacitacion4 from '../assets/static/slider/Capacitacion4.jpg';

const Info = () => {
  return (
    <div className='info'>

      <div className='panel__info'>
        <div className='panel1'>
          <h2 className='title__2'>Información de La Casita de Magy</h2>
          <h3>Educación Inicial y Preescolar</h3>
          <p>
            jardín infantil con un ambiente Campestre en el centro de la ciudad de Cartago, Valle del Cauca.
          </p>
          <p>
            Dirección : carrera 3 número 14 63 barrio El carmen.
          </p>
          <p>
            Teléfonos:  2130104 -313714 6414 -3174592868
          </p>
          <p>
            Correo: lacasitademagy@hotmail.com
          </p>
        </div>

        <div className='panel2'>
          <img className='panel2__image2' id='Image' data-type='image' src='https://images.pexels.com/photos/3662803/pexels-photo-3662803.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940' alt='Imagen panel' />

        </div>

      </div>

      <div className='slider' id='Arte'>
        <h4>El arte juega un papel muy importante en el desarrollo de los niños. Razon por la que generamos espacios artisticos que desarrollen la percepción, motricidad, concentración, expresión, creatividad, comunicación e interaccion social.</h4>

        <ul>
          <li><img src={ImgArte} alt='' /></li>
          <li><img src={ImgArte2} alt='' /></li>
          <li><img src={ImgArte3} alt='' /></li>
          <li><img src={ImgArte4} alt='' /></li>

        </ul>
      </div>

      <div className='slider' id='Capacitacion'>

        <h4>Periódicamente las maestras reciben capacitaciones para fortalecer sus conocimientos y habilidades .</h4>
        <ul>
          <li><img src={ImgCapacitacion} alt='' /></li>
          <li><img src={ImgCapacitacion2} alt='' /></li>
          <li><img src={ImgCapacitacion3} alt='' /></li>
          <li><img src={ImgCapacitacion4} alt='' /></li>
        </ul>
      </div>

      <div className='slider' id='Prevencion'>
        <h4>Es importante para las familias tener la tranquilidad que sus hijos están seguros en el jardín. Por tal motivo anualmente se desarrolla con los niños el proyecto de prevención y desastres para estar preparados en caso de una emergencia.</h4>
        <ul>
          <li><img src={ImgPrevencion} alt='' /></li>
          <li><img src={ImgPrevencion2} alt='' /></li>
          <li><img src={ImgPrevencion3} alt='' /></li>
          <li><img src={ImgPrevencion4} alt='' /></li>

        </ul>
      </div>

      <div className='slider' id='Democracia'>
        <h4>La democracia se aprende.  En la Casita de Magy la Eleccion del personero es una fiesta democrática donde se fomenta el valor de elegir y ser elegidos, la responsabilidad al entregar el voto y el compromiso de los candidatos con su programa de gobierno.</h4>
        <ul>
          <li><img src={ImgDemocracia} alt='' /></li>
          <li><img src={ImgDemocracia2} alt='' /></li>
          <li><img src={ImgDemocracia3} alt='' /></li>
          <li><img src={ImgDemocracia4} alt='' /></li>

        </ul>
      </div>

    </div>

  );
};



export default Info;
