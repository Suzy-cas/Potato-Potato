/* eslint-disable react/prop-types */
/* eslint-disable react/no-array-index-key */
/* eslint-disable react/forbid-prop-types */

// import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function RecipeCard({
  recipeSearch,
  uniqueRecipes,
  ingredients,
  recipeId,
  recipesCookTechs,
  varietiesId,
}) {
  console.info(varietiesId);
  return (
    <section className="card-container">
      {uniqueRecipes ? (
        uniqueRecipes
          .filter((val) => val.cooking_tech.includes(recipeSearch))
          .map((val) => (
            <div className="recipe-cards" key={val.id}>
              <h3>{val.title}</h3>
              <img alt="" src="" />
              <div className="card-content">
                <div>
                  <h4>Difficulté</h4>
                  <p>{val.difficulty}</p>
                  <h4>Temps de préparation</h4>
                  <p>{val.prep_time}</p>
                  <h4>Temps de cuisson</h4>
                  <p>{val.cooking_time}</p>

                  <h4>
                    Toutes les variétés de pommes de terre adaptées à cette
                    recette :
                  </h4>
                  <div className="pot-var-grid">
                    {recipesCookTechs
                      .filter((potato) => potato.title.includes(val.title))
                      .map((potato) => (
                        <p>{potato.potato_variety}</p>
                      ))}
                  </div>
                  <Link to={`/recettes/${val.id}`} key={val.id}>
                    <button type="button" className="primary-button">
                      Lire la suite
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          ))
      ) : (
        <div className="recipe-cards" key={recipeId.recipe_id}>
          <h3>{recipeId.title}</h3>
          <img alt="" src="" />
          <div className="card-content">
            <div>
              <h4>Difficulté</h4>
              <p>{recipeId.difficulty}</p>
              <h4>Temps de préparation</h4>
              <p>{recipeId.prep_time}</p>

              <h4>Temps de cuisson</h4>
              <p>{recipeId.cooking_time}</p>
              <h4>Ingrédients</h4>
              {ingredients.length !== 0
                ? ingredients.map((ingredient) => (
                    <p>{ingredient.ingredient}</p>
                  ))
                : ""}
              <h4>Préparation</h4>
              <ul>
                {recipeId.steps.split("//").map((step, index) => (
                  <li key={index}>{step.trim()}</li>
                ))}
              </ul>
              <h4>
                Toutes les variétés de pommes de terre adaptées à cette recette
                :
              </h4>
              <div>
                <div className="pot-var-grid">
                  {varietiesId.map((variety) => (
                    <p>{variety.potato_variety}</p>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

// RecipeCard.propTypes = {
//   recipeSearch: PropTypes.arrayOf(PropTypes.object).isRequired,
//   recipesCookTechs: PropTypes.arrayOf(PropTypes.object).isRequired,
//   ingredients: PropTypes.arrayOf(PropTypes.object).isRequired,
// };

export default RecipeCard;
