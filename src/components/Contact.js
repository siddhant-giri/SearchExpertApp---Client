import React from 'react';
import Modal from 'react-modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Col, Row } from 'react-bootstrap';
import '../App.css'
import { FaRegWindowClose,} from 'react-icons/fa';


const Contact = ({
    modalIsOpen, 
    handleModalClose, 
    selectedExpert, 
    handleSubmit,
    name,
    setName,
    email,
    setEmail,
    phone,
    setPhone,
    message,
    setMessage,
    setTermsAccepted
    }) => {


      
    
      return (
        <div className='contact my-2' >
         <Modal isOpen={modalIsOpen} onRequestClose={handleModalClose} >
          <Form onSubmit={handleSubmit}>
        <div className='row'>
        <div className='col-md-8'>  
        <h2>Connect With an Expert {selectedExpert && selectedExpert.name}</h2>
        </div>
        <div className='col-md-4'>
          <FaRegWindowClose onClick={handleModalClose}/>
        </div>
        </div> 
        <Form.Group className="mb-3" controlId="name">
            <Form.Label>Name:</Form.Label>
            <Form.Control required id="name" type="text" 
            name="name" 
            value={name}
            placeholder="Enter Name" 
            onChange={(e) => setName(e.target.value)}/>
        </Form.Group>
        <Form.Group className="mb-3">
              <Row>
                <Col>
                  <Form.Label>Email:</Form.Label>
                  <Form.Control required id="email" type="email" 
                    name="email" 
                    value={email}
                    placeholder="Enter Email" 
                    onChange={(e) => setEmail(e.target.value)}/>
                    {/* <input id="email" type="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)}/> */}
                </Col>

                <Col>
                  <Form.Label>Phone:</Form.Label>
                  <Form.Control required id="phone" type="tel" 
                    name="phone" value={phone}
                    placeholder="Enter Phone" 
                    onChange={(e) => setPhone(e.target.value)}/>
            {/* <input id="phone" type="tel" name="phone" value={phone} onChange={(e) => setPhone(e.target.value)}/> */}
                </Col>
            </Row>
            </Form.Group>

            <Form.Group>
            <Form.Label>Message:</Form.Label>
            <Form.Control required size='lg' id="message" name="message" value={message} onChange={(e) => setMessage(e.target.value)}/>
            </Form.Group>
            
            <Form.Group>
            <Form.Check required id="termsAccepted" className='termsCheck' type="checkbox" name="termsAccepted" label="I agree to Money Control's terms of use" onChange={(e) => setTermsAccepted(e.target.checked)}/>
            </Form.Group>

            <Form.Group>
            <Button className='contactSubmitBtn' type="submit" >Submit</Button>
            </Form.Group>
        
        </Form>
      </Modal>

      
        </div>
      )



}

export default Contact;