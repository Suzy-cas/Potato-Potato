/* eslint-disable react/no-array-index-key */
/* eslint-disable react/prop-types */
import React from "react";
import { Link } from "react-router-dom";

function RecipeCard({ recipe, recipePicture, recipesCookTechs }) {
  const filteredPotatoes = recipesCookTechs.filter((potato) =>
    potato.title.includes(recipe.title)
  );

  return (
    <div className="recipe-cards" key={recipe.id}>
      <h3>{recipe.title}</h3>
      <img alt="" src={`${recipePicture}/${recipe.id}.jpg`} />
      <div className="card-content">
        <div className="recipe-infos">
          <h4>Difficulté</h4>
          <p>{recipe.difficulty}</p>
          <h4>Temps de préparation</h4>
          <p>{recipe.prep_time}</p>
          <h4>Temps de cuisson</h4>
          <p>{recipe.cooking_time}</p>
          <h4>
            Toutes les variétés de pommes de terre adaptées à cette recette :
          </h4>
          <div className="pot-var-grid">
            {filteredPotatoes.map((potato, index) => (
              <p key={index}>{potato.potato_variety}</p>
            ))}
          </div>
          <Link to={`/recettes/${recipe.id}`} key={recipe.id}>
            <button type="button" className="primary-button">
              Lire la suite
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default RecipeCard;
