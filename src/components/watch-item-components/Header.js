import React, {useEffect, useRef} from 'react';
import {FaMinus} from 'react-icons/fa'
import './header.css'

const Header = ({name, year, onClick}) => {
    const textElementRef = useRef(null)

    useEffect(() => {
        const difference = textElementRef.current.offsetWidth - textElementRef.current.scrollWidth
        const pixelPerSec = 40
        textElementRef.current.style.setProperty('--sliding-animation-offset', difference);
        textElementRef.current.style.setProperty('--sliding-animation-duration', Math.abs(difference / pixelPerSec));
    })

    return (
        <div className='header-container d-flex'>
            <div className='header h4 mb-0 flex-grow-1 pe-2'>
                <div className='text' ref={textElementRef}>
                    {`${name} (${year})`}
                </div>
            </div>
            <FaMinus className='button align-self-center' onClick={onClick}/>
        </div>
    );
};


Header.propTypes = {};

export default Header;
