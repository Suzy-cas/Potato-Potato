/* eslint-disable react/no-array-index-key */
/* eslint-disable react/forbid-prop-types */

import PropTypes from "prop-types";

function RecipeCard({ recipeSearch, recipesCookTechs }) {
  const uniqueRecipes = recipesCookTechs.filter(
    (recipe, index, self) =>
      self.findIndex((r) => r.title === recipe.title) === index
  );

  return (
    <section className="card-container">
      {uniqueRecipes.lenght !== 0
        ? uniqueRecipes
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
                    <h4>Préparation</h4>
                    <ul>
                      {val.steps.split("//").map((step, index) => (
                        <li key={index}>{step.trim()}</li>
                      ))}
                    </ul>
                    <h4>
                      Toutes les variétés de pommes de terre adaptées à cette
                      recette :
                    </h4>
                    <div>
                      <div className="pot-var-grid">
                        {recipesCookTechs
                          .filter((potato) => potato.title.includes(val.title))
                          .map((potato) => (
                            <p>{potato.potatoe_variety}</p>
                          ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))
        : null}
    </section>
  );
}

RecipeCard.propTypes = {
  recipeSearch: PropTypes.arrayOf(PropTypes.object).isRequired,
  recipesCookTechs: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default RecipeCard;
