import React from 'react';
import './SearchOrders.scss';
import SavedDirection from './component/SavedDirection/SavedDirection.jsx';
import Filter from './component/Filter';

const SearchOrders = () => {
    return (
        <div className="SearchOrders">
            <Filter />
            <div> <hr className='separation'></hr> </div>
            <SavedDirection />
        </div> 
    );
}

export default SearchOrders;