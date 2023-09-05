import React from 'react';
import PropTypes from 'prop-types';

// AirItem component added to display the air quality data
const AirItem = ({ detailItem }) => (
  <li className="pollution-data flex justify-between px-4 shadow-md shadow-gray-800">
    <p className="text-base font-normal">{detailItem.name}</p>
    <div className="pollution-value">
      <p className="text-base font-normal">
        {detailItem.value}
        μg/m3
      </p>
    </div>
  </li>
);

AirItem.propTypes = {
  detailItem: PropTypes.shape({
    name: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
  }).isRequired,
};

export default AirItem;
