import { useEffect, useState } from "react";
import { motion } from "framer-motion";

import instance from "../../services/instance";
import RecipeFilter from "../../components/Recipe/RecipeFilter";

function Recipes() {
  const [recipesCookTechs, setRecipesCookTechs] = useState([]);
  const [recipeSearch, setRecipeSearch] = useState([]);
  const [activeButton, setActiveButton] = useState(null);

  useEffect(() => {
    instance
      .get("/api/recipes-cookingtechs")
      .then((result) => {
        setRecipesCookTechs(result.data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  const uniqueCookingTechs = recipesCookTechs
    .map((recipe) => recipe.cooking_tech)
    .filter((value, index, self) => self.indexOf(value) === index);

  const updateRecipeSearch = (activeTechs) => {
    setRecipeSearch(activeTechs);
  };

  const handleRecipeSearch = (e) => {
    const selectedTech = e.target.value;
    setActiveButton(selectedTech);
    updateRecipeSearch([selectedTech]);
  };
  const uniqueRecipes = recipesCookTechs.filter(
    (recipe, index, self) =>
      self.findIndex((r) => r.title === recipe.title) === index
  );

  return (
    <motion.section initial={{ x: -500 }} animate={{ x: 0 }}>
      <RecipeFilter
        uniqueRecipes={uniqueRecipes}
        recipeSearch={recipeSearch}
        recipesCookTechs={recipesCookTechs}
        handleRecipeSearch={handleRecipeSearch}
        uniqueCookingTechs={uniqueCookingTechs}
        activeButton={activeButton}
      />{" "}
    </motion.section>
  );
}

export default Recipes;
