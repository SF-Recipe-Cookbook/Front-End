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
                <HeaderTitle>Welcome back, {user.username}</HeaderTitle>
                <HeaderButton onClick={handleClick}>logout</HeaderButton>
            </Header>
            <UserCard>
                <UserInfo>
                    <Username>{user.username}</Username>
                    <Email>{user.email}</Email>
                </UserInfo>
                <UserPicture>
                    {/*placeholder image */}
                    <UserPic src="https://img.huffingtonpost.com/asset/5967ac4d2100003700fc6bc9.jpeg" alt="Person Cooking" />
                </UserPicture>
            </UserCard>
            <RecipeSearch>
                <input
                    type='text'
                    name='recipe'
                    placeholder='search for recipe name here'
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
`

    const Header = styled.header`
        height: 10vh;
        display: flex;
        flex-direction: row;
        justify-content: space-between;

    `


        const HeaderTitle = styled.h1``

        const HeaderButton = styled.button `
            height: 50%;
        `

    const UserCard = styled.section`
        height: 20vh;
    `

        const UserInfo = styled.div``
        
            const Username = styled.h2``

            const Email = styled.p``

        const UserPicture = styled.div`
            
        `

            const UserPic = styled.img`
                width: 25%;
            `

    const RecipeSearch = styled.form`
         height: 10vh;
    `

    const RecipeCards = styled.section`
         height: 50vh;
    `

    const Footer = styled.footer`
        height: 10vh;
    `

        const FooterButton = styled.button``