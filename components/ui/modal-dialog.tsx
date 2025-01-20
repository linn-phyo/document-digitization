import Modal from 'react-bootstrap/Modal';
import { Button } from '@/components/ui/button';

function ModalDialog({
    show, 
    handleClose,
    handleProcess
}:{
    show: boolean, 
    handleClose: any,
    handleProcess: any
}) {
    return (
        <Modal 
        show={show} 
        onHide={handleClose} 
        backdrop="static"
        keyboard={false}>
        <Modal.Header closeButton>
          <Modal.Title>Warning!</Modal.Title>
        </Modal.Header>
        <Modal.Body>Are you sure want to delete?</Modal.Body>
        <Modal.Footer>
          <Button variant="outline" onClick={handleClose}>
            Close
          </Button>
          <Button variant="default" onClick={handleProcess}>
            Delete
          </Button>
        </Modal.Footer>
      </Modal>
    );
  }
  
  export default ModalDialog;