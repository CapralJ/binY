import React from 'react';
import './SavedDirection.scss';
import Direction from './Direction'

const SavedDirection = () => {
    return (
        <>
            <div className='tittleSaved'>Сохранённые направления: 3</div>
            <div className='lineBlock'>
                <Direction />
            </div>
        </>
    );
}

export default SavedDirection;