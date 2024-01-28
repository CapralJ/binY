import React from 'react';
import './SearchResult.scss';
import { DATA_ITEM } from './dataItem.js'
import ResultItem from './ResultItem.jsx';

const SearchResult = () => {
    return (
        <>
            <div className='tittle-result'>
                <span>Найдено заказов:  {DATA_ITEM.length}</span>
                <span>Сначала дорогие
                    <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 15 15" fill="none">
                        <path d="M4 6L8 10L12 6" stroke="#8B8C91" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                </span>
            </div>
            <table className='search-table'>
                <tbody>
                    {
                        DATA_ITEM.map(item => {
                            return <ResultItem item={item} />
                        })
                    }
                </tbody>
            </table>
        </>
    );
}

export default SearchResult;