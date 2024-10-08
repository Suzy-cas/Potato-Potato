/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import instance from "../../services/instance";

function NewRecipeForm({
  recipeInfo,
  setRecipeInfo,
  ingredients,
  setIngredients,
  stepsArray,
  setStepsArray,
  handleSubmit,
  inputRef,
  setThumbnail,
  thumbnail,
}) {
  const [types, setTypes] = useState([]);
  // eslint-disable-next-line no-unused-vars
  const [nativeIngredients, setNativeIngredients] = useState([]);
  const [cookingTechs, setCookingTechs] = useState([]);

  const editInfo = (e) => {
    const { name, value } = e.target;
    setRecipeInfo((prevRecipeInfo) => ({
      ...prevRecipeInfo,
      [name]: value,
    }));
  };
  const handleChangeThumbnail = (e) => {
    if (
      e.target.files[0].type === "image/jpeg" ||
      e.target.files[0].type === "image/jpg" ||
      e.target.files[0].type === "image/png"
    ) {
      setThumbnail(URL.createObjectURL(e.target.files[0]));
    }
  };

  useEffect(() => {
    Promise.all([
      instance.get("/api/types"),
      instance.get("/api/ingredients"),
      instance.get("api/cooking-techs"),
    ])
      .then(([typesResponse, ingredientsResponse, cookingTechsResponse]) => {
        setTypes(typesResponse.data);
        setNativeIngredients(ingredientsResponse.data);
        setCookingTechs(cookingTechsResponse.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);
  const editIngredient = (e, currentIndex) => {
    const { name, value } = e.target;

    const newIngredients = ingredients.map((ingredient, index) => {
      if (index === currentIndex && name === "type_id") {
        return {
          ...ingredient,
          [name]: value,
        };
      }

      if (index === currentIndex) {
        return { ...ingredient, [name]: value };
      }
      return ingredient;
    });
    setIngredients(newIngredients);
  };

  const addToArray = (array, setArray, object = false) => {
    if (object === true) {
      return setArray([
        ...array,
        {
          value: 0,
          name: "",
          type_id: 1,
        },
      ]);
    }
    return setArray([...array, ""]);
  };
  const removeItemArray = (array, setArray, index, object = false) => {
    if (object === true) {
      return setArray(
        array
          .filter((item, i) => i !== index)
          .map((ingredient) => {
            return { ...ingredient };
          })
      );
    }
    return setArray(array.filter((item, i) => i !== index));
  };

  const editItemArray = (array, setArray, e, index) => {
    if (e.nativeEvent.inputType === "insertLineBreak") return;

    const newArray = array.map((item, i) => {
      if (index === i && !e.target.value.includes("//")) {
        return [`${e.target.value}`];
      }
      return item;
    });

    setArray(newArray);
  };

  return (
    <section className="new-recipe">
      <form className="recipe-form">
        <div className="recipe-info-ingredient">
          <div className="recipe-infos">
            {" "}
            <h3>Informations générales</h3>
            <label htmlFor="titre">
              Titre
              <input
                type="text"
                name="title"
                placeholder={recipeInfo.title}
                onChange={editInfo}
              />
            </label>
            <label htmlFor="diffidulty">
              Niveau de difficulté
              <select
                id="difficultyLevel"
                name="difficulty"
                value={recipeInfo.difficulty}
                onChange={editInfo}
              >
                <option value="" className="first-option">
                  Sélectionnez un niveau
                </option>
                <option value="Facile">Facile</option>
                <option value="Intermédiaire">Intermédiaire</option>
                <option value="Difficile">Difficile</option>
              </select>
            </label>
            <label htmlFor="prepTime">
              Temps de préparation
              <input
                type="text"
                name="prep_time"
                placeholder="1h"
                value={recipeInfo.prep_time}
                onChange={editInfo}
              />
            </label>
            <label htmlFor="cookingTime">
              Temps de cuisson
              <input
                type="text"
                name="cooking_time"
                placeholder="1h"
                value={recipeInfo.cooking_time}
                onChange={editInfo}
              />
            </label>
            <label htmlFor="cookingTech">
              Type de recette
              <select
                id="ingredient"
                name="cooking_tech_id"
                value={recipeInfo.cooking_tech_id}
                onChange={editInfo}
              >
                <option value="9001">Sélectionner un type</option>
                {cookingTechs
                  .sort((a, b) => a.name.localeCompare(b.name))
                  .map((cookingTech) => (
                    <option key={cookingTech.id} value={cookingTech.id}>
                      {cookingTech.name}
                    </option>
                  ))}
              </select>
            </label>
          </div>
          <form className="ingredient-container">
            <h3>Ingrédients</h3>

            {ingredients.map((ingredient, index) => (
              // eslint-disable-next-line react/no-array-index-key
              <div key={index} className="ingredient-input">
                <label>
                  Nom de l'ingrédient:
                  <input
                    type="text"
                    name="name"
                    placeholder="Nom de l'ingrédient"
                    autoComplete="off"
                    value={ingredient.name}
                    onChange={(e) => editIngredient(e, index)}
                  />
                </label>
                <label className="quantity-label">
                  Quantité :
                  <input
                    type="number"
                    name="value"
                    autoComplete="off"
                    placeholder="0"
                    value={ingredient.value}
                    onChange={(e) => editIngredient(e, index)}
                  />
                </label>
                <label>
                  Unité :
                  <select
                    name="type_id"
                    value={ingredient.type_id}
                    onChange={(e) => editIngredient(e, index)}
                  >
                    <option value="">Sélectionnez l'unité</option>
                    {types.map((type) => (
                      <option key={type.id} value={type.id}>
                        {type.name}
                      </option>
                    ))}
                  </select>
                </label>

                <div className="add-remove-div">
                  {ingredients.length !== 1 ? (
                    <button
                      type="button"
                      className="add-remove-button"
                      onClick={() =>
                        removeItemArray(
                          ingredients,
                          setIngredients,
                          index,
                          true
                        )
                      }
                    >
                      -
                    </button>
                  ) : (
                    <button type="button" className="add-remove-button">
                      -
                    </button>
                  )}

                  <button
                    type="button"
                    className="add-remove-button"
                    onClick={() =>
                      addToArray(ingredients, setIngredients, true)
                    }
                  >
                    +
                  </button>
                </div>
              </div>
            ))}
          </form>
        </div>
        <form className="recipe-step-container">
          <h3>Etapes</h3>
          {stepsArray.map((step, index) => (
            // eslint-disable-next-line react/no-array-index-key
            <label key={index}>
              <textarea
                type="text"
                value={step}
                name={`step${index}`}
                autoComplete="off"
                placeholder="Décrivez les étapes de la recette"
                onChange={(e) =>
                  editItemArray(stepsArray, setStepsArray, e, index)
                }
              />
              <div className="add-remove-div">
                {index !== 0 ? (
                  <button
                    type="button"
                    className="add-remove-button"
                    onClick={() =>
                      removeItemArray(stepsArray, setStepsArray, index)
                    }
                  >
                    -
                  </button>
                ) : (
                  ""
                )}
                <button
                  type="button"
                  className="add-remove-button"
                  onClick={() => addToArray(stepsArray, setStepsArray)}
                >
                  +
                </button>
              </div>
            </label>
          ))}
        </form>
        <div className="add-recipe-picture">
          <h3>Ajouter une photo</h3>
          <input
            type="file"
            name="recipePicture"
            accept="image/png, image/jpeg"
            onChange={handleChangeThumbnail}
            ref={inputRef}
          />
        </div>
        <div>
          <button
            type="button"
            className="secondary-button"
            onClick={handleSubmit}
          >
            Proposer ma recette
          </button>
        </div>
      </form>
      <div className="new-recipe-display">
        <section className="card-container-preview">
          <div className="preview-card">
            <h3>{recipeInfo.title}</h3>
            <img alt="" src={thumbnail} />
            <div className="card-content">
              <div>
                <h4>Difficulté</h4>
                <p>{recipeInfo.difficulty}</p>
                <h4>Temps de préparation</h4>
                <p>{recipeInfo.prep_time}</p>
                <h4>Temps de cuisson</h4>
                <p>{recipeInfo.cooking_time}</p>
                <h4>Type de recette</h4>
                {cookingTechs
                  .filter((el) => el.id === Number(recipeInfo.cooking_tech_id))
                  .map((cookingTech) => (
                    <p key={cookingTech.id}>{cookingTech.name}</p>
                  ))}
                <h4>Ingrédients</h4>
                {ingredients !== undefined
                  ? ingredients.map((ingredient) => {
                      const typeToDisplay = types.find((type) => {
                        if (type.id === 99001) {
                          return false; // Ne rien afficher si type.id === 99001
                        }
                        return type.id === Number(ingredient.type_id);
                      });

                      return (
                        <p>
                          {ingredient.name} :{" "}
                          {ingredient.value !== "0" ? ingredient.value : ""}{" "}
                          {typeToDisplay?.name || ""}{" "}
                        </p>
                      );
                    })
                  : null}
                <h4>Préparation</h4>
                <ul>
                  {stepsArray.length > 0
                    ? stepsArray.map((step) => <li>{step}</li>)
                    : stepsArray[0].step}
                </ul>
              </div>
            </div>
          </div>
        </section>
      </div>
    </section>
  );
}

export default NewRecipeForm;
