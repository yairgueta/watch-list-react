import React from 'react';
import './WatchItem.css'
import {FiClock} from 'react-icons/fi'

const IMAGE_SIZE = [100, 100]

const WatchItem = ({item}) => {
    return (
        <div className='d-flex rounded rounded-5 bg-secondary m-1 p-2' style={{height: 100}}>
            {/*<div className='bg-success' style={{height: '100%', aspectRatio: '1 / 1'}}/>*/}
            <img src={item.image}
                 className='bg-success rounded rounded-1 shadow me-2'
                 alt={item.name}
                 style={imageStyle}/>
            <div className='d-flex flex-column'>
                <div className='movie-title mb-auto'>{item.name}</div>
                <div className='description overflow-hidden'>{item.description}</div>
                <div className='creation-time mb-1'>
                    <FiClock className='me-1'/>
                    {item.dateCreated.toDateString()}
                </div>
            </div>
        </div>
    );
}

WatchItem.propTypes = {};

const imageStyle = {
    objectFit: 'cover',
    height: '100%',
    aspectRatio: '1 / 1'
}

export default WatchItem;
