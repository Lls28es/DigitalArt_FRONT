/*eslint-disable*/
import React from 'react';
import Catalogue from './Catalogue.jsx';
import SearchBar from './SearchBar.jsx';
import Filter from '../Filters/Filter.jsx';

import '../../scss/containers/_Products.scss'


function Products() {

  return (
    <div className="slide-Products" id="Products">
      <SearchBar />
      <Filter/>
      <Catalogue />
    </div>
  );
}

export default Products;
