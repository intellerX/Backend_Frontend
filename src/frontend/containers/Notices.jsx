import React from 'react';
import { connect } from 'react-redux';
// import '../assets/styles/components/Info.scss';
import Categories from '../components/Categories';
import CarouselVertical from '../components/CarouselVertical';
import VerticalItem from '../components/VerticalItem';


const Notices = ({  notices }) => {
    return (
      <Categories title='Noticias'>
        <CarouselVertical className='carousel'>
          {notices.map(item => (
            <VerticalItem key={item.id} {...item} />
          ))}
        </CarouselVertical>
      </Categories>
    );
};

const mapStateToProps = (state) => {
    return {
      mylist: state.mylist,
      notices: state.notices,
      originals: state.originals,
    };
  };

  export default connect(mapStateToProps, null)(Notices);
