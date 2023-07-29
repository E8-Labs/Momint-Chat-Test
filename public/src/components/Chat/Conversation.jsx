import React, { useEffect, useRef, useState, Component } from 'react';
import styled from 'styled-components';
import axios from "axios"
import {getMessagesRoute, sendMessageRoute} from "../../utils/APIRoutes"

// import { getFirstLetter } from '../helpers';
// import useMessages from '../hooks/useMessages';
// import { useChat } from '../context/ChatProvider';

const ConversationContainer = styled.div`
    display: flex;
    flex-direction: column;
    background-color: transparent;
    gap: 1vh;
    flex: 1;
    padding: 20px 0;
    overflow: auto;
`;

const MessageContent = styled.div`
    display: flex;
    font-size: 0.8em;
    font-weight: 300;
    padding: 0.8em 1em;
    width: fit-content;
    height: fit-content;
`;

const MessageContainer = styled.div`
    display: flex;
    
    gap: 40px;
    color: #fff;
    // font-size: 1.5rem;
    padding-left: 2rem;
    padding-right: 2rem;
    flex-direction: ${ props => props.incoming ? 'row' : 'row-reverse' };

    ${ MessageContent } {
        
        max-width: 80%;
        background: ${ props => props.incoming ? 'var(--green)' : '#fff' };
        border: ${ props => props.incoming ? 'none' : '1px solid rgba(0, 0, 0, 0.1)' };
        color: ${ props => props.incoming ? '#fff' : '#000' };
        box-shadow:  ${ props => props.incoming ? 'rgba(32, 112, 198, 0.4)' : 'rgba(0, 0, 0, 0.15)'} 2px 3px 15px;
        border-radius: ${ props => props.incoming ? '0 8px 8px 8px' : '8px 0 8px 8px' };
    }
`;

const UserProfile = styled.div`
    display: flex;
    position: relative;
    height: 100%;

    &::before {
        content: 'AI';
        display: grid;
        place-content: center;
        padding: 0.5em;
        width: 1.3em;
        height: 1.3em;
        border-radius: 50%;
        background: var(--secondry-color-dark-palette);
    }
`
const BotMessage = styled.div`
    width: fit-content;
    margin: 0 auto;
    padding: 0.85em 1.7em;
    font-size: 0.7em;
    text-align: center;
    border-radius: 2em;
    background: rgba(0,0,0,0.05);
`;


const utilizeScroll = () => {
    const elRef = React.createRef();
    const executeScroll = () => elRef.current.scrollIntoView();
  
    return { executeScroll, elRef };
  };

class Conversation extends Component{
    // const { socket } = useChat();
    

    constructor(props) {
        super(props);
        this.elScroll = utilizeScroll();
        // this.myRef = React.createRef() 
        this.state = {
            messages : [], 
            chatid: this.props.chatid,
            userid: this.props.userid,
            currentUser: '',
            messagesLoaded: false,
            message: this.props.message,
            shouldSendMessage: "", //id of the message to be sent generate in Chat Container
            currentMessageSent: "",
            shouldScrollToBottom: false,
            
        };
        this.loadMessages = this.loadMessages.bind(this)
    }

    
    // var messages = [{message: "Message one", id: 1, incoming: false}, {message: "Message 2", id: 2, incoming: true}, 
    // {message: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem nihil consequatur, quisquam sequi neque quasi rerum iure voluptatibus similique molestias vitae unde facere? A, architecto ratione cupiditate culpa quibusdam, rerum odio modi sint aspernatur dicta quia maiores voluptas aliquid consequuntur? Consectetur maxime magni qui adipisci repellendus. Omnis odit cumque quas?", id: 3, incoming: false},
    // {message: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ad, explicabo. Dolor illum deserunt quia incidunt odio itaque sunt minima quae.", id: 4, incoming: true}];
    componentDidMount(){
        console.log("In Did mount component " + JSON.stringify(this.state))
        this.loadMessages()
    }

    componentDidUpdate(prevProps, prevState){
        if(this.state.shouldScrollToBottom){
            console.log("Should scroll to bottom")
            this.setState({
                shouldScrollToBottom: false
            })
            this.elScroll.elRef.current.scrollTo(0, this.elScroll.elRef.current.scrollHeight); 
        }
        this.checkIfShouldSendMessage(prevProps, prevState)
    }


    checkIfShouldSendMessage(prevProps, prevState){
        // console.log(JSON.stringify(this.state))
        if(this.props.message !== null ){
            if ((this.state.message === null || (this.state.message.id !== this.props.message.id && this.props.message.id !== this.state.currentMessageSent))){

                // if (this.state.message.id !== this.props.message.id){ // If new message comes in then this will not be equal
                    //So this will set the state.message to current message
                    console.log("New User Message came in " + this.state.currentMessageSent)
                    // this.sendMessage(this.state.message)

                    this.setState({
                        shouldSendMessage: this.props.message.id,
                        message: this.props.message,
                    })
                // }

            }

            else if (this.state.message.id !== this.state.currentMessageSent){
                //Now this will check if the id of the state.message is not equal then send the message
                // and then set the currentMessageSent to the 
                console.log("Sending new  message" + this.props.message)
                this.setState({
                    currentMessageSent: this.state.message.id,
                })
                const message = this.props.message.message
                this.sendMessage(message)
            }
            else{
                console.log("Message " + this.state.message.message + " already sent")
            }
            
        }
        // else if (this.state.shouldSendMessage && this.state.message !== null){
        //     console.log("Now Sending Message")
        //     this.sendMessage(this.state.message)
        //     this.setState({
        //         shouldSendMessage: false,
        //         message: null,
        //     })
        // }
    }
   

    loadMessages (){
        if(!this.state.messagesLoaded){
            const user = JSON.parse(
                localStorage.getItem(process.env.REACT_APP_LocalSavedUser)
              )
              this.setState({
                messagesLoaded: true,
                currentUser: user.user,
            })
            //   this.setState({currentUser: user})
            //   console.log("Tokan in get messages " + user.token)
            const config = {
                headers:{
                  "Authorization": "Bearer " + user.token,
                }
              };
              console.log(getMessagesRoute + `?chat_id=${this.state.chatid}`)
            axios.get(getMessagesRoute + `?chat_id=${this.state.chatid}`, config)
            .then(res=> {
                console.log(res.data.data)
                // setMessages(res.data.data)
                
                res.data.data.map((m, index) =>{
                    this.setState(previousState =>({
                        shouldScrollToBottom: true,
                        messages: [...previousState.messages, m],
                        
                    }))
                })
            })
            .catch(err=> console.log(err))
        }
        
    }
    sendMessage(message){
        // if(this.state.shouldSendMessage){
            // console.log("Should send message in sendMessage Function " + message)
            const user = JSON.parse(
                localStorage.getItem(process.env.REACT_APP_LocalSavedUser)
              )
            this.setState({
                shouldSendMessage: false,
                message: null,
                messages: [...this.state.messages, {message: message, _id: this.state.message.id, sender: user.user._id}]
            })
            this.elScroll.elRef.current.scrollTo(0, this.elScroll.elRef.current.scrollHeight);
// console.log("Sending message")
            const dataToSend = {"message": message, chat_id: this.state.chatid, other_userid: this.state.userid}
            const config = {
                headers:{
                  "Authorization": "Bearer " + user.token,
                }
              };
            console.log("Sending to " + sendMessageRoute)
            axios.post(sendMessageRoute, dataToSend, config).then((result)=>{
                const data = result.data;
                if(data.status === true){
                    const messages = data.data;
                    // console.log("New Message Response " + JSON.stringify(data.data))
                    messages.map((m, index) =>{
                        if (index === 0){
                            this.setState(previousState =>({
                                shouldScrollToBottom: true,
                                messages: [...previousState.messages, m],
                            }))
                            this.setState({
                                messages: this.state.messages.map(el => (el._id === this.state.currentMessageSent ? {...el, m} : el))
                              });
                        }
                        else{
                            this.setState(previousState =>({
                                shouldScrollToBottom: true,
                                messages: [...previousState.messages, m],
                            }))
                        }
                        
                    })
                    
                }
                else{
                    console.log("Error sending message " + data.message)
                }
                
            }).catch((error)=>{
                console.log("Error sending message " + error)
            })
            this.elScroll.elRef.current.scrollTo(0, this.elScroll.elRef.current.scrollHeight);
        // }
        // axios.post(sendMessageRoute, )
    }

    render(){
        // console.log("Re render " + this.props.message)
        
        
        // console.log(JSON.stringify(this.state))
        return (
            <ConversationContainer className='conversation' ref={this.elScroll.elRef}>
                {
                    this.state.messages.map((m, index) => {
                        {
                            // console.log("Inside loop " + m._id + " current " + this.state.currentUser._id + " sender " + m.sender + " incoming" + (m.sender == this.state.currentUser._id ? false : true))
                        }
                        // const { text, author, socket_id, id } = m; //design message to include other fields
                        
                        return (
                            <MessageContainer  key={ m._id } incoming={ m.sender === this.state.currentUser._id ? false : true }>
                                {/* <UserProfile content={ author } /> */}
                                <MessageContent className='fs-6'>{ m.message }</MessageContent>
                            </MessageContainer>
                        );
                    })
                }
            </ConversationContainer>
        );
    }
};

export default Conversation;