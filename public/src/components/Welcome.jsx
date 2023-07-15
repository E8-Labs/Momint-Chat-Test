import react, {useState, useEffect} from 'react'
import { Link, useNavigate } from 'react-router-dom'
import styled from "styled-components";
import Robot from '../assets/robot.gif'

export default function Welcome({currentUser}){
    // const [userName, setUserName] = useState("");
    // const [currentUser, setCurrentUser] = useState(undefined);
  // var user = useState(undefined)
    // const getUser =  ()=>{
    //     user =  JSON.parse(
    //         localStorage.getItem('chat-app-user')
    //       ).user;
    //       console.log("User in Welcome " + user.username)
    //     //   setCurrentUser(user)
    //     //   setUserName(
    //     //     user.username
    //     //     );
    // }
    // getUser();
    return(
        <>
          {
          currentUser !== null ? (
            <Container className="container">
            <img src={Robot} alt="Robot"></img>
            <h1>Welcome <span>{currentUser.user.username}!</span></h1>
            <h3>Please select a chat to start messging</h3>

        </Container>
          ) : (<div>Hello</div>)
        }
        </>
    )
}



const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: white;
  img {
    height: 20rem;
  }
  span {
    color: #4e0eff;
  }
`;
