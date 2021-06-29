import React from 'react';
import './WatchItem.css'
import CreationDate from "./CreationDate";
import Header from "./Header";
import Icon from "./Icon"

const WatchItem = ({item, onIconClick, onMinusClick}) => {
    return (
        <div className={'watch-item border d-flex m-1 p-2' + (item.isWatched ? ' watched' : ' not-watched')}>
            <Icon item={item} onClick={(e) => onIconClick(item.id)}/>
            <div className='d-flex flex-column flex-grow-1'>
                <Header name={item.name} year={item.yearRelease} onClick={() => onMinusClick(item.id)}/>
                <div className='description'>{item.description}</div>
                <CreationDate date={item.dateCreated}/>
            </div>
        </div>
    );
}

WatchItem.propTypes = {};


export default WatchItem;
