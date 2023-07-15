import react, {Component} from "react";
import { Link, useNavigate } from 'react-router-dom'
import styled from "styled-components";
import Logo from '../assets/logo.png'
import SocialLoginButton from "../components/SocialLoginButton.";
import GoogleIcon from '../assets/google.png'
import FacebookIcon from '../assets/fb.png'
import MongoDbDetailContainer from "../components/MongoDbDetailContainer";

class MongoLanding extends Component{

    // constructor(){

    // }

    handleChange = (event)=>{
        // setValues({...values, [event.target.name]: event.target.value })
        
    }

    handleSubmit = (event)=>{
        // setValues({...values, [event.target.name]: event.target.value })
        
    }

    render(){
        return (
            <Container>
                <div className="authDiv">
                    <div className="logoAndName">
                        <img className = "logo" src={Logo} alt="Logo"></img>
                        <h3>MongoDB</h3>
                    </div>
                    <div className="logintext">
                        <h2>Log in to your account</h2>
                    </div>
                    <div className="registerdiv">
                        <h4>Don't have an account?</h4>
                        <div className="horizontalspacesmall"></div>
                        <button className="registerButton" onClick={()=>{console.log("Hello Register")}}>Sign Up</button>
                    </div>

                    <div className="buttonssocial">
                        {/* <button className="socialbuttoncustom">Google </button> */}
                        <SocialLoginButton title="Google" icon={GoogleIcon}></SocialLoginButton>
                        <div className="spacediv"></div>
                        <SocialLoginButton title="Facebook" icon={FacebookIcon}></SocialLoginButton>
                        {/* <button className="socialbuttoncustom">Facebook </button> */}
                        <div className="spacediv"></div>
                        <p>-----------Or login with email and password-----------</p>
                    </div>
                    <div className="spacediv"></div>
                    <div className="formdiv">
                        <form onSubmit={(event)=>this.handleSubmit(event)}>
                             { <div className="spacediv"></div> }
                             <div>
                                <label>Email address</label>
                                <input type='email' placeholder='Email' name='email' onChange={e => this.handleChange(e)}></input>
                             </div>
                           
                            <div>
                                <label>Password</label>
                                <input type='password' placeholder='Password' name='password' onChange={e => this.handleChange(e)}></input>
                            </div>

                            <button type='Login'>Login</button>
                        
                        </form>
                    </div>
                    
                </div>
                <div className="tutDiv">
                    <MongoDbDetailContainer className="mongodetailDiv"></MongoDbDetailContainer>
                </div>
            </Container>
        )
    }
}


const Container = styled.div`
    width: 100vw;
    height: 100vh;
    // background-color: blue;
    display: flex;
    flex-direction: row;
    .horizontalspacesmall{
        width: 0.5rem;
    }
    .spacediv{
        padding: 0.5rem;
    }
    .tutDiv{
        background-image: url('../assets/art.png');
        width: 75vw;
        height: 100vh;
        background-color: #efff9e;
    }
    .authDiv{
        padding-top: 6rem;
        padding-left: 2rem;
        display: flex;
        flex-direction: column;
        align-items: space-between;
        // justify-content: center;
        width: 25vw;
        height: 100vh;
        background-color: white;

        .buttonssocial{
            margin-top: 3rem;
            height: 7.3rem;
            padding-right: 2rem;
            justify-content: center;
            display: flex;
            flex-direction: column;
            
            p{
                justify-content: center;
                font-size: 12px;
                // margin-top: 1rem;
            }
        }
        .logintext{
            padding-top: 2rem;
            display: flex;
            flex-direction: column;
            color: #3A674D;
            h2{
                color: #3A674D;
            }
            
        }
        .registerdiv{
            padding-top: 2rem;
            height: 1rem;
            display:flex;
            vertical-align:middle;
            flex-direction: row;
            align-items:center;
            // justify-content: center;
            color: #3A674D;
            button{
                color: blue;
                font-size: 16px;
                font-weight: bold;
                background-color: transparent;
                border: none;
                cursor: pointer;
            }
        }
        .logoAndName{
            // background-color: red;
            height: 1rem;
            display:flex;
            vertical-align:middle;
            flex-direction: row;
            align-items:center;
            .logo{
                width: 2rem;
                height: 2rem;
                
            }
            h3{
                padding-left: 0.3rem;
                color: #3A674D;
            }
            
        }
        h2{
            padding-left: 0.3rem;
            color: #3A674D;
        }
        .formdiv{
            // width: 25vw;
            // justify-content: center;
            // background-color: red;
            display: flex;
            flex-direction: column;
            // gap: 1rem;
            // align-items: center;
            form {
                display: flex;
                flex-direction: column;
                gap: 1rem;
                // background-color: #00000076;
                border-radius: 2rem;
                padding-right: 2rem;
              }
              input {
                background-color: transparent;
                padding: 1rem;
                border: 0.1rem solid LightGray;
                border-radius: 0.4rem;
                color: black;
                width: 100%;
                font-size: 1rem;
                &:focus {
                  border: 0.1rem solid black;
                  outline: none;
                }
              }
              button {
                width: 8rem;
                background-color: #daf2e0;
                color: black;
                padding: 1rem 2rem;
                border: none;
                font-weight: normal;
                cursor: pointer;
                border-radius: 0.4rem;
                font-size: 1rem;
                text-transform: uppercase;
                // &:hover {
                //   background-color: #4e0eff;
                // }
              }
        }
    }

`;


export default MongoLanding
