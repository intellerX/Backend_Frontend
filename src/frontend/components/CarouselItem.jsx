import React from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import '../assets/styles/components/CarouselItem.scss';
import playIcon from '../assets/static/play-icon.png';
import {setFavorite } from '../actions';

const CarouselItem = (props) => {  
  const {id,cover , title , year , contentRating , duration , isList, description} = props;
  const handleSetFavorite = () => {
    props.setFavorite({
      id,cover,title,year,contentRating,duration
    })
  }

  const handleDeleteFavorite = (itemId) => {
    props.deleteFavorite(itemId)
  }
  
  return(
    <div className="carousel-item">
      <img className="carousel-item__img" src={cover} alt={title}  />


      <div className="carousel-item__details">
        <p className="carousel-item__details--title">{title}</p>
        <h4 className="carousel-item__description">{description}</h4>

        <div>
          <Link to={`/player/${id}`}>
            <img 
              className="carousel-item__details--img"
              src={playIcon} 
              alt="Play Icon"

            />
          </Link>
          
          
          
        </div>
        
        <p className="carousel-item__details--subtitle">
          {`${year} `}
        </p>
      </div>
    </div>
  );
}

CarouselItem.propTypes = {
  cover: PropTypes.string,
  title: PropTypes.string,
  year: PropTypes.number,
  contentRating: PropTypes.string,
  duration: PropTypes.number,
  description: PropTypes.string,
}

const mapDispatchToProps = {
  setFavorite,
  
}

export default connect(null,mapDispatchToProps)(CarouselItem);