import React from 'react';

const Recipe = ({recipe}) => {

    return (
        <div className='recipe-component'>
            <div className='recipe-title'>
                <h3>{recipe.title}</h3>
                <img src='#' alt='delicious food'/>
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

export default Recipe;