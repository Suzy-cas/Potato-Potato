import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import instance from "../services/instance";

import RecipeCard from "../components/RecipeCard";

function RecipeId() {
  const [recipe, setRecipe] = useState([]);
  const [ingredients, setIngredients] = useState([]);
  const [varieties, setVarieties] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const { id } = useParams();

  useEffect(() => {
    Promise.all([
      instance.get(`/api/ingredient-quantity-recipe/${id}`),
      instance.get(`/api/recipes/${id}`),
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
  console.info(varieties);
  return isLoading ? (
    "Loading"
  ) : (
    <RecipeCard
      ingredients={ingredients}
      recipeId={recipe}
      varietiesId={varieties}
    />
  );
}

export default RecipeId;
