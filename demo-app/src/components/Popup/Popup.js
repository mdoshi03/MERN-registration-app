import { React, useState } from "react";
import { Button, Modal } from "react-bootstrap";

const Popup = (props) => {
  const showHide = props.show;

  // const handleModalShowHide = () => {
  //   showHide = !showHide;
  // };

  return (
    <div>
      <Modal show={showHide} centered>
        <Modal.Header>
          <Modal.Title>{props.header}</Modal.Title>
        </Modal.Header>
        <Modal.Body>{props.message}</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={props.handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default Popup;
