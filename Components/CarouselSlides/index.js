import React from 'react';
import Page from './page';

const CarouselSlides =(props)=> {
  const {slides} = props;

  return(
  <>
    <Page slides={slides}/>
  </>
  );
}


export default CarouselSlides;
