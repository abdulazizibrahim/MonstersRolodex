import React from 'react';
import './search-box.styles.css';

export const SearchBox = ({placeholder, handler}) =>(
    <input className ="searchx" type = "search" placeholder = {placeholder}
    onChange={handler}
  />
);