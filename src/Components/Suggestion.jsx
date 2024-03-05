import React from 'react';

const Suggestion = ({ city, onClick }) => (
  <div className="suggestion" onClick={() => onClick(city)}>
    {city}
  </div>
);

export default Suggestion;
