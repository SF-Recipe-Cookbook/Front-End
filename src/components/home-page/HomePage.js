import React from 'react'
import styled from 'styled-components'
import { useHistory } from 'react-router-dom'
import myImage from './SFCookbook1.jpg'
// import {BrowserRouter as Router, Link, Switch} from 'react-router-dom'

const Page = styled.div`
    margin:0;
    padding:0;
    // background: #726f5c;
    display:flex;
    flex-flow: row wrap;
    justify-content: center;
    align-items: center;
    
`

const Header = styled.div `
    // border: 1px dashed black;
    width: 80%;
    height: 10vh;
    background-color: #813D18;
    display: flex;
    margin: 0 auto;
    justify-content: space-around;
    `

const Heading = styled.h1 `
    // border: 1px dashed white;
    color: #D5C9BB;
    background-color: #813D18;
    text-align: center;
    font-size: 2em;
    margin-top: 2%;
    `
const Button = styled.button `
    font-size: 1.1em;
    // border: 1px dashed black;
    display: flex;
    background-color: #D5C9BB;
    color: #333D45;
    text-align: center;
    margin: 1%;
    width: 10%;
    border: none;
    border-radius: 0px 34px 0px 34px;
    justify-content: center;
    align-content: center;
    transition: all .1s ease-in-ease-out;
        :hover {
            box-shadow: 8px 9px 15px 5px black;
        }
    `

const StyledImg = styled.img`
    display: flex;
    width: 80%;
    `

const Text = styled.h3 `
    text-align: center;
    position: absolute;
    font-size: 2.7em;
    background: transparent;
    color: white;
    letter-spacing: 4.4px;
    word-spacing: 3.4px;
    line-height: 100px;
    transition: all .3s ease-in-ease-out;
        :hover {
            transform: scale(1.1);
        }
    `

const Footer=styled.div`
    background:#c35b48;
    display:flex;
    flex-direction:wrap;
    justify-content: space-between;
    align-items:center;
    width:80%;
    height:10vh;
    color:white;
    background-color: #813D18;
    
`
const FooterLink=styled.a`
    color:white;
    background-color: #813D18;
`


const FooterP=styled.p`
    font-size:.8rem;
    margin:10%;
    background-color: #813D18;

`

const HomePage = () => {
    const history = useHistory()

    const login = () => {
        history.push('/login')
    }

    const signup = () => {
        history.push('/signup')
    }
    return (
        <Page>
            <Header>
                <Button onClick={signup}> Sign up before granny rolls over in her grave</Button>
                <Heading>Super Top Secret Family Cookbook</Heading>
                <Button onClick={login}>Log in to<br></br> get to cookin</Button>  
            </Header>
            <StyledImg src={myImage}/>
            <Text>Log In if you're cool<br></br>Sign Up if you want to be cool <br></br>Just try to make it like great great great grandma<br></br> whipped it up in the 1800's </Text>
            <Footer>
                <FooterP>Copyright 2021</FooterP>
                <FooterLink href='./signup'>Sign Up</FooterLink>
                <FooterLink href='./login'>Login</FooterLink>
                <FooterP>Track Team AllStars</FooterP>
            </Footer>
        </Page>
    )
}

export default HomePage