import React from 'react'
import styled from 'styled-components'


function SocialLoginButton({icon, title}) {
  return (
    <Container>
        <div className="customBtn">
            <img src={icon} className="icon"></img>
            <span className="buttonText">{title}</span>
        </div>
    </Container>
  )
}

const Container = styled.div`
    .customBtn {
        height: 3rem;
        display: flex;
        flex-direction: row;
        background: white;
        color: #444;
        align-items: center;
        justify-content: center;
        vertical-align: middle;
        border-radius: 5px;
        border: thin solid #888;
        box-shadow: 0px 0px 0px grey;
        white-space: nowrap;
        :hover {
            cursor: pointer;
          }
          span.label {
            font-family: serif;
            font-weight: normal;
          }
          .icon {
            // background: url('../assets/google.png') transparent 5px 50% no-repeat;
            display: inline-block;
            vertical-align: middle;
            width: 2rem;
            height: 2rem;
          }
          span.buttonText {
            display: inline-block;
            vertical-align: middle;
            padding-left: 8px;
            padding-right: 22px;
            font-size: 14px;
            font-weight: bold;
            /* Use the Roboto font that is loaded in the <head> */
            font-family: 'Roboto', sans-serif;
          }
    }
    
    `;

export default SocialLoginButton
