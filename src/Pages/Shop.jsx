import React, { useRef } from 'react';
import Hero from '../Components/Hero/Hero';
import Popular from '../Components/Popular/Popular';
import Offers from '../Components/Offers/Offers';
import NewCollections from '../Components/NewCollections/NewCollections';
import NewsLetter from '../Components/NewsLetter/NewsLetter';
// Import the Item component

const Shop = () => {
  const itemRef = useRef(null);

  const scrollToItem = () => {
    itemRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div>
     
      <Hero scrollToItem={scrollToItem} />
      <Popular/>
      <Offers/>
      <div ref={itemRef}>
      <NewCollections />
      </div>
     
      <NewsLetter />
    </div>
  );
};

export default Shop;
