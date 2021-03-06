import React from 'react';
import styled from 'styled-components';

// React Component below this line

const Recipe = ({ recipe, search, push }) => {
  if (search === '' || search === recipe.title) {
    const handleEdit = () => {
      const id = recipe._id;
      push(`/edit-recipe/${id}`);
    };

    return (
      <RecipeComponent>
        <RecipeHeader>
          <RecipeTitle>{recipe.name}</RecipeTitle>
          {/*placeholder image */}
          <RecipePic
            src='https://images.immediate.co.uk/production/volatile/sites/30/2020/08/chorizo-mozarella-gnocchi-bake-cropped-9ab73a3.jpg'
            alt='delicious food'
          />
        </RecipeHeader>
        <RecipeDescription>
          <p>{`Style: ${recipe.category}`}</p>
          <p>{`Time Required to Make: ${recipe.cook_time} minutes`}</p>
          <p>{`Description: ${recipe.description}`}</p>
        </RecipeDescription>
        <RecipeIngredients>
          <p>{`Ingredients: ${recipe.ingredients}`}</p>
        </RecipeIngredients>
        <RecipeInstructions>
          <p>{`Instructions: ${recipe.instructions}`}</p>
        </RecipeInstructions>

        <EditRecipe onClick={handleEdit}>Edit Recipe</EditRecipe>
      </RecipeComponent>
    );
  }
};

export default Recipe;

//styling below this line

const RecipeComponent = styled.div`
  width: 20%;
  margin: 20px;
  border: 2px solid #813d18;
  box-shadow: 3px 3px #4d6e7f;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  align-content: center;
`;

const RecipeHeader = styled.div`
  height: 10%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 20px;
`;

const RecipeTitle = styled.h3``;

const RecipePic = styled.img`
  width: 25%;
`;

const RecipeDescription = styled.div`
  height: 20%;
  margin-bottom: 20px;
`;

const RecipeIngredients = styled.div`
  height: 20%;
  margin-bottom: 20px;
`;

const RecipeInstructions = styled.div`
  height: 20%;
  margin-bottom: 20px;
`;

const EditRecipe = styled.button``;
