import React from 'react';
import './Filter.scss';
import ArrowDows from '../../../assets/icons/ArrowDown.jsx';
import ArrowUp from '../../../assets/icons/ArrowUp.jsx';

import ClearableProp from './components/ClearableProp.js';
import SelectsComponent from './components/SelectsComponent.jsx';


const Filter = () => {


    return (
        <div>
            <div className='lineFil'>
                <div className='block mr-14'>
                    <div className='basisFil mr-6'>
                        <label className='labelFil' for="city">Погрузка </label>
                        <div className='InpFil'>
                            <ArrowUp />
                            <input type="text" placeholder='Город погрузки' id="" name="city" />
                        </div>
                    </div>

                    <div className='basisFil'>
                        <ClearableProp />
                    </div>
                </div>
                <div className='block'>
                    <div className='basisFil mr-6'>
                        <label className='labelFil' for="city">Выгрузка </label>
                        <div className='InpFil'>
                            <ArrowDows />
                            <input type="text" placeholder='Город выгрузки' id="" name="city" />
                        </div>
                    </div>

                    <div className='basisFil'>
                        <ClearableProp />
                    </div>
                </div>
            </div>

            <div className='lineFil mr-6'>
                <SelectsComponent />
            </div>

        </div>

    );
}

export default Filter