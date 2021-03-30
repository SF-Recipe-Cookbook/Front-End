import React, {useState} from 'react'
import styled from 'styled-components'

// Enter New Recipe Component - form must include recipe title, category, description, instructions, ingredients, and time required to make

const Page = styled.div``
const RecipeName = styled.h1`
    font-size: 3rem;
    text-align: center;
    margin: 1rem;
`
const NewRecipeCard = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`
const Text = styled.p`
    margin: .5rem;
`
const Title = styled.input`
    margin: .5rem;
    width: 30rem;
`
const Category = styled.select`
    margin: .5rem;
    width: 30rem;
`
const Description = styled.input`
    margin: .5rem;
    width: 30rem;
`
const Ingredients = styled.input`
    margin: .5rem;
    width: 30rem;
`
const Instructions = styled.textarea`
    width: 20%;
    margin: .5rem;
    width: 30rem;
`
const TimePrep = styled.input`
    margin: .5rem;
    width: 30rem;
`
const TimeCook = styled.input`
    margin: .5rem;
    width: 30rem;
`
const AddRecipe = styled.button`
    margin: .5rem;
`

const recipe = {
    name: "",
    category: "",
    description: "",
    ingredients: "",
    instructions: "",
    preptime: "",
    cooktime: ""
}

const NewRecipe = () => {

    const [newRecipe, setNewRecipe] = useState(recipe)

    const handleChange = e => {
        setNewRecipe({
            ...newRecipe,
            [e.target.name]: e.target.value
        })
        console.log(newRecipe)
    }

    const handleSubmit = e => {
        e.preventDefault()
    }

    return (
        <Page>
            <RecipeName>New Recipe</RecipeName>
            <NewRecipeCard 
                onSubmit={handleSubmit}
            >

                <Title
                    name="name"
                    type="text"
                    placeholder="Recipe name"
                    onChange={handleChange}
                />

                <Category 
                    name="category"
                    onChange={handleChange}
                >
                    
                    <option value="">
                        Select a category
                    </option>

                    <option value="breakfast">
                        Breakfast
                    </option>

                    <option value="lunch">
                        Lunch
                    </option>

                    <option value="dinner">
                        Dinner
                    </option>

                    <option value="snacks">
                        Snacks
                    </option>

                    <option value="drinks">
                        Drinks
                    </option>

                    <option value="dessert">
                        Dessert
                    </option>

                </Category>

                <Description
                    name="description"
                    type="text"
                    placeholder="Describe your recipe"
                    onChange={handleChange}
                />

                <Ingredients
                    name="ingredients"
                    type="text"
                    placeholder="ingredients"
                    onChange={handleChange}
                />

                <Instructions
                    name="instructions"
                    type="text"
                    placeholder="Instructions"
                    cols="40"
                    rows="5"
                    onChange={handleChange}
                />

                <Text>Prep Time (minutes)</Text>
                <TimePrep
                    name="preptime"
                    type="number"
                    placeholder="0"
                    onChange={handleChange}
                />

                <Text>Cook Time (minutes)</Text>
                <TimeCook
                    name="cooktime"
                    type="number"
                    placeholder="0"
                    onChange={handleChange}
                />

                <AddRecipe>Add recipe</AddRecipe>

            </NewRecipeCard>
        </Page>
    )
}

export default NewRecipe