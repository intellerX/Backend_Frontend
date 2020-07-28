import React from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import '../assets/styles/components/VerticalItem.scss';
import {setFavorite } from '../actions';

const VerticalItem = (props) => {  
  const {cover , title  , description , source} = props;

  
  return(
    <div className="vertical-item" href={source}>    

      {source ? (

        <div className='all-panel'>
          <div className='vertical-item__sub-panel'>
            <iframe
              className="vertical-item__video"
              title="player"
              src={source}
            />
          </div>            
          <div className="vertical-item__details">
            <p className="vertical-item__details--title">{title}</p>
            <h4 className="vertical-item__description">{description}</h4>
          </div>
        </div>

        )          
          : (
            <div className='all-panel'>
              <div className='vertical-item__sub-panel'>

                <img className="vertical-item__img" src={cover} alt={title}  />

              </div>
                                 
              <div className="vertical-item__details">
                <p className="vertical-item__details--title">{title}</p>
                <h4 className="vertical-item__description">{description}</h4>
              </div>
            </div>
        )}
      
        
      



      
    </div>
  );
}

VerticalItem.propTypes = {
  cover: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
}

const mapDispatchToProps = {
  setFavorite,
  
}

export default connect(null,mapDispatchToProps)(VerticalItem);