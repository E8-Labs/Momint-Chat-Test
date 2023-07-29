import React, { useState, useEffect, useCallback } from "react";
import { Link, Route, Routes } from 'react-router-dom';
import styled from 'styled-components';
import background from '../../assets/bg-image.png'
import notpermissionLogo from '../../assets/locpermission.svg'
import userIcon from '../../assets/user-icon-white.svg'
import crossIcon from '../../assets/cross.svg'
import { alignProperty } from "@mui/material/styles/cssUtils";

function LocationPermission(){

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
        <>
            <div className="row ">
                <div className="col-md-12">
                    <div className="row  ms-auto"> 
                        <div className="col justify-content-end">
                            <img src={crossIcon} alt=""></img>
                        </div>
                    </div>
                    <div className="row row-cols-1 mt-md-5 gap-2  mt-5 d-flex align-items-center justify-content-center">
                        <div className="col-md-12 col-12 mx-3 mx-md-0 d-flex align-items-center justify-content-center" >
                            <div className="upload_image">
                                <img src={notpermissionLogo} />
                            </div>
                        </div>
                        <div className="col-auto" >
                            <h3 className="text-white text-start title2-text fs-5">Allow Prompt.AI to</h3>
                        </div>
                        
                    </div>

                    <div className="row  mb-md-5 gap-0  mb-3 d-flex align-items-center justify-content-center">
                        <div className="col-auto fs-4" >
                            <span className="text-center title2-text fs-6" style={{color:"white"}}>access your locaation</span>
                        </div>
                    </div>

                    <div className="row row-cols-1 mb-md-5 gap-0  my-3 d-flex align-items-center justify-content-center">
                        <div className="col-auto fs-6 d-flex align-items-center justify-content-center" >
                            <span className="text-center paragraph-text fs-6" style={{color:"white"}}>As the community grows, we’ll be hosting seminars in major cities to bring the AI community of prompt engineers together.</span>
                        </div>
                    </div>

                    <div className="row d-flex align-items-center justify-content-center">
                        <div className="col-md-6  d-flex align-items-center justify-content-center p-md-2 p-0 gap-1 bg-app-primary rounded-pill">
                            <button className="btn btn-md d-flex align-items-center justify-content-center signinbtn   gap-2">
                               <img className="btnicon" src={userIcon} />
                              <span className="fs-6 fw-bold text-white ">Allow Location</span>
                            </button>
                        </div>
                    </div>
                    <div className="row my-5">
                        <div className="d-flex align-items-center justify-content-center p-md-2 p-0 gap-1">
                            <span style={{ marginBottom:"20px", color: "white" }}> <Link style={{fontWeight:"500", color:"white"}} to={"/Signup"} variant="outline-success">Not now</Link></span>
                            
                        </div>
                    </div>
                    
                </div>
                
            </div>
        </>
    )
}



export default LocationPermission;