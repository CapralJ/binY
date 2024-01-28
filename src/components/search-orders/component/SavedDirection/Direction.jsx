import React from 'react';
import './SavedDirection.scss';
import BtnIcon from '../../../../assets/icons/BtnIcon';
import ArrowRightIcon from '../../../../assets/icons/ArrowRightIcon';

const Direction = () => {
    return (
        <div className="Direction">
            <botton className = 'btnSaved'>
                <BtnIcon /> Казахстан <ArrowRightIcon /> Казахстан
            </botton>
            <botton className = 'btnSaved'>
                <BtnIcon /> Астана <ArrowRightIcon /> Любой
            </botton>
            <botton className = 'btnSaved'>
                <BtnIcon /> Шымкент <ArrowRightIcon /> Астана
            </botton>
            <botton className = 'btnSaved'>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="15" viewBox="0 0 16 15" fill="none">
                    <path d="M8.3584 1.8418L8.3584 7.49865M8.3584 7.49865L8.3584 13.1555M8.3584 7.49865L14.0153 7.49865M8.3584 7.49865L2.70154 7.49865" stroke="#8B8C91" stroke-width="1.6" stroke-linecap="round"/>
                </svg>
                Добавить текущее
            </botton>
        </div> 
    );
}

export default Direction;