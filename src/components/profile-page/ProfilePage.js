// should list all recipes from user as cards.  Should include Search for recipe by title or tagged categories

import React, { useState, useEffect } from 'react';
import Recipe from './RecipeComponent';
import styled from 'styled-components';
import 'fontsource-roboto';
import axiosWithAuth from '../../utils/axiosWithAuth';
import {useHistory} from 'react-router-dom';

// React Component below this line

const Profile = (props) => {
    const initialState = {
        username: '',
        password: '',
    }

    const initialRecipes = {
        recipes: [{
            title: ``,
            category: '',
            timeToMake: '',
            description: '',
            ingredients: '',
            instructions: '',
        }],
    }

    const [user, setUser] = useState(initialState)
    const [recipes, setRecipes] = useState(initialRecipes)
    const [search, setSearch] = useState('')

    const {push} = useHistory()

    useEffect(() => {
        axiosWithAuth().get('/auth/')
            .then(res => {
                setUser(res)
            })
            .catch(err => {
                console.log(err)
            })
        axiosWithAuth().get('/recipes/user')
            .then(res => {
                setRecipes(res)
            })
            .catch(err => {
                console.log(err)
            })
    },[])
       



    const handleChange = e => {
        setSearch({
            ...search,
            [e.target.name]: e.target.value
        })
    }

    const handleClick = () => {
        localStorage.removeItem('token')
        push('/')
      }

    const handleAdd = () => {
        push('/new-recipe')
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
            <AddRecipeButton onClick={handleAdd}>Add a Recipe</AddRecipeButton>
            <RecipeCards>
                {recipes.recipes.map(recipe => {
                    return <Recipe recipe={recipe} search={search} setRecipes={setRecipes} push={push}/>
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
    const AddRecipeButton = styled.button``

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