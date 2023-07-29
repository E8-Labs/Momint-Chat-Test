import React, { useState, useEffect, useCallback } from "react";
import { Link, Route, Routes } from 'react-router-dom';
import styled from 'styled-components';
import background from '../../assets/bg-image.png'
import gptLogo from '../../assets/chatgpt.svg'
import userIcon from '../../assets/user-icon-white.svg'
import crossIcon from '../../assets/cross.svg'
import { alignProperty } from "@mui/material/styles/cssUtils";

function ChatGptLogin(props){
    console.log(props)
    const [index, setIndex] = useState(0);
    const nextPreviousBtnClicked = (event) =>{
        // console.log("button clicked")
        if(event.currentTarget.id === "next"){
            console.log(event.currentTarget.id + " btn clicked")
            if (index == 2){
                setIndex(0)
            }
            else{
                setIndex(index + 1)
            }
        }
        else{
            console.log(event.currentTarget.id + " btn clicked")
            if (index == 0){
                setIndex(2)
            }
            else{
                setIndex(index +- 1)
            }
        }
    }

    const handleSigninBtnClick = (e)=>{
        props.signinBtnTapped()
    }
    const handleRegisterBtnClick = (e)=> {
        props.registerBtnTapped()
    }
    return(
        <>
            <div className="row ">
                <div className="col-md-12">
                    <div className="row row-cross-icon"> 
                        <div className="col-sd-2 align-self-end">
                            <img src={crossIcon} alt=""></img>
                        </div>
                    </div>
                    <div className="row  my-md-5 gap-2  my-5 align-items-center justify-content-center">
                        <div className="col-md-12 col-auto mx-3 mx-md-0" >
                            <div className="upload_image">
                                <img src={gptLogo} />
                            </div>
                        </div>
                        <div className="col-auto  col-md-8 offset-md-4 " >
                            <h3 className="text-white text-start">Sign in with</h3>
                        </div>
                        <div className="col-auto offset-0 col-md-6 offset-md-3" >
                            <h3 className="text-start" style={{color:"var(--app-primary)"}}>Open AI</h3>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-md-8 offset-md-2 col-8 offset-2 d-flex align-items-center justify-content-center p-md-2 p-0 gap-1 bg-app-primary rounded-pill"
                                onClick={e => handleSigninBtnClick(e)}>
                            <button className="btn btn-md d-flex align-items-center justify-content-center signinbtn   gap-2">
                               <img className="btnicon" src={userIcon} />
                              <span className="fs-6 fw-bold">Sign In with OpenAI</span>
                            </button>
                        </div>
                    </div>
                    <div className="row my-5">
                        <div className="d-flex align-items-center justify-content-center p-md-2 p-0 gap-1">
                            <span style={{ marginBottom:"20px", color: "white" }}>Don't have an account? <Link onClick={e => handleRegisterBtnClick(e)} style={{fontWeight:"500"}}  variant="outline-success">Sign up now</Link></span>
                            
                        </div>
                    </div>
                    
                </div>
                
            </div>
        </>
    )
}



export default ChatGptLogin;