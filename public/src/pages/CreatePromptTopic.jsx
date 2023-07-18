import React, { Component } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import styled from 'styled-components'

class CreatePromptTopic extends Component {
    catOptions = ["Category1", "Category2", "Category3"]
    topicOptions = ["Topic1", "Topic2", "Topic3"]

    handleChangeHint = (event)=>{
        this.setState({
            hint: event.target.value
        })
    }

    

    handleSubmit = (event)=>{
        console.log("Submit button tapped")
    }

    handleCategoryValueChange = (event)=>{
        console.log("Category selected " + event.target.value)
        this.setState({
            category: event.target.value
        })
    }
    handleTopicValueChange = (event)=>{
        console.log("Topic selected " + event.target.value)
        this.setState({
            topic: event.target.value
        })
    }

    constructor(props){
        super(props)
        this.state = {
            category: '',
            topic: '',
            hint: true
        }
    }

    

  render() {
    return (
      <Container1>
        
        <div className='backcontainer'>
            <div className="titlediv">
                <h3>Create Prompt</h3>
            </div>
            
            <div className="formdiv">
                <FormContainer>
                    <form >
                        
                        <input type='text' placeholder='Ex: Makeup Tutorial, Amazon FBA etc' name='hint' onChange={e => this.handleChangeHint(e)}></input>
                        <select className='categorydropdown' onChange={ this.handleCategoryValueChange} >
                            {
                                this.catOptions.map((element, index) =><option key={element} value={element}>{element}</option>)
                            }
                        </select>

                        <select className='topicdropdown' onChange={ this.handleTopicValueChange}>
                            {
                                this.topicOptions.map((element, index) =><option key={element} value={element}>{element}</option>)
                            }
                        </select>

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
    grid-template-rows: 10% 90%;
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
  
  input, textarea, select {
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
  
    return <CreatePromptTopic {...props} navigate={navigate} />;
  }