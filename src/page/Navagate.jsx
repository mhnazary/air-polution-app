import React from 'react';
import PropTypes from 'prop-types';
import Header from '../components/Header';

// this is a wrapper component
const Navigation = ({ children }) => (
  <div>
    <Header />
    {children}
  </div>
);

Navigation.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Navigation;
