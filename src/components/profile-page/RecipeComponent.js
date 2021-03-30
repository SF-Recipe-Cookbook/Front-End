import React from 'react';
import styled from 'styled-components';


// React Component below this line

const Recipe = ({recipe, search}) => {
    if (search === ''|| search === recipe.title) {

    return (
        <RecipeComponent>
            <RecipeHeader>
                <RecipeTitle>{recipe.title}</RecipeTitle>
                {/*placeholder image */}
                <RecipePic src='https://images.immediate.co.uk/production/volatile/sites/30/2020/08/chorizo-mozarella-gnocchi-bake-cropped-9ab73a3.jpg' alt='delicious food'/>
            </RecipeHeader>
            <RecipeDescription>
                <p>{recipe.category}</p>
                <p>{recipe.timeToMake}</p>
                <p>{recipe.description}</p>
            </RecipeDescription>
            <RecipeIngredients>
                <p>{recipe.ingredients}</p>
            </RecipeIngredients>
            <RecipeInstructions>
                <p>{recipe.instructions}</p>
            </RecipeInstructions>
        </RecipeComponent>
    )
    }
}

export default Recipe;

//styling below this line

const RecipeComponent = styled.div`
    height: fit-content;
`

    const RecipeHeader = styled.div`
        height: 10%;
        `

        const RecipeTitle = styled.h3``

        const RecipePic = styled.img`
            width: 25%;;
        `

    const RecipeDescription = styled.div`
        height: 20%;
    `

    const RecipeIngredients = styled.div`
        height: 20%;
    `

    const RecipeInstructions = styled.div`
        height: 20%;
    `