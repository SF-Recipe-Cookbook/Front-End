
import React, {useState, useEffect} from 'react'
import styled from 'styled-components'
import {useHistory, useParams} from 'react-router-dom'
import axiosWithAuth from '../../utils/axiosWithAuth'


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

const UpdateDelete = styled.div`
  display: flex;
  justify-content: space-around;
`;



const NewRecipe = () => {
  const [editRecipe, setEditRecipe] = useState({});

  console.log('edit', editRecipe);

  const { id } = useParams();
  console.log(`id, ${id}`);
  // console.log(
  //   `https://ttwebft72recipecookbook.herokuapp.com/api/recipes/update/${id}`
  // );

  useEffect(() => {
    axiosWithAuth()
      .get(`/recipes/update/${id}`)
      .then((res) => {
        // console.log('res', res);
        setEditRecipe(res.data)
        console.log(editRecipe)
      })
      .catch((err) => {
        console.log('err', err.response);
      });
  },[editRecipe, id]); //if deployment fails, check here

  const { push } = useHistory();

  const handleChange = (e) => {
    if (e.target.name === "ingredients" || e.target.name === "instructions") {
      setEditRecipe({
          ...editRecipe,
          [e.target.name]: e.target.value.split(','),
        });
  } else {
  setEditRecipe({
    ...editRecipe,
    [e.target.name]: e.target.value,
  });}
  console.log(editRecipe);
  };

  const updateRecipe = (e) => {
    e.preventDefault();
    axiosWithAuth()
      .put(`/recipes/${id}`, editRecipe)
      .then((res) => {
        console.log(res.data);
        push('/profilepage');
      })
      .catch((err) => {
        console.log(err.response);
      });
  };

  const deleteRecipe = (e) => {
    e.preventDefault();
    axiosWithAuth()
      .delete(`/recipes/${id}`)
      .then((res) => {
        console.log(res.data);
        push('/profilepage');
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const returnToProfile = () => {
    push('/profilepage');
  };

  return (
    <Page>
      <RecipeName>Edit Recipe</RecipeName>
      <NewRecipeCard>
        <FirstRow>
          <Title
            name='name'
            type='text'
            placeholder='Recipe name'
            onChange={handleChange}
            value={editRecipe.name}
          />

          <Category 
            name='category'
            onChange={handleChange} 
            value={editRecipe.category}
          >
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
            value={editRecipe.image_url}
          />
        </FirstRow>

        <Description
          name='description'
          type='text'
          placeholder='Describe your recipe'
          cols='40'
          rows='8'
          onChange={handleChange}
          value={editRecipe.description}
        />

        <BottomCont>
          <Ingredients
            name='ingredients'
            type='text'
            placeholder='ingredients (add multiple ingredients with a comma)'
            onChange={handleChange}
            value={editRecipe.ingredients}
          />

          <RightCont>
            <Instructions
              name='instructions'
              type='text'
              placeholder='Instructions (separate instructions with a comma)'
              cols='40'
              rows='5'
              onChange={handleChange}
              value={editRecipe.instructions}
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
                  value={editRecipe.prep_time}
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
                  value={editRecipe.cook_time}
                />
              </EachTimer>
            </TimerCont>
          </RightCont>
        </BottomCont>


        <UpdateDelete>
          <AddRecipe onClick={updateRecipe}>Update Recipe</AddRecipe>

          <AddRecipe onClick={deleteRecipe}>Delete Recipe</AddRecipe>

          <AddRecipe onClick={returnToProfile}>Cancel</AddRecipe>
        </UpdateDelete>
      </NewRecipeCard>
    </Page>
  );
};

export default NewRecipe;
