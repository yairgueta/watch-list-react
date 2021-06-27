import React from 'react';
import './WatchItem.css'
import {FiClock} from 'react-icons/fi'

const WatchItem = ({item}) => {
    return (
        <div className={'watch-item border d-flex m-1 p-2' + (item.isWatched ? ' watched' : ' not-watched')} >
            <img src={item.image}
                 className={'image rounded rounded-circle shadow me-2'}
                 alt={item.name}/>
            <div className='d-flex flex-column'>
                <div className='movie-title'>{`${item.name} (${item.yearRelease})`}</div>
                <div className='description'>{item.description}</div>
                <div className='creation-time mt-auto user-select-none'>
                    <FiClock className='me-1'/>
                    {dateToString(item.dateCreated)}
                </div>
            </div>
        </div>
    );
}

WatchItem.propTypes = {};

const dateToString = date => {
    const options = {
        year: '2-digit',
        month: '2-digit',
        day: '2-digit',
        hour: '2-digit',
        minute: '2-digit'
    }

    return date.toLocaleString('nu', options)
}

export default WatchItem;
