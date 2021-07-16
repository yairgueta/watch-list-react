import React, {useState} from 'react';
import Modal from 'react-bootstrap/Modal'
import {Button} from "react-bootstrap";
import SearchBar from "./SearchBar";

const NewItemForm = ({onAdd, searchKeyword}) => {
    const [show, setShow] = useState(true);

    const handleAdd = (item) => {
        console.log(item)
    }

    const handleClose = () => {
        setShow(false);
    }

    const handleShow = () => {
        setShow(true);
    }



    return (
        <>
            <Button onClick={handleShow}>show</Button>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header>
                    <Modal.Title>Add a New Content!</Modal.Title>
                    <Button type="button" className="btn-close" aria-label="Close" onClick={handleClose}/>
                </Modal.Header>
                <Modal.Body>
                    <SearchBar searchKeyword={searchKeyword} onQuerySelected={handleAdd}/>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant='secondary' onClick={handleClose}>Cancel</Button>
                    <Button variant='primary'>Add</Button>
                </Modal.Footer>
            </Modal>
        </>
    );
};

NewItemForm.propTypes = {};

export default NewItemForm;
