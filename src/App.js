import React, { useEffect, useState } from "react";
import axios from "axios";
import Search from "./components/Search";
import Experts from "./components/Experts";
import Contact from "./components/Contact";
import NavigationBar from "./components/NavigationBar";
import { Modal } from "react-bootstrap";


function App() {

  const backendURL = process.env.REACT_APP_BACKEND_URL;

  const [locations, setLocations] = useState([]);
  const [location, setLocation] = useState('');
  const [expertise, setExpertise] = useState('');
  const [experts, setExperts] = useState([]);

  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [secondModalIsOpen, setSecondModalIsOpen] = useState(false);
  const [selectedExpert, setSelectedExpert] = useState(null);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');
  const [termsAccepted, setTermsAccepted] = useState(false);


  useEffect(() => {

    axios.get(`${backendURL}/locations`)
    .then((response) => {
      setLocations(response.data);
    })
    .catch((error) => {
      console.error(error);
    })
  });

  //Search experts by location change
  const handleLocationChange = (e) => {
    setLocation(e.target.value);
  }

  const handleExpertiseChange = (e) => {
    setExpertise(e.target.value);
  }

  const handleSearch = () => {
    axios.get(`${backendURL}/experts/${location}/${expertise}`)
    .then((res) => {
      setExperts(res.data);
    })
    .catch((err) => {
      console.error(err);
    });
  };

  //Connect with expert by submitting contact form
  const handleContactClick = (expert) => {
    setSelectedExpert(expert);
    setModalIsOpen(true);
  }

  const handleModalClose = () => {
    setSelectedExpert(null);
    setModalIsOpen(false);
    setName('');
    setEmail('');
    setPhone('');
    setMessage('');
    setTermsAccepted(false);
  }

  // function handleSecondModalOpen() {
    
  // }

  function handleSecondModalClose(){
    setSecondModalIsOpen(false);
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    try{
      await axios.post(`${backendURL}/contact`,{
        expertId : selectedExpert.id,
        name,
        email,
        phone,
        message,
        termsAccepted
      });
      // alert('Contact form submitted successfully');
      setSecondModalIsOpen(true);
      handleModalClose();
      
      
    }
    catch(err){
      console.error(err);
    }
  }

  


  return (
    <div className="App">
      <NavigationBar />
      

      {/* -------SEARCH BAR---------- */}
      <Search 
      locations={locations} 
      location={location} 
      expertise={expertise}
      handleSearch={handleSearch} 
      handleLocationChange={handleLocationChange} 
      handleExpertiseChange={handleExpertiseChange}
      />

      

      {/* -------- Displaying Experts ----------- */}
      <Experts experts={experts} handleContactClick={handleContactClick}/>

      

      {/* ------- Contact Form to contact Experts ------------ */}
      <Contact 
      modalIsOpen={modalIsOpen}
      handleModalClose = {handleModalClose}
      selectedExpert = {selectedExpert}
      handleSubmit = {handleSubmit}
      name = {name}
      setName = {setName}
      email = {email}
      setEmail = {setEmail}
      phone = {phone}
      setPhone = {setPhone}
      message = {message}
      setMessage = {setMessage}
      setTermsAccepted = {setTermsAccepted}
      />

      <Modal
        isOpen={secondModalIsOpen}
        onRequestClose={handleSecondModalClose}
        contentLabel="Example Modal"
      >
        <h2>Modal Title</h2>
        <p>Modal content goes here.</p>
        <button onClick={handleSecondModalClose}>Close Modal</button>
      </Modal>

    </div>
  );
}

export default App;
