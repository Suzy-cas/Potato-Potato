/* eslint-disable react/forbid-prop-types */
/* eslint-disable no-undef */
import PropTypes from "prop-types";
// import { useEffect } from "react";
import "../styles/commons.scss";

function RecipeCard({ recipeSearch, recipesCookTechs, steps }) {
  const uniqueRecipes = recipesCookTechs.filter(
    (recipe, index, self) =>
      self.findIndex((r) => r.title === recipe.title) === index
  );
  console.info(steps);
  return (
    <section className="variety-cards">
      {uniqueRecipes.lenght !== 0
        ? uniqueRecipes
            .filter((val) => val.cooking_tech.includes(recipeSearch))
            .map((val) => (
              <div className="card-container" key={val.id}>
                <h3>{val.title}</h3>
                <img
                  alt="pomme de terre charlotte"
                  src="https://upload.wikimedia.org/wikipedia/commons/7/72/Pommes_de_terre_%28CHARLOTTE%29-cliche_Jean_Weber_%2823594803261%29.jpg?uselang=fr"
                />
                <div className="card-content">
                  <div>
                    <h4>Difficulté</h4>
                    <p>{val.difficulty}</p>
                    <h4>Préparation</h4>
                    {/* {steps.map((step) => (
                      <p key={step.id}>{step.steps_1}</p>
                    ))} */}
                    <h4>
                      Les variétés de pommes de terre adaptées à cette recette :
                    </h4>
                    <ul>
                      {uniqueRecipes
                        .filter((potato) => potato.title.includes(val.title))
                        .map((potato) => (
                          <li>{potato.potatoe_variety}</li>
                        ))}
                    </ul>
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
  steps: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default RecipeCard;
