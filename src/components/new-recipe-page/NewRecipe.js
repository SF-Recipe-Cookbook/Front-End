import React, { useState } from 'react';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';
import axiosWithAuth from '../../utils/axiosWithAuth';

const Page = styled.div`
  font-size: 1.5rem;
  color: #813d18;
  width: 60%;
  margin: auto;
`;
const RecipeName = styled.h1`
  font-size: 3rem;
  text-align: center;
  margin: 1rem 0;
  font-weight: bold;
`;
const NewRecipeCard = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const FirstRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
`;
const Text = styled.p`
  font-size: 1.2rem;
  margin: 0.15rem;
`;
const Title = styled.input`
  margin: 0.5rem 1rem;
  font-size: 2rem;
  /* width: 20rem; */
  color: #813d18;
  background-color: inherit;
  border: none;
  border-bottom: 3px solid #333d45;

  &::-webkit-input-placeholder {
    color: #d5c9bb;
  }
`;
const Category = styled.select`
  margin: 0.5rem 1rem;
  /* width: 8rem; */
  background-color: inherit;
  border: none;
  /* font-size: 1rem; */
`;
const Description = styled.textarea`
  margin: 0.5rem;
  width: 80%;
  box-shadow: 3px 3px #4d6e7f;
`;
const BottomCont = styled.div`
  display: flex;
  width: 100%;
  height: 40vh;
  justify-content: center;
`;
const Ingredients = styled.textarea`
  margin: 0.5rem;
  width: 20%;
  box-shadow: 3px 3px #4d6e7f;
`;
const RightCont = styled.div`
  display: flex;
  flex-direction: column;
  width: 60%;
`;
const Instructions = styled.textarea`
  width: 97%;
  margin: 0.5rem;
  height: 35vh;
  box-shadow: 3px 3px #4d6e7f;
`;
const TimerCont = styled.div`
  display: flex;
  font-size: 1.2rem;
  justify-content: space-around;
  align-items: flex-end;
`;
const EachTimer = styled.div`
  display: flex;
  justify-content: flex-start;
`;
const Timer = styled.input`
  margin: 0 0.5rem;
  width: 3rem;
  color: #813d18;
  background-color: inherit;
  border: none;
  border-bottom: 2px solid #333d45;

  &::-webkit-input-placeholder {
    color: #d5c9bb;
  }
`;
const RecipeImage = styled.input`
  height: 1rem;
  width: 20rem;
`;
const AddRecipe = styled.button`
  margin: 2rem 0.5rem 0;
  background-color: inherit;
  border: none;
  text-decoration: underline;
  font-size: 1.75rem;
  color: #333d45;
  font-weight: bold;
`;

const recipe = {
  name: '',
  category: '',
  description: '',
  ingredients: [],
  instructions: [],
  prep_time: '',
  cook_time: '',
  image_url: '',
};


const recipeErrors = {
  name: '',
  category: '',
  description: '',
  ingredients: [],
  instructions: [],
  prep_time: '',
  cook_time: '',
  image_url: '',
};

// const testRecipe = {
//   name: 'test45',
//   category: 'Dinner',
//   description: 'testing',
//   ingredients: ['test', 'test', 'test'],
//   instructions: ['test', 'test', 'test'],
//   prep_time: 10,
//   cook_time: 10,
//   image_url: 'test.com/test',
// };

const NewRecipe = (...props) => {
  const [newRecipe, setNewRecipe] = useState(recipe);
  const [errors, setErrors] = useState(recipeErrors);

  console.log('props', props);

  const { push } = useHistory();

  const handleChange = (e) => {
    if (e.target.name === "ingredients" || e.target.name === "instructions") {
        setNewRecipe({
            ...newRecipe,
            [e.target.name]: e.target.value.split(','),
          });
    } else {
    setNewRecipe({
      ...newRecipe,
      [e.target.name]: e.target.value,
    });}
    console.log(newRecipe);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axiosWithAuth()
      .post('/recipes', newRecipe)
      .then((res) => {
        push('/profilepage');
      })
      .catch((err) => {
        console.log(err.response);
      });
  };

  return (
    <Page>
      <RecipeName>New Recipe</RecipeName>
      <NewRecipeCard onSubmit={handleSubmit}>
        <FirstRow>
          <Title
            name='name'
            type='text'
            placeholder='Recipe name'
            onChange={handleChange}
          />

          <Category name='category' onChange={handleChange}>
            <option value=''>Select a category</option>

            <option value='breakfast'>Breakfast</option>

            <option value='lunch'>Lunch</option>

            <option value='dinner'>Dinner</option>

            <option value='snacks'>Snacks</option>

            <option value='drinks'>Drinks</option>

            <option value='dessert'>Dessert</option>
          </Category>

          <RecipeImage
            name='image_url'
            type='text'
            placeholder='recipe image url'
            onChange={handleChange}
          />
        </FirstRow>

        <Description
          name='description'
          type='text'
          placeholder='Describe your recipe'
          cols='40'
          rows='8'
          onChange={handleChange}
        />

        <BottomCont>
          <Ingredients
            name='ingredients'
            type='text'
            placeholder='ingredients (add multiple ingredients with a comma)'
            onChange={handleChange}
          />

          <RightCont>
            <Instructions
              name='instructions'
              type='text'
              placeholder='Instructions (separate instructions with a comma)'
              cols='40'
              rows='5'
              onChange={handleChange}
            />

            <TimerCont>
              <EachTimer>
                <Text>Prep Time (minutes)</Text>
                <Timer
                  name='prep_time'
                  type='number'
                  placeholder='0'
                  min='0'
                  onChange={handleChange}

                />
              </EachTimer>

              <EachTimer>
                <Text>Cook Time (minutes)</Text>
                <Timer
                  name='cook_time'
                  type='number'
                  placeholder='0'
                  min='0'
                  onChange={handleChange}
                />
              </EachTimer>
            </TimerCont>
          </RightCont>
        </BottomCont>

        <AddRecipe>Add recipe</AddRecipe>
      </NewRecipeCard>
    </Page>
  );
};

export default NewRecipe;
