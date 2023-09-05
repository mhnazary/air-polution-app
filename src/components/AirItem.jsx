import React from 'react';
import PropTypes from 'prop-types';

const AirItem = ({ detailItem }) => (
  <li className="pollution-data flex justify-between px-4 shadow-lg shadow-gray-600">
    <p className="text-base font-normal">{detailItem.name}</p>
    <div>
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
