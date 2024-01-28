import '../Filter.scss';
import * as React from 'react';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import ListItemText from '@mui/material/ListItemText';
import Select from '@mui/material/Select';
import Checkbox from '@mui/material/Checkbox';

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
    PaperProps: {
        style: {
            maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
            width: 250,
            border: 0,
        },
    },
};

const FILTER_TYPE = [

]

const names = [
    'Oliver Hansen',
    'Van Henry',
    'April Tucker',
    'Ralph Hubbard',
    'Omar Alexander',
    'Carlos Abbott',
    'Miriam Wagner',
    'Bradley Wilkerson',
    'Virginia Andrews',
    'Kelly Snyder',
];


const SelectsComponent = () => {



    return (
        <div>
            <div className='lineFil' style={{ marginTop: '20px' }}>
                <div className='block'>
                    <div className='arrowDown'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 15 15" fill="none">
                            <path d="M4 6L8 10L12 6" stroke="#8B8C91" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                    </div>
                    <select className='form-control'>
                        <option value="Тип транспорта">Тип транспорта</option>
                        <option value="hurr">hurr</option>
                    </select>
                </div>
                <div className='block'>
                    <div className='arrowDown'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 15 15" fill="none">
                            <path d="M4 6L8 10L12 6" stroke="#8B8C91" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                    </div>
                    <select className='form-control'>
                        <option value="Тип транспорта">Вес</option>
                        <option value="hurr">Вес</option>
                    </select>
                </div>
                <div className='block'>
                    <div className='arrowDown'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 15 15" fill="none">
                            <path d="M4 6L8 10L12 6" stroke="#8B8C91" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                    </div>
                    <select className='form-control'>
                        <option value="Тип транспорта">Объём</option>
                        <option value="hurr">Объём</option>
                    </select>
                </div>
                <div className='block'>
                    <div className='arrowDown'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 15 15" fill="none">
                            <path d="M4 6L8 10L12 6" stroke="#8B8C91" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                    </div>
                    <select className='form-control'>
                        <option value="Тип транспорта">Тип погрузки</option>
                        <option value="hurr">Тип погрузки</option>
                    </select>
                </div>
                <div className='block'>
                    <div className='arrowDown'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 15 15" fill="none">
                            <path d="M4 6L8 10L12 6" stroke="#8B8C91" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                    </div>
                    <select className='form-control'>
                        <option value="Тип транспорта">Категория груза</option>
                        <option value="hurr">Вес</option>
                    </select>
                </div>
                <div className='block'>
                    <div className='arrowDown'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 15 15" fill="none">
                            <path d="M4 6L8 10L12 6" stroke="#8B8C91" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                    </div>
                    <select className='form-control'>
                        <option value="Тип транспорта">Тип заказа</option>
                        <option value="hurr">Вес</option>
                    </select>
                </div>
                <div className='block'>
                    <div className='arrowDown'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 15 15" fill="none">
                            <path d="M4 6L8 10L12 6" stroke="#8B8C91" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                    </div>
                    <select className='form-control'>
                        <option value="Тип транспорта">Тип оплаты</option>
                        <option value="hurr">Вес</option>
                    </select>
                </div>
            </div>
        </div>
    );
}

export default SelectsComponent;