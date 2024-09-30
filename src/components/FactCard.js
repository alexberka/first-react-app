import React from 'react';
import PropTypes from 'prop-types';

export default function FactCard({ fact }) {
  return <div className="factCard">{fact}</div>;
}

FactCard.propTypes = {
  fact: PropTypes.string.isRequired,
};
