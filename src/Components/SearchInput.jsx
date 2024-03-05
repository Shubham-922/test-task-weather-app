import React from 'react';

const SearchInput = ({ value, spellCheck, onChange, placeholder }) => (
  <div className="search">
    <input
      type="text"
      id="search-input"
      placeholder={placeholder}
      value={value}
      spellCheck={spellCheck}
      onChange={onChange}
    />
  </div>
);

export default SearchInput;