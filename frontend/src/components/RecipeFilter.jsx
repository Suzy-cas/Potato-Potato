/* eslint-disable react/prop-types */
/* eslint-disable react/no-array-index-key */
/* eslint-disable react/forbid-prop-types */

// import PropTypes from "prop-types";

import RecipeCard from "./RecipeCard";

function RecipeFilter({
  recipeSearch,
  uniqueRecipes,
  recipesCookTechs,
  handleRecipeSearch,
  uniqueCookingTechs,
  activeButton,
}) {
  const recipePicture = `${import.meta.env.VITE_BACKEND_URL}/uploads/recipes/`;
  const filteredRecipe = uniqueRecipes.filter((val) =>
    val.cooking_tech.includes(recipeSearch)
  );

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
      {uniqueRecipes && (
        <section className="card-container">
          {filteredRecipe.map((val) => (
            <RecipeCard
              key={val.id}
              recipe={val}
              recipePicture={recipePicture}
              recipesCookTechs={recipesCookTechs}
            />
          ))}
        </section>
      )}
    </>
  );
}

// RecipeFilter.propTypes = {
//   recipeSearch: PropTypes.arrayOf(PropTypes.object).isRequired,
//   recipesCookTechs: PropTypes.arrayOf(PropTypes.object).isRequired,
//   ingredients: PropTypes.arrayOf(PropTypes.object).isRequired,
// };

export default RecipeFilter;
