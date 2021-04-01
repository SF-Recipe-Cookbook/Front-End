import React, {useState} from 'react'
import styled from 'styled-components'
import {useHistory} from 'react-router-dom'
import axiosWithAuth from '../../utils/axiosWithAuth'

const Page = styled.div`
    font-size: 1.5rem;
    color: #813D18;
    width: 60%;
    margin: auto;
`
const RecipeName = styled.h1`
    font-size: 3rem;
    text-align: center;
    margin: 1rem 0;
    font-weight: bold;
`
const NewRecipeCard = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`
const FirstRow = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
`
const Text = styled.p`
    font-size: 1.2rem;
    margin: .15rem;
`
const Title = styled.input`
    margin: .5rem 1rem;
    font-size: 2rem;
    /* width: 20rem; */
    color: #813D18;
    background-color: inherit;
    border: none;
    border-bottom: 3px solid #333D45;

    &::-webkit-input-placeholder {
        color: #D5C9BB;
    }
`
const Category = styled.select`
    margin: .5rem 1rem;
    /* width: 8rem; */
    background-color: inherit;
    border: none;
    /* font-size: 1rem; */
`
const Description = styled.textarea`
    margin: .5rem;
    width: 80%;
    box-shadow: 3px 3px #4D6E7F;
`
const BottomCont = styled.div`
    display: flex;
    width: 100%;
    height: 40vh;
    justify-content: center;
`
const Ingredients = styled.textarea`
    margin: .5rem;
    width: 20%;
    box-shadow: 3px 3px #4D6E7F;
`
const RightCont = styled.div`
    display: flex;
    flex-direction: column;
    width: 60%;
`
const Instructions = styled.textarea`
    width: 97%;
    margin: .5rem;
    height: 35vh;
    box-shadow: 3px 3px #4D6E7F;
`
const TimerCont = styled.div`
    display: flex;
    font-size: 1.2rem;
    justify-content: space-around;
    align-items: flex-end;
`
const EachTimer = styled.div`
    display: flex;
    justify-content: flex-start;
`
const Timer = styled.input`
    margin: 0 .5rem;
    width: 3rem;
    color: #813D18;
    background-color: inherit;
    border: none;
    border-bottom: 2px solid #333D45;

    &::-webkit-input-placeholder {
        color: #D5C9BB;
    }
`
const RecipeImage = styled.input`
    height: 1rem;
    width: 20rem;
`
const AddRecipe = styled.button`
    margin: 2rem .5rem 0;
    background-color: inherit;
    border: none;
    text-decoration: underline;
    font-size: 1.75rem;
    color: #333D45;
    font-weight: bold;
`

const recipe = {
    name: "",
    category: "",
    description: "",
    ingredients: [],
    instructions: [],
    prep_time: "",
    cook_time: "",
    image_url: ""
}



const NewRecipe = () => {

    const [newRecipe, setNewRecipe] = useState(recipe)
    

    const {push} = useHistory()

    const handleChange = e => {
        setNewRecipe({
            ...newRecipe,
            [e.target.name]: e.target.value.split(",")
        })
        console.log(newRecipe)
    }

    const handleSubmit = e => {
        e.preventDefault()
        axiosWithAuth().post('/recipes', newRecipe)
        .then(res => {
            console.log(res.data)
            push('/profilepage')
        })
        .catch(err => {
            console.log(err)
        })
    }

    return (
        <Page>
            <RecipeName>New Recipe</RecipeName>
            <NewRecipeCard 
                onSubmit={handleSubmit}
            >
                <FirstRow>
                 
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

                    <RecipeImage
                        name="image_url"
                        type="text"
                        placeholder="recipe image url"
                        onChange={handleChange}
                    />
                
                </FirstRow>
                
                <Description
                    name="description"
                    type="text"
                    placeholder="Describe your recipe"
                    cols="40"
                    rows="8"
                    onChange={handleChange}
                />

                <BottomCont>

                    <Ingredients
                        name="ingredients"
                        type="text"
                        placeholder="ingredients (add multiple ingredients with a comma)"
                        onChange={handleChange}
                    />

                    <RightCont>

                        <Instructions
                            name="instructions"
                            type="text"
                            placeholder="Instructions (separate instructions with a comma)"
                            cols="40"
                            rows="5"
                            onChange={handleChange}
                        />

                        <TimerCont>

                            <EachTimer>

                                <Text>Prep Time (minutes)</Text>
                                <Timer
                                    name="prep_time"
                                    type="number"
                                    placeholder="0"
                                    min="0"
                                    onChange={handleChange}
                                />

                            </EachTimer>
                        
                            <EachTimer>
                                
                                <Text>Cook Time (minutes)</Text>
                                <Timer
                                    name="cook_time"
                                    type="number"
                                    placeholder="0"
                                    min="0"
                                    onChange={handleChange}
                                />

                            </EachTimer>

                        </TimerCont>

                    </RightCont>

                </BottomCont>
                
                <AddRecipe>Add recipe</AddRecipe>

            </NewRecipeCard>
        </Page>
    )
}

export default NewRecipe

