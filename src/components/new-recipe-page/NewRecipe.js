import React, {useState} from 'react'
import styled from 'styled-components'

// Enter New Recipe Component - form must include recipe title, category, description, instructions, ingredients, and time required to make

const Page = styled.div``
const NewRecipeCard = styled.form``
const Text = styled.p``
const Title = styled.input``
const Category = styled.select``
const Description = styled.input``
const Ingredients = styled.input``
const Instructions = styled.textarea`
    width: 20%;
`
const TimePrep = styled.input``
const TimeCook = styled.input``
const AddRecipe = styled.button``

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