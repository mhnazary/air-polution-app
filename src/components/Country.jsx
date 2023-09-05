import React from 'react';
import { NavLink } from 'react-router-dom';
import EuropeCountries from './EuropeCountries';

const country = () => (
  <div>
    <div className="list-titleBox">
      <h2 className="countryList-title">Details by countries</h2>
    </div>

    <ul className="country-ul grid">
      {EuropeCountries.map((country) => (
        <li key={country.country} className="country-list">
          <NavLink className="country-data" to="/Details">
            <h3>{country.country}</h3>
          </NavLink>
        </li>
      ))}
    </ul>
  </div>
);

export default country;
