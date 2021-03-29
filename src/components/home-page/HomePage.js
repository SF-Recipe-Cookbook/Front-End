import React from 'react'
import styled from 'styled-components'
import {BrowserRouter as Router, Link, Switch} from 'react-router-dom'

const Page = styled.div ``
const Header = styled.div `
width: 80%;
height: 10vh;
background-color: #7a4343;
display: flex;
`
const Heading = styled.h1 `
color: white;
`
const Button = styled.button `
background-color: #857676;
`
const RecipeCards = styled.div ``
const Text = styled.p ``

const HomePage = () => {
    return (
        <Page>
            <Header>
                <Heading>Super Top Secret Family Cookbook</Heading>
                <Button Link to="/SignUp"> Sign up before your granny starts haunting you</Button>
                <Button Link to="/LogIn">Log in and get to cookin</Button>
            </Header>
            <Text>Here lies all the food your great great great grandma whipped up in the 1800's </Text>
            <RecipeCards></RecipeCards>
        </Page>
    )
}