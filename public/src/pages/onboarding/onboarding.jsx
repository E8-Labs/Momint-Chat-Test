import React, { useState, useEffect, useCallback, Component } from "react";
import { Route, Routes, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import background from '../../assets/bg-image.png'
import gptLogo from '../../assets/chatgpt.svg'
import userIcon from '../../assets/user-icon-white.svg'
import crossIcon from '../../assets/cross.svg'
import ChatGptLogin from "./ChatgptLogin";
import NotificationPermission from "./NotificationPermission";
import AddProfilePicture from "./AddProfilePicture";
import AddUsername from "./AddUsername";
import AddSocialLinks from "./AddSocialLinks";
import AddPassword from "./AddPassword";
import AddEmail from "./AddEmail";
import LoginAI from "./LoginAI";
// require('dotenv').config()

import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';

class Onboarding extends Component {
  constructor(props) {
      super(props);
      console.log("Save User Key " + process.env.REACT_APP_LocalSavedUser)
      this.state = {
          // Save Upload image
          index: 0,
          page: 'intro', //shows the first screen
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
      this.username = React.createRef();
  }
  componentDidMount(){
    console.log("Component did mount")
    const navigate = this.props.navigate;
    this.loadCurrentUser()
  }

   loadCurrentUser (){
    const navigate = this.props.navigate;
    if (!localStorage.getItem(process.env.REACT_APP_LocalSavedUser)) {
      // navigate("/login");
    } else {
        console.log(process.env.REACT_APP_LocalSavedUser)
        const data = JSON.parse(localStorage.getItem(process.env.REACT_APP_LocalSavedUser))
        console.log(data.user)
        navigate("/prompts")
    //   loadUsers(currentUser.token);
    }
  };

  signinBtnTapped(){
    this.setState({
      page: "login"
    })
  }
  registerBtnTapped(){
    this.setState({
      page: "profile_image"
    })
  }
    getImage(imageUrl, file){
      console.log("Image picked " + imageUrl)
      this.setState({
        page: "email",
        file: file,
        imagePreviewUrl: imageUrl
      })
    }
    getUsername(username){
      console.log("Username added " + username)
      this.setState({
        page: "social_links",
        username: username
      })
    }

    getEmail(email){
      console.log("email added " + email)
      this.setState({
        page: "username",
        email: email
      })
    }

    getPassword(password){
      console.log("Password added " + password)
      this.setState({
        page: "signup",
        password: password
      })
      var formdata = new FormData();
        formdata.append("username", this.state.username);
        formdata.append("email", this.state.email);
        formdata.append("password", password);
        formdata.append("name", this.state.username);
        formdata.append("youtube", this.state.youtube);
        formdata.append("website", this.state.website);
        formdata.append("instagram", this.state.instagram);
        formdata.append("image", this.state.file);
        const apiOption2 = {
            method: "post",
            body: formdata,
            redirect: 'follow'
        }
        fetch("http://localhost:5001/api/users/register",apiOption2)
        .then(function(res) {
            return res.json();
        }).then(resJson => {
            // this.props.clickEvent("stap6");
            if(resJson.status == true){
                console.log("User created")
                let Manin_data_wrap = resJson.data;
                let Profile = Manin_data_wrap.user;
                let profile_img = Profile.image_url;
                localStorage.setItem(process.env.REACT_APP_LocalSavedUser, Manin_data_wrap);
                console.log(Profile.image_url)
                
            }else{
              toast(`Error: ${resJson.message}`);
                // this.setState({ valid_email_address: "Email address is already registered" });
                // this.setState({showerror:true , showerrortype : 2 , showerrormessage: "Something wrong with api fields" });
                // this.error_handaling();
            }
        })
        .catch(error => {
          console.log("User error " + error)
          toast(`User logged in as ${error}`);
            // this.setState({ showerror: true ,showerrortype : 2 ,showerrormessage: "Invalid Response" });
            // this.error_handaling();
        });
    }


    //login here
    getEmailPassword(email, password){
      const apiParams = {
        method: "post",
        headers:{
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        body:JSON.stringify({
            "email" :  email ,
            "password" : password,
        }),
        redirect: 'follow'
      }
    fetch("http://192.168.100.8:5001/api/users/login",apiParams)
    .then(function(res) {
        return res.json();
    }).then(resJson => {
        // this.props.clickEvent("stap6");
        if(resJson.status == true){
            console.log("User Logged in")
            toast(`Success: User logged in`);
            let Manin_data_wrap = resJson.data;
            let Profile = Manin_data_wrap.user;
            let profile_img = Profile.image_url;
            localStorage.setItem(process.env.REACT_APP_LocalSavedUser, JSON.stringify(Manin_data_wrap));
            console.log(Profile.image_url)
            const navigate = this.props.navigate;
            navigate("/prompts")
            
        }else{
          toast(`Error: ${resJson.message}`);
            // this.setState({ valid_email_address: "Email address is already registered" });
            // this.setState({showerror:true , showerrortype : 2 , showerrormessage: "Something wrong with api fields" });
            // this.error_handaling();
        }
    })
    .catch(error => {
      console.log("User error " + error)
      toast(`Error: ${error}`);
        // this.setState({ showerror: true ,showerrortype : 2 ,showerrormessage: "Invalid Response" });
        // this.error_handaling();
    });
    }


    getSocialLinks(web, insta, youtube){
      console.log("Web added " + web)
      this.setState({
        page: "password",
        website: web,
        instagram: insta,
        youtube: youtube
      })
    }
    nextPreviousBtnClicked (event){
        // console.log("button clicked")
        if(event.currentTarget.id === "next"){
            console.log(event.currentTarget.id + " btn clicked")
            if (this.state.index == 2){
              this.setState({
                index: 0
              })
            }
            else{
              this.setState({
                index: this.state.index - 1
              })
                // setIndex(index + 1)
            }
        }
        else{
            console.log(event.currentTarget.id + " btn clicked")
            if (this.state.index == 0){
              this.setState({
                index: 2
              })
            }
            else{
              this.setState({
                index: this.state.index + 1
              })
                // setIndex(index + 1)
            }
        }
    }
    render(){
       return <>
            <div className="row signin_signup_background align-content-center overflow-auto">
                <div className="col-12 col-md-8 col-sm-10 offset-sm-1  offset-md-2 my-sm-5 my-0 rounded px-0 py-0 pt-0">
                    <div className="row onboardingrow">
                    <div className="col-md-6 left-div px-0 pt-5 pt-sm-0">
                    <div className="col-md-12 ">
                        <div id="carouselExampleSlidesOnly" className="carousel slide pt-5 signup-signin-carousel" data-bs-ride="carousel">
                        <div className="carousel-indicators">
                          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                        </div>
                          <div className="carousel-inner  p-2">
                            <div className={this.state.index == 0 ? "carousel-item active" : "carousel-item"}>
                              {/* <img src="..." className="d-block w-100" alt="..."> */}
                              <h2 className="text-white">Prompt 1.</h2>
                              <p className="text-white fw-bold">Empowering creators and users to harness the power of AI through our AI prompt marketplace. </p>
                            </div>
                            <div className={this.state.index == 1 ? "carousel-item active" : "carousel-item"}>
                              {/* <img src="..." className="d-block w-100" alt="..."> */}
                              <h2 className="text-white">Prompt 2.</h2>
                              <p className="text-white fw-bold">Empowering creators and users to harness the power of AI through our AI prompt marketplace. </p>
                            </div>
                            <div className={this.state.index == 2 ? "carousel-item active" : "carousel-item"}>
                              {/* <img src="..." className="d-block w-100" alt="..."> */}
                              <h2 className="text-white">Prompt 3.</h2>
                              <p className="text-white fw-bold">Empowering creators and users to harness the power of AI through our AI prompt marketplace. </p>
                            </div>
                          </div>
                            <button id="previous"  className="carousel-control-prev ps-4 ps-sm-1" type="button" data-bs-target="#carouselExampleControls" 
                                    data-bs-slide="prev" onClick={this.nextPreviousBtnClicked.bind(this)}>
                              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                              <span className="visually-hidden">Previous</span>
                            </button>
                            <button id="next" onClick={this.nextPreviousBtnClicked.bind(this)} className="carousel-control-next pe-4 pe-sm-1" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                              <span className="carousel-control-next-icon" aria-hidden="true"></span>
                              <span className="visually-hidden">Next</span>
                            </button>
                        </div>
                    </div>
                </div>
                <div className="col-md-6 right-div">

                    {
                      this.state.page === "intro" &&(
                        <ChatGptLogin  signinBtnTapped={this.signinBtnTapped.bind(this)} registerBtnTapped={this.registerBtnTapped.bind(this)}/>
                      )
                    }

                    {
                      this.state.page === "login" &&(
                        <LoginAI getEmailPassword={this.getEmailPassword.bind(this)}  />
                      )
                    }
                    {
                      this.state.page === "email" &&(
                        <AddEmail getEmail={this.getEmail.bind(this)} imagePreviewUrl={this.state.imagePreviewUrl}/>
                      )
                    }
                    {
                      this.state.page === "profile_image" &&(
                        <AddProfilePicture getImage={this.getImage.bind(this)}/>
                      )
                    }
                    {
                      this.state.page === "username" &&(
                        <AddUsername imagePreviewUrl={this.state.imagePreviewUrl} getUsername={this.getUsername.bind(this)} />
                      )
                    }
                    {
                      this.state.page === "social_links" &&(
                        <AddSocialLinks imagePreviewUrl={this.state.imagePreviewUrl} username={this.state.username} getSocialLinks={this.getSocialLinks.bind(this)} />
                      )
                    }
                    {
                      this.state.page === "password" &&(
                        <AddPassword imagePreviewUrl={this.state.imagePreviewUrl} username={this.state.username} getPassword={this.getPassword.bind(this)} />
                      )
                    }
                    
                </div>
                    </div>
                    
                </div>
                
            </div>
            <ToastContainer />
        </>
      }
}

export default function(props) {
  const navigate = useNavigate();

  return <Onboarding {...props} navigate={navigate} />;
}

// export default Onboarding;

