import { useEffect, useState } from "react";
import instance from "../services/instance";
import RecipeFilter from "../components/RecipeFilter";

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
    setActiveButton(selectedTech === activeButton ? null : selectedTech);
    updateRecipeSearch(selectedTech === activeButton ? [] : [selectedTech]);
  };
  const uniqueRecipes = recipesCookTechs.filter(
    (recipe, index, self) =>
      self.findIndex((r) => r.title === recipe.title) === index
  );

  return (
    <RecipeFilter
      uniqueRecipes={uniqueRecipes}
      recipeSearch={recipeSearch}
      recipesCookTechs={recipesCookTechs}
      handleRecipeSearch={handleRecipeSearch}
      uniqueCookingTechs={uniqueCookingTechs}
      activeButton={activeButton}
    />
  );
}

export default Recipes;
