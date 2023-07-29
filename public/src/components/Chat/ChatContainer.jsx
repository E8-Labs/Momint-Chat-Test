import React, { useState } from 'react';
import styled from 'styled-components';
// import RoomList from './RoomList';
import ChatForm from './ChatForm';
// import Conversation from './Conversation';
// import Navigation from './Navigation';
// import SearchRooms from './SearchRooms';
// import { useChat } from '../context/ChatProvider';
import { Description } from '../../styled/Description';


import usersIcon from '../../assets/users.svg'
import Conversation from './Conversation';

const ChatAppContainer = styled.div`
    --vertical-padding: 3vh;

    display: flex;
    gap: 2vw;
    height: 100vh;
    width: 80vw;
    justify-content: space-between;
    background: transparent;
    box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px,
                rgba(0, 0, 0, 0.12) 0px -12px 30px,
                rgba(0, 0, 0, 0.12) 0px 4px 6px,
                rgba(0, 0, 0, 0.17) 0px 12px 13px,
                rgba(0, 0, 0, 0.09) 0px -3px 5px;

    @media (max-width: 820px) {
        position: relative;
        width: 100%;
        height: 100vh;
        flex-direction: column-reverse;
        font-size: 0.85rem;
        gap: 0;
    }
`;

const CenterContainer = styled.div`
    display: flex;
    flex: 1;
    gap: 1.5vw;
    flex-direction: column;
    height: 90%;
    margin: 0 0;
    // padding: 3vw 1vw;

    @media (max-width: 820px) {
        height: 80%;
    }
    
`;

const Chat = styled.div`
    padding: var(--vertical-padding) var(--vertical-padding) 1.5vh var(--vertical-padding);
    display: flex;
    flex: 1;
    flex-direction: column;
    height: 80%;
    background: var(--carousel-background);
    border-radius: 30px;

    @media (max-width: 820px) {
        margin: 0 2.5vw;
    }
`;

const Header = styled.header`
    display: flex;
    align-items: center;
    gap: 1.1em;
    border-bottom: 1px solid rgba(0, 0, 0, 0.08);
    padding-bottom: 1em;
    height: 3.2em;
    
    & img {
        height: 100%;
        border-radius: 0.7em;
        background-color: black;
    }

    & h2 {
        font-size: 0.85em;
        font-weight: 600;
    }
`;

const WelcomeMessage = styled.p`
    margin: auto 0;
    font-size: 0.9em;
    text-align: center;
    color: rgba(0, 0, 0, 0.5);
`;

const ChatContainer = () => {
    const [query, setQuery] = useState('');
    const [isNavOpen, setIsNavOpen] = useState();
    const [messageToSend, setMessageToSend] = useState(null)
    // const { currentRoom } = useChat();


    const sendMessage = (message) =>{
        console.log("Message send " + message)
        const result = Math.random().toString(36).substring(2,7);
        console.log(result);
        const m = {"message": message, id: result}
        setMessageToSend(m)
    }
    return (
        <ChatAppContainer className='bg-clear'>
            
            <CenterContainer className='bg-clear'>
                {/* <SearchRooms query={ query } setQuery={ setQuery } /> */}

                <Chat>
                    {
                        
                        <>
                            <Header>
                                <img alt='room-img' src={ usersIcon } />

                                <div>
                                    <h2>{ "AI Coach" }</h2>
                                    {/* <Description color='#000' size='0.75em'>{ currentRoom.description }</Description> */}
                                </div>
                            </Header>
                            
                            <Conversation chatid="64c3ea7f694ff1ec5e897577" message = {messageToSend}/>
            
                            <ChatForm sendMessage={sendMessage}/>
                        </>

                    }
                </Chat>
            </CenterContainer>

            
        </ChatAppContainer>
    );
};

export default ChatContainer;