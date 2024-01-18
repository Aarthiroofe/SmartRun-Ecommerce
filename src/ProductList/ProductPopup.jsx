import React from 'react';
import { Modal, Button } from 'react-bootstrap';
import "./Style.css";
const ProductPopup = ({ product, onClose }) => {
  return (
    <Modal show={!!product} onHide={onClose}>
      <Modal.Header closeButton>
        <Modal.Title>{product?.name}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <img className='popup-img' src={product?.image} alt={product?.name} />
        <div className='popup-text'>
        <p>Price: ₹{product?.price}</p>
        <p>Category: {product?.category}</p>
        </div>
      </Modal.Body>
      {/* <Modal.Footer>
        <Button variant="secondary" onClick={onClose}>
          Close
        </Button>
      </Modal.Footer> */}
    </Modal>
  );
};

export default ProductPopup;
