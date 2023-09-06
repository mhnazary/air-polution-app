import React from 'react';
import image from '../europe-map.png';
import CountriesList from './CountryList';
import '../index.css';

const Countries = () => (
  <div>
    <img src={image} alt="world map" className="backround w-full" />
    <CountriesList />
  </div>
);

export default Countries;
