import React, {useState} from 'react';
import Modal from 'react-bootstrap/Modal'
import {Button} from "react-bootstrap";

const NewItemForm = ({onAdd, onSearch}) => {
    const [show, setShow] = useState(true);

    const handleAdd = () => {

    }

    const handleClose = () => {

        setShow(false);
    }

    const handleShow = () => {
        setShow(true);
    }

    const handleSearch = () => {

    }

    return (
        <>
            <Button onClick={handleShow}>show</Button>
            <Modal show={show}>
                <Modal.Header>
                    <Modal.Title>Add a New Content!</Modal.Title>
                    <Button type="button" className="btn-close" aria-label="Close"/>
                </Modal.Header>
                <Modal.Body>
                    <div className='form-floating mb-2'>
                        <input type='search' id='movie-name' className='form-control' placeholder=""/>
                        <label htmlFor='movie-name'>Movie Name</label>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant='secondary'>Cancel</Button>
                    <Button variant='primary'>Add</Button>
                </Modal.Footer>
            </Modal>
        </>
    );
};

NewItemForm.propTypes = {};

export default NewItemForm;
