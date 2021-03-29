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

    return (
        <div className='profile-component'>
            <h1>Welcome back, {user.username}</h1>
            <div className='user-card'>
                <div className='user-info'>
                    <h2>{user.username}</h2>
                    <p>{user.email}</p>
                </div>
                <div className='user-picture'>
                    <img src="https://img.huffingtonpost.com/asset/5967ac4d2100003700fc6bc9.jpeg" alt="Person Cooking" />
                </div>
            </div>
            <div className='recipe-search'>
                <input
                    type='text'
                    name='recipe'
                    placeholder='search for recipe name here'
                    value={search}
                    onChange={handleChange}
                />
            </div>
            <div className='recipe-cards'>
                {user.recipes.map(recipe => {
                    return <Recipe recipe={recipe} search={search} />
                })}
            </div>
        </div>
    )
}

export default Profile;