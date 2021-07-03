import React from 'react';
import PropTypes from 'prop-types';
import {ImCheckmark} from "react-icons/im";

const Icon = ({item, onClick, showV}) => {
    return (
        <div className='image rounded rounded-circle shadow me-2'
             onClick={onClick}
             style={{cursor: 'pointer'}}>
            <img src={item.image} alt={item.name}/>
            {showV && <ImCheckmark className='icon w-100 h-100 p-2'/>}
        </div>
    );
};

Icon.propTypes = {

};

export default Icon;
