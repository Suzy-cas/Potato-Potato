import { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";

import instance from "../../services/instance";

import RecipeDisplay from "../../components/Recipe/RecipeDisplay";

function RecipeId() {
  const [recipe, setRecipe] = useState([]);
  const [ingredients, setIngredients] = useState([]);
  const [varieties, setVarieties] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const { connectedUser } = useContext(AuthContext);
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
  }, [recipe]);

  const handleValidateRecipe = async () => {
    try {
      const updatedRecipe = {
        ...recipe,
        is_approved: 1,
      };

      setRecipe(updatedRecipe);
      await instance.put(`api/recipe/${recipe.id}`, updatedRecipe);
    } catch (err) {
      console.error("Error updating recipe:", err);
    }
  };

  return isLoading ? (
    "Loading"
  ) : (
    <RecipeDisplay
      ingredients={ingredients}
      recipeId={recipe}
      varietiesId={varieties}
      recipePicture={recipePicture}
      handleValidateRecipe={handleValidateRecipe}
      recipe={recipe}
      connectedUser={connectedUser}
    />
  );
}

export default RecipeId;
