import React from 'react';

const Recipe = ({recipe, search}) => {
    if (search === ''|| search === recipe.title) {

    return (
        <div className='recipe-component'>
            <div className='recipe-title'>
                <h3>{recipe.title}</h3>
                <img src='https://images.immediate.co.uk/production/volatile/sites/30/2020/08/chorizo-mozarella-gnocchi-bake-cropped-9ab73a3.jpg' alt='delicious food'/>
            </div>
            <div className='recipe-description'>
                <p>{recipe.category}</p>
                <p>{recipe.timeToMake}</p>
                <p>{recipe.description}</p>
            </div>
            <div className='recipe-ingredients'>
                <p>{recipe.ingredients}</p>
            </div>
            <div className='recipe-instructions'>
                <p>{recipe.instructions}</p>
            </div>
        </div>
    )
    }
}

export default Recipe;