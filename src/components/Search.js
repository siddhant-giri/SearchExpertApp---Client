import React from 'react';
import '../App.css';
import { FaSearch, FaMapMarkerAlt } from "react-icons/fa";
import Container from 'react-bootstrap/esm/Container';


const Search = ({locations, location, expertise, handleSearch, handleExpertiseChange, handleLocationChange}) => {

      return (
        <div className='search'>
          <Container fluid className='px-5 py-5'>
          <h3 className='searchTitle'>Find Expert</h3>
          <div>

          
          <span className='locationInputStyle'>
            <span className='iconStyle'><FaMapMarkerAlt  /></span>
            <select required id="location" value={location} onChange={handleLocationChange} className="locationInput" >
               <option value="">Location</option>
               {locations.map((location, index) => (
               <option key={index} value={location}>{location}</option>
                ))}
            </select>  
          </span> 

          <span className='searchExpertInputStyle'>
          <span className='iconStyle'><FaSearch /></span>
            <input id="expertise" 
              required
              type="text" value={expertise} 
              onChange={handleExpertiseChange} 
              placeholder="Search advisor"
              className="searchExpertiseInput"
              
            />
            </span>

                <span className='loginBtnStyle'>
            <button onClick={handleSearch} className="loginBtn">Search</button>
            </span>
            
          </div>
          </Container>
        </div>
      )



}

export default Search