// should list all recipes from user as cards.  Should include Search for recipe by title or tagged categories

import React, { useState } from 'react';
import Recipe from './RecipeComponent';
import styled from 'styled-components';
import 'fontsource-roboto';

// React Component below this line

const Profile = (props) => {
    const initialState = {
        username: 'Spicy Lunchbox',
        password: 'Lambda',
        email: 'westonwoodard28@gmail.com',
        recipes: [{
            title: `tacos`,
            category: 'Mexican',
            timeToMake: '30 minutes',
            description: 'A taco is a traditional Mexican dish consisting of a small hand-sized corn or wheat tortilla topped with a filling. The tortilla is then folded around the filling and eaten by hand.',
            ingredients: 'tortilla, cheese, tomatoes, ground beef, lettuce',
            instructions: 'these are the instructions on how to make a taco',
        }],
    }

    const [user, setUser] = useState(initialState)
    const [search, setSearch] = useState('')

    const handleChange = e => {
        setSearch({
            ...search,
            [e.target.name]: e.target.value
        })
    }

    const handleClick = () => {
        localStorage.removeItem('token')
        window.location.href='#';//add url once we've set up for deployement
      }

    return (
        <Page>
            <Header>
                <p></p>
                <HeaderTitle>Welcome back, {user.username}</HeaderTitle>
                <HeaderButton onClick={handleClick}>logout</HeaderButton>
            </Header>
            <UserCard>
                <UserPic src="https://img.huffingtonpost.com/asset/5967ac4d2100003700fc6bc9.jpeg" alt="Person Cooking" />
            </UserCard>
            <RecipeSearch>
                <p>Search for Recipe Here:</p>
                <input
                    type='text'
                    name='recipe'
                    placeholder='Recipe Name'
                    value={search}
                    onChange={handleChange}
                />
            </RecipeSearch>
            <RecipeCards>
                {user.recipes.map(recipe => {
                    return <Recipe recipe={recipe} search={search} />
                })}
            </RecipeCards>
            <Footer>
                <FooterButton
                 onClick={
                    window.scroll({
                    top: 0, 
                    left: 0, 
                    behavior: 'smooth' 
                    })}>
                Return to Top of Page
                </FooterButton>
            </Footer>
        </Page>
    )
}

export default Profile;


//styling below this line

const Page = styled.div`
    font-family: 'Roboto', sans-serif;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
`

    const Header = styled.header`
        width: 100%;
        height: 10vh;
        display: flex;
        flex-direction: row;
        justify-content: space-between;

    `


        const HeaderTitle = styled.h1`
            color: #813D18;
            font-size: 40px;
            margin-left: 105px;
        `

        const HeaderButton = styled.button `
            height: 50%;
            width: 100px;
            box-shadow: 3px 3px #4D6E7F;
            margin-right: 5px;   
        `

    const UserCard = styled.section`
        height: 20vh;
        width: 50%;
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-bottom: 3px;
    `

            const UserPic = styled.img`
                height: 100%;
                box-shadow: 3px 3px #4D6E7F;
            `

    const RecipeSearch = styled.form`
         height: 10vh;
         display: flex;
         flex-direction: column;
         justify-content: flex-end;
         margin-bottom: 5px;

    `

    const RecipeCards = styled.section`
         height: 50vh;
         border: 2px solid black;
         display: flex;
         flex-wrap: wrap;
         flex-direction: row;
         justify-content: center;
         align-items: center;
    `

    const Footer = styled.footer`
        height: 10vh;
        display: flex;
        justify-content: center;
        align-items: flex-end;

    `

        const FooterButton = styled.button`
        height: 50%;
        `