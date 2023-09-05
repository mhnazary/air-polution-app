import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import { BsArrowRightCircle } from 'react-icons/bs';
import '../index.css';

const CountryItem = ({ data }) => (
  <>
    <li className="country-list">
      <div className="flex justify-between px-8 items-center">
        <span className="text-base font-normal">{`Lat: ${data.latitude}`}</span>
        <span className="text-base font-normal">{`Lon: ${data.longitude}`}</span>
        <NavLink className="country-data" to={`/stats?lat=${data.latitude}&lon=${data.longitude}`}>
          <BsArrowRightCircle className=" text-2xl" />
        </NavLink>
      </div>
      <div>
        <img src={`${data.image}`} alt={`${data.country}`} className="country-shape" />
      </div>
      <div>
        <h3 className="text-2xl font-bold pl-8">{data.country}</h3>
        <p className="text-lg font-bold pl-8">{data.capital}</p>
      </div>
    </li>
  </>
);

CountryItem.propTypes = {
  data: PropTypes.shape({
    country: PropTypes.string.isRequired,
    capital: PropTypes.string.isRequired,
    longitude: PropTypes.number.isRequired,
    latitude: PropTypes.number.isRequired,
    image: PropTypes.string.isRequired,
  }).isRequired,
};

export default CountryItem;
