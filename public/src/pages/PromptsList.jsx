import React, { useState, useEffect, useCallback } from "react";
import { Link, useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import dashboardLogo from '../assets/dashboard.svg'
import userIcon from '../assets/user-icon.svg'
import headphoneIcon from '../assets/headphone.svg'
import usersIcon from '../assets/users.svg'
import privacyIcon from '../assets/privacy.svg'
import termIcon from '../assets/terms.svg'
import PromptItem from '../components/PromptItem'

import Grid from '@mui/material/Grid';
import ProfileBaseView from "../components/Profile/Profile";
import ChatContainer from "../components/Chat/ChatContainer";

function PromptsList() {
    const userImage = "data:image/jpeg;base64,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"
    const prompts = ["Prompt1", "Promt2", "Prompt1", "Promt2", "Prompt1", "Promt2", "Prompt1", "Promt2", "Prompt1", "Promt2", "Prompt1", "Promt2", "Prompt1", "Promt2", "Prompt1", "Promt2"]
  
    const navigate = useNavigate()
    const [menuSelected, setMenuSelected] = useState("dashboard")
    const [currentUser, setCurrentUser] = useState(undefined);
  
    const handleMenuClick = event => {
        console.log(event.currentTarget.id);
        setMenuSelected(event.currentTarget.id)
      };

      const loadCurrentUser = useCallback(async()=>{
        if (!localStorage.getItem(process.env.REACT_APP_LocalSavedUser)) {
          navigate("/onboarding");
        } else {
            console.log(process.env.REACT_APP_LocalSavedUser)

          setCurrentUser(

            JSON.parse(
              localStorage.getItem(process.env.REACT_APP_LocalSavedUser)
            )
          );
        //   loadUsers(currentUser.token);
        }
      });
      useEffect(()=>{
          if(currentUser === undefined){
            loadCurrentUser()
          }
          else{
            console.log(currentUser.username)
          }
      })
    return (
    <div className="container-fluid bg-app-dark-green overflow-none" style={{height: "100vh"}}>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
        
      <div className="row mb-3" style={{height: "6vh"}}>
       
        <nav className="navbar navbar-expand-lg navbar-dark ">
          <div className="container-fluid rounded">
            <a className="navbar-brand text-white fs-3" href="#">Prompt.ai</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse justify-content-end top-nav-custom-class" id="navbarNav">
              <ul className="navbar-nav">
                <li className="nav-item ">
                  <button className="btn text-white" id="search" onClick={handleMenuClick}><i className="fa fa-search"></i></button>
                </li>
                <li className="nav-item">
                    <button className="btn text-white" id="notifications" onClick={handleMenuClick}><i className="fa fa-bell"></i></button>
                </li>
                <li className="nav-item">
                  <img id="profile" className="rounded-pill border" onClick={handleMenuClick} src={userImage} style={{width:"50px", height: "50px", objectFit: "contain"}}/>
                </li>
                <li className="nav-item d-lg-none">
                    <div className="col-sm-12 dbmenubtn " id="dashboard" onClick={handleMenuClick}>
                        <img className="icon" src={dashboardLogo}></img>
                        <button className="button fs-6">Dashboard</button>
                    </div>
                </li>
                <li className="nav-item d-lg-none">
                    <div className="col-sm-12 dbmenubtn " id="chatgpt" onClick={handleMenuClick}>
                        <img className="icon" src={userIcon}></img>
                        <button className="button fs-6">ChatGPT</button>
                    </div>
                </li>
                <li className="nav-item d-lg-none">
                    <div className="col-sm-12 dbmenubtn " id="support" onClick={handleMenuClick}>
                        <img className="icon" src={headphoneIcon}></img>
                        <button className="button fs-6">Customer Support</button>
                    </div>
                </li>
                <li className="nav-item d-lg-none">
                    <div className="col-sm-12 dbmenubtn " id="community" onClick={handleMenuClick}>
                        <img className="icon" src={usersIcon}></img>
                        <button className="button fs-6">Community Forum</button>
                    </div>
                </li>
                <li className="nav-item d-lg-none">
                    <div className="col-sm-12 dbmenubtn " id="privacy" onClick={handleMenuClick}>
                        <img className="icon" src={privacyIcon}></img>
                        <button className="button fs-6">Privacy Policy</button>
                    </div>
                </li>
                <li className="nav-item d-lg-none">
                    <div className="col-sm-12 dbmenubtn " id="terms" onClick={handleMenuClick}>
                        <img className="icon" src={termIcon}></img>
                        <button className="button fs-6">Terms & conditions</button>
                    </div>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        
      </div>

      <div className="row "  style={{height: "80%"}}>
        <div className="col-sm-2 d-none d-lg-inline">
            <div className="row">
                <div className="col-sm-12  dbmenubtn " id="dashboard" onClick={handleMenuClick}>
                    <img className="icon" src={dashboardLogo}></img>
                    <button className="button fs-6">Dashboard</button>
                </div>
                <div className="col-md-12 dbmenubtn" id="chatgpt" onClick={handleMenuClick}>
                    <img className="icon" src={userIcon}></img>
                    <button className="button fs-6">ChatGPT</button>
                </div>
                <div className="col-md-12 dbmenubtn" id="support" onClick={handleMenuClick}>
                    <img className="icon" src={headphoneIcon}></img>
                    <button className="button fs-6">Customer Support</button>
                </div>
                <div className="col-md-12 dbmenubtn" id="community" onClick={handleMenuClick}>
                    <img className="icon" src={usersIcon}></img>
                    <button className="button fs-6">Community Forum</button>
                </div>
                <div className="col-md-12 dbmenubtn" id="privacy" onClick={handleMenuClick}>
                    <img className="icon" src={privacyIcon}></img>
                    <button className="button fs-6">Privacy Policy</button>
                </div>
                <div className="col-md-12 dbmenubtn" id="terms" onClick={handleMenuClick}>
                    <img className="icon" src={termIcon}></img>
                    <button className="button fs-6">Terms & conditions</button>
                </div>
            </div>
        </div>
        <div className={"col-lg-10 h-100  pb-6 " + (menuSelected === "chatgpt" ? "" : "overflow-y-auto")} >
        {
            //disabled flow if the menu is chat gpt in the div above.
            menuSelected == "chatgpt" &&(
                <ChatContainer />
                    
            )
        }
        {
            menuSelected == "privacy" &&(
                <div><h1>This is Privacy</h1></div>
            ) 
        }
        {
            menuSelected == "terms" &&(
                <div><h1>This is Terms</h1></div>
            ) 
        }
        {
            menuSelected == "notifications" &&(
                <div><h1>This is Notifications Screen</h1></div>
            ) 
        }
        {
            menuSelected == "search" &&(
                <div><h1>This is Search</h1></div>
            ) 
        }
        {
            menuSelected == "dashboard" &&(
                <div className="row me-sm-4 ">
                    {
                        prompts.map((element, index) => {
                        // <label>{element}</label>
                            return(
                                <div className="col-xl-3 col-md-4 col-sm-4 col-12 col-xs-12 my-2 justify-content-center align-items-center">
                                    <PromptItem className='promptitem' title={element}></PromptItem>
                                </div>
                            // <Grid item xs={window.screen.availWidth < 720 ? 2 : 3}  className='griditem' key={element + index}>
                            //     <PromptItem className='promptitem' title={element}></PromptItem>
                            // </Grid>
                            )
                        })
                    }
                    </div>
            ) 
        }
        {
            menuSelected == "support" &&(
                <div><h1>This is Customer Support</h1></div>
            ) 
        }
        {
            menuSelected == "community" &&(
                <div><h1>This is Community</h1></div>
            ) 
        }
        {
            menuSelected == "profile" &&(
                <ProfileBaseView user={currentUser}/>
            ) 
        }
        </div>
      </div>
    </div>
  )
}

const Container = styled.div`
height: 100vh;
width: 100vw;
display: grid;
grid-template-rows: 10% 90%;
align-items: center;
justify-content: left;
flex-direction: column;
background-color: #060c0a;
.horizontalspacesmall{
    width: 0.5rem;
}
.verticalspace{
    height: 2.5rem;
}
.titlediv{
    height: 100%;
    width: 100vw;
    background-color: #060c0a;
    display: flex;
    flex-direction: space-between;
    vertical-align: middle;
    flex-direction: row;
    padding: 1rem;
    h3{
        color: white;
    }

    .rightbtns{
        width: 100vw;
        gap: 1rem;
        display: flex;
        flex-direction: row;
       
        justify-content: right;
        background-color: transparent;
        button{
            width: 2.5rem;
            height: 2.5rem;
            background-color: transparent;
            border: none;
            color: white;
            font-size: 1.4rem; /* Set a font size */
            cursor: pointer;
        }
        img{
            width: 2.4rem;
            height: 2.4rem;
            border-radius: 1.2rem;
            border: 0.1rem solid white;
            object-fit: cover;
            cursor: pointer;
        }
    }
}


.bottomdiv{
    height: 100%;
    width: 100vw;
    display: grid;
    grid-template-columns: 15% 80% 5%;
    background-color: transparent;
    .leftpane{
        padding: 1rem;
        display: flex;
        flex-direction: column;
        gap: 1.5rem;
        .menubtn{
            
            cursor: pointer;
            vertical-align: middle;
            justify-content: left;
            align-items: center;
            display: flex;
            img{
                background-color: transparent;
            }
            button{

                // background-color: red;
                padding: 1rem;
                background-color: transparent;
                border: none;
                font-size: 0.8rem;
                cursor: pointer;
                color: white;
                text-align: left;
            }
        }
    }
    
    .rightpane{
        display: flex;
        // flex-direction: column;
        // grid-template-columns: 33% 33% 33%;
        background-color: transparent;
        overflow: scroll;
        color: white;

        .promptitem, .griditem{
            display: flex;
            align-items: center;
            justify-content: center;
            height: 40%;
        }
    }
    .extremerightdiv{
        background-color: red;
    }
}
`;

export default PromptsList


