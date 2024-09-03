/* eslint-disable react/no-array-index-key */
/* eslint-disable react/prop-types */
import ValidationButton from "./ValidationButton";

function RecipeDisplay({
  ingredients,
  recipeId,
  varietiesId,
  recipePicture,
  handleValidateRecipe,
  isRecipeApproved,
}) {
  return (
    <section className="card-container-id">
      <div className="recipe-cards-id" key={recipeId.recipe_id}>
        <h3>{recipeId.title}</h3>
        <img alt="" src={`${recipePicture}/${recipeId.id}.jpg`} />
        <div className="card-content">
          <div className="recipe-infos">
            <h4>Difficulté</h4>
            <p>{recipeId.difficulty}</p>
            <h4>Temps de préparation</h4>
            <p>{recipeId.prep_time}</p>
            <h4>Temps de cuisson</h4>
            <p>{recipeId.cooking_time}</p>
            <h4>Ingrédients</h4>
            {ingredients.length !== 0
              ? ingredients.map((ingredient) => (
                  <p key={ingredient.id}>
                    {ingredient.ingredient} :{" "}
                    {ingredient.ingredient_quantity === 0
                      ? ""
                      : ingredient.ingredient_quantity}{" "}
                    {ingredient.quantity_type === "nombre"
                      ? ""
                      : ingredient.quantity_type}
                  </p>
                ))
              : ""}
            <h4>Préparation</h4>
            <ul>
              {recipeId.steps.split("//").map((step, index) => (
                <li key={index}>{step.trim()}</li>
              ))}
            </ul>
            <h4>
              Toutes les variétés de pommes de terre adaptées à cette recette :
            </h4>
            <div>
              <div className="pot-var-grid">
                {varietiesId.map((variety) => (
                  <p key={variety.index}>{variety.potato_variety}</p>
                ))}
              </div>
            </div>
          </div>
        </div>
        {isRecipeApproved !== 0 ? (
          ""
        ) : (
          <ValidationButton
            text="Valider la recette"
            textValidation="valider cette recette"
            handleClick={handleValidateRecipe}
            hasPopUp
          />
        )}
      </div>
    </section>
  );
}

export default RecipeDisplay;
