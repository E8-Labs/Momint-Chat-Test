import React, { useState, useEffect, useCallback } from "react";
import { Route, Routes } from 'react-router-dom';
import styled from 'styled-components';
import background from '../../assets/bg-image.png'
import gptLogo from '../../assets/chatgpt.svg'
import userIcon from '../../assets/user-icon-white.svg'
import crossIcon from '../../assets/cross.svg'

function Onboarding2(){

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
    return(
        <Container>
            <div className="container-fluid bg-image d-flex align-items-center justify-content-center">
                <div className="row">
                    <div className=" col-md-6 bg-card  d-flex align-items-center justify-content-center card">
                        <div className="row">
                            <div className="col col-md-6 left-div d-flex ">
                            <div id="carouselExampleSlidesOnly" className="carousel slide pt-5 " data-bs-ride="carousel">
                            <div className="carousel-indicators">
                              <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                              <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                              <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                            </div>
                              <div className="carousel-inner  p-2">
                                <div className={index == 0 ? "carousel-item active" : "carousel-item"}>
                                  {/* <img src="..." className="d-block w-100" alt="..."> */}
                                  <h2>Prompt 1.</h2>
                                  <p className="text-white fw-bold">Empowering creators and users to harness the power of AI through our AI prompt marketplace. </p>
                                </div>
                                <div className={index == 1 ? "carousel-item active" : "carousel-item"}>
                                  {/* <img src="..." className="d-block w-100" alt="..."> */}
                                  <h2>Prompt 2.</h2>
                                  <p className="text-white fw-bold">Empowering creators and users to harness the power of AI through our AI prompt marketplace. </p>
                                </div>
                                <div className={index == 2 ? "carousel-item active" : "carousel-item"}>
                                  {/* <img src="..." className="d-block w-100" alt="..."> */}
                                  <h2>Prompt 3.</h2>
                                  <p className="text-white fw-bold">Empowering creators and users to harness the power of AI through our AI prompt marketplace. </p>
                                </div>
                              </div>
                                <button id="previous"  className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev" onClick={nextPreviousBtnClicked}>
                                  <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                  <span className="visually-hidden">Previous</span>
                                </button>
                                <button id="next" onClick={nextPreviousBtnClicked} className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                                  <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                  <span className="visually-hidden">Next</span>
                                </button>
                            </div>
                            </div>
                            <div className="col col-md right-div ">
                            <div className="row  crossbtn">
                                <div className="col offset-md-10 pt-2">
                                    <img src={crossIcon} />
                                </div>
                            </div>
                                    <div className="row row-cols-1 row-2 pt-md-5  d-flex align-items-center justify-content-center">
                                        <div className="col-sm-12  d-flex align-items-center justify-content-center">
                                            <img src={gptLogo} alt="ChatGpt" />
                                        </div>
                                        <div  className="col-sm-12  d-flex align-items-center justify-content-center">
                                            <h3>Sign In with AI</h3>
                                        </div>
                                        <div  className="col-sm-12  d-flex align-items-center justify-content-center">
                                            <p className="fs-2 fw-bold">OpenAI</p>
                                        </div>

                                        <div className="button-custom d-flex align-items-center justify-content-center p-1 gap-1">
                                            <button className="btn btn-md d-flex align-items-center justify-content-center signinbtn  rounded-pill gap-2">
                                                <img className="btnicon" src={userIcon} />
                                                <span className="fs-6 fw-bold">Sign In with OpenAI</span>
                                            </button>
                                        </div>

                                        <div className="button-custom d-flex align-items-center justify-content-center p-1">
                                            <div className="row registerrow">
                                                <span className="col fs-md-6 fw-normal text-white">Don't have an account?</span>
                                                    <button className="col-1 registerbtn">
                                                            <span className="txt-primary fw-bold">Sign up</span>
                                                    </button>
                                            </div>
                                        </div>
                                    </div>
                                    
                                    
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Container>
    )
}

const Container = styled.div`
.signinbtn{
    background-color: #00C28C;
    color: white;
    .btnicon{
        color: white;
        width: 30px;
        height: 30px;
    }
    
}
.registerbtn{
    width: 100px;
    background-color: transparent;
    border: none;
    cursor: pointer;
    
}
.registerrow{
    width: 18vw;
}
.carousel{
    background-color: transparent;
}
.carousel-indicators{
    display: flex;
    flex-direction: row;
    justify-content: left;
    align-items: left;
    padding-left: 0px;
    margin-left: 0px;
}
.row-2{
    height: 40vh;
}
.txt-primary{
    color: #00C28C;
}
.text-white{
    color: white;
}
p{
    color: #00C28C;
}
h1, h2, h3{
    color: white;
}
.slide{
    color: white;
    width: 30vw;
}
.left-div{
    background-color: #001812;
    height: 70vh;
    width: 30vw;
}
.right-div{
    background-color: #050A08;
    height: 70vh;
    width: 30vw;
}
.bg-card{
    background-color: transparent;
    height: 70vh;
    width: 60vw;
  }
`;

export default Onboarding2;