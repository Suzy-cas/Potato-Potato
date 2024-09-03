import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import instance from "../services/instance";

import RecipeDisplay from "../components/RecipeDisplay";

function RecipeId() {
  const [recipe, setRecipe] = useState([]);
  const [ingredients, setIngredients] = useState([]);
  const [varieties, setVarieties] = useState([]);
  const [isRecipeApproved, setRecipeIsApproved] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const { id } = useParams();
  const recipePicture = `${import.meta.env.VITE_BACKEND_URL}/uploads/recipes/`;
  const handleValidateRecipe = () => {
    setRecipeIsApproved(1);
  };

  useEffect(() => {
    Promise.all([
      instance.get(`/api/ingredient-quantity-recipe/${id}`),
      instance.get(`/api/recipe/${id}`),
      instance.get(`/api/recipes-varieties/${id}`),
    ])

      .then(
        ([
          ingredientQuantityRecipeResponse,
          recipesCookingtechsResponse,
          varietiesRecipeResponse,
        ]) => {
          setRecipe(recipesCookingtechsResponse.data);
          setIngredients(ingredientQuantityRecipeResponse.data);
          setVarieties(varietiesRecipeResponse.data);
          setIsLoading(false);
          setRecipeIsApproved(recipe.is_approved);
        }
      )
      .catch((err) => {
        console.error(err);
      });
  }, [recipe]);

  return isLoading ? (
    "Loading"
  ) : (
    <RecipeDisplay
      ingredients={ingredients}
      recipeId={recipe}
      varietiesId={varieties}
      recipePicture={recipePicture}
      isRecipeApproved={isRecipeApproved}
      handleValidateRecipe={handleValidateRecipe}
    />
  );
}

export default RecipeId;
