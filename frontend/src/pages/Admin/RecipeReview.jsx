import { useEffect, useState } from "react";

import instance from "../../services/instance";
import RecipeCard from "../../components/RecipeCard";

function RecipeReview() {
  const [recipeList, setRecipeList] = useState([]);
  const [recipesCookTechs, setRecipesCookTechs] = useState([]);

  useEffect(() => {
    Promise.all([
      instance.get("/api/recipes"),
      instance.get("/api/recipes-cookingtechs"),
    ])
      .then(([recipesResponse, recipeCookingechResponse]) => {
        setRecipeList(recipesResponse.data);
        setRecipesCookTechs(recipeCookingechResponse.data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);
  const recipePicture = `${import.meta.env.VITE_BACKEND_URL}/uploads/recipes/`;

  const recipeToReview = recipeList.filter((rec) => rec.is_approved === 0);
  console.info(recipeToReview);

  return (
    <>
      <h3>Recettes en attente d'approbation</h3>
      <section className="card-container">
        {recipeToReview.map((val) => (
          <RecipeCard
            key={val.id}
            recipe={val}
            recipePicture={recipePicture}
            recipesCookTechs={recipesCookTechs}
          />
        ))}
      </section>
    </>
  );
}

export default RecipeReview;
