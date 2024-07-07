// src/components/SearchBar.js
import React from 'react';
import styled from 'styled-components';

const SearchContainer = styled.div`
  display: flex;
  justify-content: center;
  margin: 1rem 0;
`;

const SearchBar = ({ setSearchTerm }) => {
  return (
    <SearchContainer>
      <input
        type="text"
        placeholder="Search products..."
        onChange={(e) => setSearchTerm(e.target.value)}
      />
    </SearchContainer>
  );
};

export default SearchBar;
