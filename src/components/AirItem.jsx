import React from 'react';
import PropTypes from 'prop-types';

const AirItem = ({ detailItem }) => (
  <li className="pollution-data flex">
    <p>{detailItem.name}</p>
    <div>
      <p>
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
