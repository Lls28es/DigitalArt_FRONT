/*eslint-disable*/
import React from 'react';
import { Route } from 'react-router-dom';
import Products from '../Products/Products';


function Browser() {
	
	return (
		<div className="bigest-container" id="Browser">
			<Route path="/Browser/Products" component={Products} />
		</div>
	);
}

export default Browser;
