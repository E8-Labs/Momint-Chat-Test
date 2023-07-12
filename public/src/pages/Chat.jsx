// import react from 'react'
import react, {useState, useEffect} from 'react'
import { Link, useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import Logo from '../assets/logo.png'
import axios from 'axios';
import Contacts from './Contacts';

import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
import { registerRoute, allUsersRoute } from '../utils/APIRoutes';
import Welcome from '../components/Welcome';
import ChatContainer from '../components/ChatContainer';


function Chat(){

    

var [contacts, setContacts] = useState([])

  const navigate = useNavigate();

  const [currentUser, setCurrentUser] = useState(undefined);
  const [currentChat, setCurrentChat] = useState(undefined);
  const user = JSON.parse(localStorage.getItem('chat-app-user'))
  console.log("Token is " + user.token)

  const handleChatChange = (chat) => {
    setCurrentChat(chat);
  };
  // const loadCurrentUser = useCallback(async()=>{
  //   if (!localStorage.getItem('chat-app-user')) {
  //     navigate("/login");
  //   } else {
  //     setCurrentUser(
  //       await JSON.parse(
  //         localStorage.getItem('chat-app-user')
  //       )
  //     );
  //     loadUsers(currentUser.token);
  //   }
  // });
  useEffect( () => {

    const loadUsers = async(token)=> {
      console.log("Auth token in header " + token)
      const headers = { 'Authorization': `Bearer ${token}` };
      axios.get(allUsersRoute, {headers}).then((response)=>{
          console.log(response.data);
          setContacts(response.data.data)
      })
    }
    
    loadUsers(user.token);
  

  // loadUsers(user.token);
    
  }, []);


//   useEffect( ()=>{
//     loadUsers();
//   })



    return(
    
            <Container>
                <div className='container'>
                    <Contacts 
                      contacts={contacts} 
                      changeChat={handleChatChange}>

                      </Contacts>

                      {
                        currentChat === undefined ? (<Welcome currentUser={user}></Welcome>) :
                        <ChatContainer currentUser={user}></ChatContainer>

                      }
                      
                    
                </div>
            </Container>
    );
}

const Container = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1rem;
  align-items: center;
  background-color: #131324;
  .container {
    height: 85vh;
    width: 85vw;
    background-color: #00000076;
    display: grid;
    grid-template-columns: 25% 75%;
    @media screen and (min-width: 720px) and (max-width: 1080px) {
      grid-template-columns: 35% 65%;
    }
  }
`;

export default Chat; 