import React from 'react'
import styled from 'styled-components'
import { Link, useNavigate } from 'react-router-dom'
import ArtLogo from '../assets/art.png'

function MongoDbDetailContainer() {
  return (
    <Container>
      <div className='textContainer'>
        <div className="spacediv"></div>
        <div className="spacediv"></div>
        <div className="spacediv"></div>
        <div className="spacediv"></div>
        <div className="spacediv"></div>
        <h1>MongoDB.local is<br/>coming to a city<br/> near you!</h1>
        <div className="spacediv"></div>
        <div className="spacediv"></div>
        <p>Enjoy technical deep-dives, one-on-one<br/> expert advice, product announcements, <br/>and more. Join us for a day-long event to <br/>elevate your skills.</p>
        <div className="spacediv"></div>
        <div className="spacediv"></div>
        <Link>View the Schedule</Link>
      </div>
    </Container>
  )
}

const Container = styled.div`
background-color; #efff9e;
background-image: url('../assets/art.png');
height: 100vh;
width: 100vw;
.horizontalspacesmall{
    width: 0.5rem;
}
.spacediv{
    padding: 0.5rem;
}
.textContainer{
    display: flex;
    flex-direction: column;
    padding-left: 2rem;
    color: #3A674D;
    Link{
        color: #3A674D;
        
    }
}
`;

export default MongoDbDetailContainer
