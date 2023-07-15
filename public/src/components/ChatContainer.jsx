import react, {useState, useEffect} from 'react'
import { Link, useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import Logo from '../assets/logo.png'
import axios from 'axios';

import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
import { loginRoute } from '../utils/APIRoutes';
import ChatInput from './ChatInput';
import Messages from './Messages'

function ChatContainer({currentChat}){
//     const [currentUser, setCurrentUser] = useState(undefined);
//     const loadCurrentUser = useCallback(async()=>{
//     if (!localStorage.getItem('chat-app-user')) {
//       navigate("/login");
//     } else {
//       setCurrentUser(
//         await JSON.parse(
//           localStorage.getItem('chat-app-user')
//         )
//       );
//     //   loadUsers(currentUser.token);
//     }
//   });
const handleSendMessage = async(msg)=>{

}
    return (
        <Container>
            <div className="chat-header">
                <div className="user-details">
                    <div className="avatar">
                        <img src={currentChat === null ? "https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg" : currentChat.image_url} alt="User">
                        </img>
                    </div>
                    <div className='username'>
                        <h3>
                            {currentChat.username}
                        </h3>
                    </div>
                </div>
            </div>
            <Messages className="chat-messages">
                {/* <h3>Chat messages here</h3 */}
                {/* <Messages></Messages> */}
            </Messages>
            
            <ChatInput handleSendMessage={handleSendMessage}></ChatInput>
            
        </Container>
    )
}

const Container = styled.div`
display: grid;
gap: 0.1rem;
overflow: hidden;
grid-template-rows: 10% 80% 10%;
padding-top: 1rem;
.chat-header{
    display: flex;
    justify-content: left;
    align-items: left;
    padding: 0 2rem;
    .user-details{
        display: flex;
        align-items: center;
        gap: 1rem;
        .avatar{
            img{
                height: 3rem;
                width: 3rem;
                border-radius: 1.5rem;

            }
        }
        .username{
            color: white;
        }
    }
}
`;

export default ChatContainer;
