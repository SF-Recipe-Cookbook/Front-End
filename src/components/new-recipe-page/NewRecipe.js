import React from 'react'
import styled from 'styled-components'

// Enter New Recipe Component - form must include recipe title, category, description, instructions, ingredients, and time required to make

const Page = styled.div``
const NewRecipeCard = styled.form``
const Text = styled.p``
const Title = styled.input``
const Category = styled.select``
const Description = styled.input``
const Instructions = styled.textarea`
    width: 20%;
`
const TimePrep = styled.input``
const TimeCook = styled.input``
const AddRecipe = styled.button``

const NewRecipe = () => {
    return (
        <Page>
            <NewRecipeCard 
                // onSubmit={handleSubmit}
            >

                <Title
                    name="title"
                    type="text"
                    placeholder="Recipe name"
                />

                <Category name="category">
                    
                    <option value="Select">
                        Select a category
                    </option>

                    <option>
                        Breakfast
                    </option>

                    <option>
                        Lunch
                    </option>

                    <option>
                        Dinner
                    </option>

                    <option>
                        Snacks
                    </option>

                    <option>
                        Drinks
                    </option>

                    <option>
                        Dessert
                    </option>

                </Category>

                <Description
                    name="description"
                    type="text"
                    placeholder="Describe your recipe"
                />

                <Instructions
                    name="instructions"
                    type="text"
                    placeholder="Instructions"
                    cols="40"
                    rows="5"
                    
                />

                <Text>Prep Time (minutes)</Text>
                <TimePrep
                    name="timeToPrep"
                    type="number"
                    placeholder="0"
                />

                <Text>Cook Time (minutes)</Text>
                <TimeCook
                    name="timeToCook"
                    type="number"
                    placeholder="0"
                />

                <AddRecipe>Add recipe</AddRecipe>

            </NewRecipeCard>
        </Page>
    )
}

export default NewRecipe