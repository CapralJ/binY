import React from 'react';
import './SearchPage.scss';
import PlusIcon from '../../assets/icons/PlusIcon.jsx';
import SearchOrders from './SearchOrders.jsx'
import SearchResult from './component/SearchResult/SearchResult.jsx';

const SearchPage = () => {
    return (
        <>
            <div className='header'>
                <div className='tittle'>Поиск заказов</div>
                <button className='create-orders'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                        <path d="M7.66864 16C7.11635 16 6.66864 15.5523 6.66864 15V1C6.66864 0.447715 7.11635 0 7.66864 0H8.3215C8.87379 0 9.3215 0.447715 9.3215 1V15C9.3215 15.5523 8.87378 16 8.3215 16H7.66864ZM1 9.3215C0.447715 9.3215 0 8.87378 0 8.3215V7.66864C0 7.11635 0.447715 6.66864 1 6.66864H15C15.5523 6.66864 16 7.11636 16 7.66864V8.3215C16 8.87379 15.5523 9.3215 15 9.3215H1Z" fill="white" />
                    </svg> Создать новый заказ
                </button>
            </div>
            <SearchOrders />
            <SearchResult />
        </>
    );
}

export default SearchPage;