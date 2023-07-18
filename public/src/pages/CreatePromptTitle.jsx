import React, { Component } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import { browserHistory } from 'react-router'
import withRouter from '../utils/WithRouter'


 class CreatePromptTitle extends Component {

    

    handleChangeTitle = (event)=>{
        this.setState({
            title: event.target.value
        })
    }

    handleChangeDescription = (event)=>{
        this.setState({
            description: event.target.value
        })
    }

    handleSubmit = (event)=>{
        console.log("Submit button tapped")
        this.setState({submitted: true});
        const navigate = this.props.navigate;
        // const navigate = useNavigate()
        navigate("/createPromptTopic")
        // this.props.navigate(("/createPromptTopic"), {title: this.state.title, description: this.state.description, isPublic: this.state.isPublic})

    }

    handleToggleButtonClickPublic = (event)=>{
        console.log("Public button clicked")
        this.setState({
            isPublic: true
        })
    }
    handleToggleButtonClickPrivate = (event)=>{
        console.log("Private  button clicked")
        this.setState({
            isPublic: false
        })
    }

    constructor(props){
        super(props)
        
        this.state = {
            title: '',
            description: '',
            isPublic: true,
            submitted: false
            
        }
    }

    

  render() {
    
    return (
        
      <Container1>
        
        <div className='backcontainer'>
            <div className="titlediv">
                <h3>Create Prompt</h3>
            </div>
            <div className="centerdiv">
                <div className={this.state.isPublic ? "btnselected" : "btn"}>
                    <button onClick={this.handleToggleButtonClickPublic}>Public</button>
                </div>
                <div className="horizontalspacesmall">

                </div>

                <div className={!this.state.isPublic ? "btnselected" : "btn"}>
                    <button onClick={this.handleToggleButtonClickPrivate}>Private</button>
                </div>
            </div>
            <div className="formdiv">
                <FormContainer>
                    <form >
                        
                        <input type='text' placeholder='Title' name='title' onChange={e => this.handleChangeTitle(e)}></input>
                        <textarea rows="10" type='text' placeholder='Description' name='description' onChange={e => this.handleChangeDescription(e)}></textarea>

                        <button type='button' onClick={this.handleSubmit}>Continue</button>
                        
                    </form>
                </FormContainer>
            </div>
            
        </div>
      </Container1>
    )
  }
}


const Container1 = styled.div`
height: 100vh;
width: 100vw;
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
background-color: Gray;
.horizontalspacesmall{
    width: 0.5rem;
}
.centerdiv{
    // background-color: red;
    display: flex;
    flex-direction: row;
    width: 100%;
    height: 100%;
    gap: 1.5 rem;
    align-items: center;
    justify-content: center;

    .btn{
        cursor: pointer;
        padding: 1rem 1.5rem;
        background-color: transparent;
        border-radius: 0.6rem;
        color: white;
        button{
            background-color: transparent;
            border: none;
            color: white;
            cursor: pointer;
        }
    }
    .btnselected{
        cursor: pointer;
        padding: 1rem 1.5rem;
        background-color: #FFFFFF10;
        border-radius: 0.6rem;
        color: white;
        button{
            background-color: transparent;
            border: none;
            color: white;
            cursor: pointer;
        }
    }

}
.backcontainer{
    display: grid;
    grid-template-rows: 8% 10% 82%;
    grid-template-columns: 100%;
    // flex-direction: column;
    background-color: #0D0D0D;
    width: 30%;
    height: 70%;
    justify-content: center;
    align-items: center;
    border-radius: 3rem;
    .titlediv{
        // background-color: red;
        display: flex;
        align-items: center;
        justify-content: center;
        h3{
            color: white;
            text-align: center;
            
        }
    }

    .formdiv{
        // background-color: yellow;
        display: flex;
        height: 100%;
        width: 100%;
        align-items: center;
        justify-content: center;
    }
}

`;


const FormContainer = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1rem;
  align-items: center;
  background-color: transparent;
  

  form {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 2rem;
    background-color: transparent;
    border-radius: 2rem;
    padding: 2rem 2rem;
  }
  input, textarea {
    background-color: transparent;
    padding: 1rem;
    border: 0.1rem solid white;
    border-radius: 1.1rem;
    color: white;
    width: 100%;
    font-size: 1rem;
    
    &:focus {
      border: 0.1rem solid #00C28C;
      outline: none;
    }
    
  }
  textarea{
    rows: 10;
  }
  button {
    width: 100%;
    padding: 2rem;
    background-color: #00C28C;
    color: white;
    padding: 1rem;
    border: none;
    font-weight: normal;
    cursor: pointer;
    border-radius: 0.4rem;
    font-size: 1.2rem;
    // text-transform: uppercase;
    text-align: center;
    &:hover {
      background-color: #00C28C;
    }
  }
  
`;

export default function(props) {
    const navigate = useNavigate();
  
    return <CreatePromptTitle {...props} navigate={navigate} />;
  }
// export default CreatePromptTitle;