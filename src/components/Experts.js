import React from 'react';
import searchBanner from '../images/moneyPlantBanner.png'
import {Card, Button} from 'react-bootstrap';
import { FaLock } from 'react-icons/fa';

const Experts = ({experts, handleContactClick}) => {

  const getStars = (rating) => {
    const stars = [];
    for (let i = 0; i < 5; i++) {
      if (rating - 1 < i) {
        stars.push(<span>☆</span>);
      } else {
        stars.push(<span>★</span>);
      }
    }
    return stars;
  }

  



    
      return (
        <div className='experts container'>
            {experts.length > 0 ? (
      
        <div>
          {experts.map((expert) => (
            <Card className='my-3' key={expert.id}>
            <Card.Body>
            <div className='row'>
              <div className='col-md-4'>
                    <div><Card.Img className="expertImg" variant="top" src={expert.image} /></div>
                    <div><Button className='helpBtn' variant='outline-primary'>I am here to help</Button></div>
              </div>
              <div className='col-md-4 mb-3' align="left">
                      <Card.Title>{expert.expert_name}</Card.Title>

                      <Card.Subtitle>{expert.expertise}</Card.Subtitle>
                      <Card.Text><span>{expert.rating}</span><span className='ratingStyle'>{getStars(expert.rating)}</span></Card.Text>

                      <Card.Text>{expert.total_ratings} ratings | {expert.reviews} reviews</Card.Text>
                      
                      <Card.Text>{expert.experience} years of experience</Card.Text>
                      <Card.Text>Certification : {expert.certification}</Card.Text>
                      
              </div>
              <div className='col-md-4' align="left">
                <Card.Text>Fees : {expert.fees} $</Card.Text>
                <div className='btnElements'><Button variant='outline-primary'>Visit Community Profile</Button></div>
                <div className='btnElements'><Button variant='outline-primary'>Email Id</Button><FaLock className='iconElements'/></div>
                <div className='btnElements'><Button variant='outline-primary'>Mobile Number</Button><FaLock className='iconElements'/></div>
                <div className='btnElements'><Button className='contactBtn' onClick={() => handleContactClick(expert)}>Connect Now</Button></div>

              </div>

              </div>
              </Card.Body>
              </Card>
            
          ))}
        </div>
      ) : (
      <div className='searchBanner'>
        <img src={searchBanner} alt="searchBanner" className='img-fluid'/>
      </div>
      )}
        </div>
      )



}

export default Experts