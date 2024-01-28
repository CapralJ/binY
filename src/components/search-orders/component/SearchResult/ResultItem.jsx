import React from 'react';
import BlackBoxIcon from '../../../../assets/icons/BlackBoxIcon'
import GPSIcon from '../../../../assets/icons/GPSIcon'
import TrucksIcon from '../../../../assets/icons/TrucksIcon'
import WeightIcon from '../../../../assets/icons/WeightIcon'
import VolumeIcon from '../../../../assets/icons/VolumeIcon'
import './SearchResult.scss'

const ResultItem = ({ item }) => {

    return (
        item && (
            <tr className='td-ylg' key={item.id} style={{ borderRadius: '12px', border: '1.6px solid var(---200, #DDDEE2)' }}>
                <td className='w-200 '>
                    <div className='td-column'>
                        <span className='td-column-number'>№ {item.id}</span>
                        <span className='td-column-first-date'>{item.date}</span>
                    </div>
                </td>
                <td>
                    <div className='td-column'>
                        <div className='td-row'><BlackBoxIcon /> <span>{item.departure} </span></div>
                        <div className='td-row'><GPSIcon /> <span>{item.appointment}</span> </div>
                    </div>
                </td>
                <td className='w-120'>
                    <div> {item.distance} км</div>
                </td>
                <td>
                    <div className='td-row'>
                        <div className='ball'> <TrucksIcon /> <span className='inter-400'>{item.typeTransport}</span> </div>
                        <div className='ball'> <WeightIcon /> <span className='inter-400'>{item.weight}</span>  </div>
                        <div className='ball'> <VolumeIcon /> <span className='inter-400'>{item.volume}</span></div>
                        <div className='ball'><span className='inter-400'>{item.category}</span>  </div>
                    </div>
                </td>
                <td>
                    <div> {item.price} ₸</div>
                </td>
            </tr>
        )
    );
}

export default ResultItem;