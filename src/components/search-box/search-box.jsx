import React from 'react';
import './search-box.css';

export const SearchBox = (props) => {
  return (
    <input type='search' className='search' placeholder={props.placeholder} onChange={props.handleChange} />
  );
}