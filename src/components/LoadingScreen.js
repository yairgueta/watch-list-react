import React, {useState} from 'react';
import PropTypes from 'prop-types';
import Modal from 'react-bootstrap/Modal'
import {Button, Spinner} from "react-bootstrap";

const LoadingScreen = props => {
    const [show, setShow] = useState(true);

    const handleClose = () => setShow(false);


    return (
        <>
            <div className="modal" tabIndex="-1">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title">Modal title</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal"
                                    aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <p>Modal body text goes here.</p>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button type="button" className="btn btn-primary">Save changes</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

LoadingScreen.propTypes = {

};

export default LoadingScreen;
