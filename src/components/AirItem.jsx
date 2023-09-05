import PropTypes from 'prop-types';
import React from 'react';

const AirItem = ({ detailItem }) => (
  <li>
    <p>{detailItem.name}</p>
    <p>{detailItem.value}</p>
    <span> μg/m3</span>
  </li>
);

AirItem.propTypes = {
  detailItem: PropTypes.shape({
    name: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
  }).isRequired,
};

export default AirItem;
