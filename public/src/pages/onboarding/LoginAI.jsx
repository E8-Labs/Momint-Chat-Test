import React, { useState, useEffect, useCallback, Component } from "react";
import { Link, Route, Routes } from 'react-router-dom';
import styled from 'styled-components';
import background from '../../assets/bg-image.png'
import notpermissionLogo from '../../assets/notpermission.svg'
import userIcon from '../../assets/user-icon-white.svg'
import crossIcon from '../../assets/cross.svg'
import { alignProperty } from "@mui/material/styles/cssUtils";
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';

//Images
import upload_image from '../../assets/upload_image.svg';

class LoginAI extends Component {
    constructor(props) {
        super(props);
        this.state = {
            // Save Upload image
            email: '',
            file: '',
            imagePreviewUrl: this.props.imagePreviewUrl,
            username:this.props.username,
            website: '',
            youtube: '',
            instagram: '',
            password: '',
            // Fome data erroe
            logo:"",
            valid_logo : "",
            change_logo: 0,// this.props.change_logo,
            valid_username : "", 
        };
        // add form value
        // this.username = React.createRef();
    }

    
    handleKeyPress(e){
        if(e.target.name == "username"){
            this.setState({ 
                username : e.target.value,
                valid_username: "" 
            });
        }
    }
    

    nextBtnClicked(){
        this.props.getEmailPassword(this.state.email, this.state.password)
    }
    handleChange(event){
        event.preventDefault()
        console.log("Email changed " + event.target.value)
        this.setState({
            email: event.target.value
        })
    }
    handleChangePassword(event){
        event.preventDefault()
        console.log("Password changed " + event.target.value)
        this.setState({
            password: event.target.value
        })
    }

    render() {
        
        return (
            <>
            <div className="row align-items-center align-content-start " style={{height: "100%"}}>
                <div className="col-md-12">
                    <div className="row  ms-auto  "  style={{height: "20%"}}> 
                        <div className="col justify-content-end">
                            <img src={crossIcon} alt=""></img>
                        </div>
                    </div>
                    
                    <div className="row justify-content-center mt-sm-5">
                        <div className="  user-profile-image-border d-flex  border-app-primary rounded-circle  align-items-center justify-content-center"  
                            style={{width: "90px", height: "90px"}}>
                            <img className="rounded-circle user-profile-image" src={userIcon}  style={{width: "80px", height: "80px"}}/> 
                        </div>
                    </div>
                    <div className="row justify-content-center">
                        <div className="col-auto singup_input mt-3" >
                            <label className="text-white title2-text fs-5"> Login </label>
                        </div>
                    </div>
                    <div className="row row-cols-1 mt-md-5 gap-2  mt-5 d-flex align-items-center justify-content-center">
                        <form className="col-md-12 col-12 mx-2 mx-md-0 d-flex align-items-center justify-content-center">
                            <div className="row align-items-center justify-content-center gap-md-4 gap-2" style={{minWidth: "100%"}}>
                                <input type="email" id="signuptextform" className="form-control border border-white text-white" placeholder="@email" 
                                    style={{background: "transparent", minWidth: "60%", maxWidth: "75%"}} onChange={this.handleChange.bind(this)}/>
                                    <input type="password" id="signuptextform" className="form-control border border-white text-white" placeholder="******" 
                                    style={{background: "transparent", minWidth: "60%", maxWidth: "75%"}} onChange={this.handleChangePassword.bind(this)}/>
                                
                            </div>
                        </form>
                        
                        
                    </div>

                    <div className="row d-flex align-items-end justify-content-center mt-5 " style={{maxHeight:"70%", minHeight: "60%"}}>
                        <div className="col-6  d-flex align-items-center justify-content-center p-md-2 p-0 gap-1 bg-app-primary rounded-pill" onClick={this.nextBtnClicked.bind(this)}>
                            <button className="btn btn-md d-flex align-items-center justify-content-center signinbtn   gap-0">
                              <span className="fs-6 fw-bold text-white ">Next</span>
                            </button>
                        </div>
                    </div>
                    
                    
                </div>
                
            </div>
            <ToastContainer />
        </>
        );
    }
}
export default LoginAI;