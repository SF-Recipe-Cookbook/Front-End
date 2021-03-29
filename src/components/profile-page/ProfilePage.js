// should list all recipes from user as cards.  Should include Search for recipe by title or tagged categories

import React, { useState } from 'react';
import Recipe from './RecipeComponent';


const Profile = (props) => {
    const initialState = {
        username: '',
        password: '',
        email: '',
        recipes: [],
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
        window.location.href='#';
      }

     

    return (
        <div className='profile-component'>
            <header>
                <h1>Welcome back, {user.username}</h1>
                <button onClick={handleClick}>logout</button>
            </header>
            <section className='user-card'>
                <div className='user-info'>
                    <h2>{user.username}</h2>
                    <p>{user.email}</p>
                </div>
                <div className='user-picture'>
                    <img src="https://img.huffingtonpost.com/asset/5967ac4d2100003700fc6bc9.jpeg" alt="Person Cooking" />
                </div>
            </section>
            <div className='recipe-search'>
                <input
                    type='text'
                    name='recipe'
                    placeholder='search for recipe name here'
                    value={search}
                    onChange={handleChange}
                />
            </div>
            <section className='recipe-cards'>
                {user.recipes.map(recipe => {
                    return <Recipe recipe={recipe} search={search} />
                })}
            </section>
            <footer>
                <button
                 onClick={
                    window.scroll({
                    top: 0, 
                    left: 0, 
                    behavior: 'smooth' 
                    })}>
                Return to Top of Page
                </button>
            </footer>
        </div>
    )
}

export default Profile;