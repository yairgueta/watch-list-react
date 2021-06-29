import React from 'react';
import PropTypes from 'prop-types';
import {FiClock} from "react-icons/fi";

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

const CreationDate = ({date}) => {
    return (
        <div className='mt-auto user-select-none' style={style}>
            <FiClock className='me-1'/>
            {dateToString(date)}
        </div>
    );
};

const style = {
    fontSize: '.6rem'
}

CreationDate.propTypes = {

};

export default CreationDate;
