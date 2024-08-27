import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import instance from "../services/instance";

import RecipeDisplay from "../components/RecipeDisplay";

function RecipeId() {
  const [recipe, setRecipe] = useState([]);
  const [ingredients, setIngredients] = useState([]);
  const [varieties, setVarieties] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const { id } = useParams();
  const recipePicture = `${import.meta.env.VITE_BACKEND_URL}/uploads/recipes/`;

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
        }
      )
      .catch((err) => {
        console.error(err);
      });
  }, []);

  return isLoading ? (
    "Loading"
  ) : (
    <RecipeDisplay
      ingredients={ingredients}
      recipeId={recipe}
      varietiesId={varieties}
      recipePicture={recipePicture}
    />
  );
}

export default RecipeId;
