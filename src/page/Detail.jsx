import React from 'react';
import { useSelector } from 'react-redux';
import AirDetail from '../components/Airdetail';

const Detail = () => {
  const { country, capital } = useSelector((state) => state.detail);

  return (
    <div>
      <h1>{country}</h1>
      <span>{capital}</span>
      <AirDetail />
    </div>
  );
};

export default Detail;
