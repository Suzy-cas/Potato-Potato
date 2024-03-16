import { useEffect, useState } from "react";
import instance from "../services/instance";
import RecipeCard from "../components/RecipeCard";

function Recipe() {
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

  return (
    <>
      <section id="trouve-recettes">
        <div className="recettes">
          <div className="form_recettes">
            <h1>Comment veux-tu cuisiner tes patates ?</h1>
            <form>
              {uniqueCookingTechs.map((cookingTech) => (
                <button
                  key={cookingTech}
                  type="button"
                  name="cookingT"
                  value={cookingTech}
                  onClick={handleRecipeSearch}
                  className={
                    cookingTech === activeButton
                      ? "primary-button active"
                      : "primary-button"
                  }
                  disabled={
                    cookingTech !== activeButton && activeButton !== null
                  }
                >
                  {cookingTech}
                </button>
              ))}
            </form>
          </div>
          <div className="div-img">
            <img
              className="img"
              src="./src/assets/img/PW_surpriso.png"
              alt="potato_in_a_plate"
            />
          </div>
        </div>
      </section>
      <div>
        <RecipeCard
          recipesCookTechs={recipesCookTechs}
          recipeSearch={recipeSearch}
        />
      </div>
    </>
  );
}

export default Recipe;
