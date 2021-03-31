import React from 'react';
import styled from 'styled-components';
import axiosWithAuth from '../../utils/axiosWithAuth';


// React Component below this line

const Recipe = ({recipe, search, setRecipes, push}) => {
    if (search === ''|| search === recipe.title) {

const id = recipe.id


const handleDelete = () => {
    axiosWithAuth().delete(`/recipes/${id}`)
        .then(res => {
            axiosWithAuth().get('/recipes/user')
            .then(res => {
                setRecipes(res)
            })
            .catch(err => {
                console.log(err)
            })
        })
        .catch(err => {
            console.log(err)
        })
}

const handleEdit = () => {
    push('/')
}

    return (
        <RecipeComponent>
            <RecipeHeader>
                <RecipeTitle>{recipe.title}</RecipeTitle>
                {/*placeholder image */}
                <RecipePic src='https://images.immediate.co.uk/production/volatile/sites/30/2020/08/chorizo-mozarella-gnocchi-bake-cropped-9ab73a3.jpg' alt='delicious food'/>
            </RecipeHeader>
            <RecipeDescription>
                <p>{`Style: ${recipe.category}`}</p>
                <p>{`Time Required to Make: ${recipe.timeToMake}`}</p>
                <p>{`Description: ${recipe.description}`}</p>
            </RecipeDescription>
            <RecipeIngredients>
                <p>{`Ingredients: ${recipe.ingredients}`}</p>
            </RecipeIngredients>
            <RecipeInstructions>
                <p>{`Instructions: ${recipe.instructions}`}</p>
            </RecipeInstructions>
            <DeleteRecipe onClick={handleDelete}>
                Delete Recipe
            </DeleteRecipe>
            <EditRecipe onClick={handleEdit}>
                Edit Recipe
            </EditRecipe>
        </RecipeComponent>
    )
    }
}

export default Recipe;

//styling below this line

const RecipeComponent = styled.div`
    width: 20%;
    border: 2px solid #813D18;
    box-shadow: 3px 3px #4D6E7F;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    align-content: center;
`

    const RecipeHeader = styled.div`
        height: 10%;
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-bottom: 20px;
        `

        const RecipeTitle = styled.h3`
        `

        const RecipePic = styled.img`
            width: 25%;
        `

    const RecipeDescription = styled.div`
        height: 20%;
        margin-bottom: 20px;
    `

    const RecipeIngredients = styled.div`
        height: 20%;
        margin-bottom: 20px;
    `

    const RecipeInstructions = styled.div`
        height: 20%;
        margin-bottom: 20px;
    `

    const DeleteRecipe = styled.button``

    const EditRecipe =styled.button``