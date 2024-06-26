import { useState, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";

import instance from "../../services/instance";

import NewRecipeForm from "../../components/NewRecipeForm";

function NewRecipe() {
  const { handleAuth, handleLogout, user } = useContext(AuthContext);
  const [ingredients, setIngredients] = useState([
    { name: "", value: "", type_id: 0 },
  ]);
  const [recipeInfo, setRecipeInfo] = useState({
    title: "Ta recette de pdt",
    picture: "/public/assets/images",
    difficulty: "Facile",
    prep_time: "",
    cooking_time: "",
    steps: "",
    user_id: user.id,
    cooking_tech_id: 0,
    is_approved: 0,
  });
  const [stepsArray, setStepsArray] = useState([""]);

  const navigate = useNavigate();
  // console.info(recipeInfo);
  useEffect(() => {
    if (user.is_admin === 3 || user.is_admin === undefined) {
      navigate("/login");
    }
  }, [handleAuth, handleLogout, user]);

  const handleSubmit = async () => {
    // must add more validations

    // First we check if there is at least one valid ingredient, knowing only valid ingredients will be saved in db.
    // const ingredientsToPush = ingredients.filter((ingredient) =>
    //   parseInt(ingredient.type_id, 10) !== 8
    //     ? ingredient.value !== "" && ingredient.name !== ""
    //     : ingredient.name !== ""
    // );

    // if (ingredientsToPush.length === 0) {
    //   return;
    // }

    // Second we check if there is a picture, and if this picture is valid.
    // if (inputRef.current.files[0]) {
    //   if (
    //     inputRef.current.files[0].type !== "image/jpeg" &&
    //     inputRef.current.files[0].type !== "image/jpg" &&
    //     inputRef.current.files[0].type !== "image/png"
    //   ) {
    //     return;
    //   }
    // }

    // We post the main informations of the recipe.
    try {
      // Enregistrer la recette dans la base de données
      const response = await instance.post("api/recipe", {
        ...recipeInfo,
        steps: stepsArray.filter((item) => item !== "").join("//"),
      });

      // We get back the id from our newly created recipe, by checking everything to be equal.
      const recipeId = response.data.id;
      console.info(recipeId);
      // If we have a picture, we create a new form for that recipe and upload it
      // if (inputRef.current.files[0]) {
      //   const formData = await new FormData();
      //   await formData.append("recipePic", inputRef.current.files[0]);
      //   await instance.post(`/uploads/recipes/${recipeId.data.id}`, formData);
      // }

      // We call the function to register ingredients for that recipe, and navigate to that new recipe page
      // await registerIngredient(ingredients, recipeId.data.id);

      navigate(`/recettes/${recipeId}`);
    } catch {
      console.warn("Une erreur est survenue!");
    }
  };

  return (
    <NewRecipeForm
      recipeInfo={recipeInfo}
      setRecipeInfo={setRecipeInfo}
      ingredients={ingredients}
      setIngredients={setIngredients}
      stepsArray={stepsArray}
      setStepsArray={setStepsArray}
      handleSubmit={handleSubmit}
    />
  );
}

export default NewRecipe;
