import React from 'react';
import PropTypes from 'prop-types';

const NewItemForm = props => {
    return (
        <div>
            <div className='form-floating mb-2'>
                <input type='search' id='movie-name' className='form-control' placeholder=""/>
                <label htmlFor='movie-name'>Movie Name</label>
            </div>
        </div>
    );
};

NewItemForm.propTypes = {

};

export default NewItemForm;
