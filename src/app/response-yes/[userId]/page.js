import React from 'react';
import PropTypes from 'prop-types';
import FactCard from '../../../components/FactCard';

export default async function ResponseYes({ params }) {
  const response = await fetch(`https://useless-facts-ba3a5-default-rtdb.firebaseio.com/responseYes.json?orderBy="userId"&equalTo="${params.userId}"`, { cache: 'no-store' });
  const facts = await response.json();

  return (
    <div>
      {Object.values(facts).map((fact, i) => (
        // eslint-disable-next-line react/no-array-index-key
        <FactCard key={i} fact={fact.text} />
      ))}
    </div>
  );
}

ResponseYes.propTypes = {
  params: PropTypes.string.isRequired,
};
