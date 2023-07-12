import react, {useState, useEffect} from 'react'
import { Link, useNavigate } from 'react-router-dom'
import styled from "styled-components";
import Robot from '../assets/robot.gif'

export default function Welcome(){
    // const [userName, setUserName] = useState("");
    // const [currentUser, setCurrentUser] = useState(undefined);
  var user = useState(undefined)
    const getUser =  ()=>{
        user =  JSON.parse(
            localStorage.getItem('chat-app-user')
          ).user;
          console.log("User in Welcome " + user.username)
        //   setCurrentUser(user)
        //   setUserName(
        //     user.username
        //     );
    }
    getUser();
    return(
        <Container className="container">
            <img src={Robot} alt="Robot"></img>
            <h1>Welcome <span>{user.username}!</span></h1>
            <h3>Please select a chat to start messging</h3>

        </Container>
    )
}



const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  flex-direction: column;
  img {
    height: 20rem;
  }
  span {
    color: #4e0eff;
  }
`;
