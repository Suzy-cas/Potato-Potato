import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import instance from "../services/instance";
// import RecipeCard from "./RecipeCard";

function NewRecipeForm() {
  const { handleAuth, handleLogout, user } = useContext(AuthContext);
  const [recipeInfo, setRecipeInfo] = useState([]);
  const [types, setTypes] = useState([]);
  const [nativeIngredients, setNativeIngredients] = useState();
  const [ingredients, setIngredients] = useState([{ id: 0, name: "" }]);
  const [cookingTechs, setCookingTechs] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    if (user === 3) {
      navigate("/login");
    }
  }, [handleAuth, handleLogout]);

  useEffect(() => {
    Promise.all([
      instance.get("/api/types"),
      instance.get("/api/ingredients"),
      instance.get("api/recipes"),
      instance.get("api/cooking-techs"),
    ])
      .then(
        ([
          typesResponse,
          ingredientsResponse,
          recipesResponse,
          cookingTechsResponse,
        ]) => {
          setTypes(typesResponse.data);
          setNativeIngredients(ingredientsResponse.data);
          setRecipeInfo(recipesResponse.data);
          setCookingTechs(cookingTechsResponse.data);
          setLoading(false);
        }
      )
      .catch((error) => {
        console.error("Error fetching data:", error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  const editIngredient = (e) => {
    const { value } = e.target;
    const selectedIngredient = nativeIngredients.find(
      (ingredient) => ingredient.id === parseInt(value, 10)
    );
    setIngredients([
      { id: selectedIngredient.id, name: selectedIngredient.name },
    ]);
  };

  return (
    <>
      <section className="new-recipe">
        <form className="recipe-form">
          <div>
            <label htmlFor="titre">
              <h3>Informations générales</h3>
              Titre
              <input type="text" />
            </label>
            <label htmlFor="diffidulty">
              Niveau de difficulté
              <select id="difficultyLevel" onChange="">
                <option value="Facile">Facile</option>
                <option value="Intermédiaire">Intermédiaire</option>
                <option value="Difficile">Difficile</option>
              </select>
            </label>
            <label htmlFor="prepTime">
              Temps de préparation
              <input type="text" placeholder="1h" />
            </label>
            <label htmlFor="cookingTime">
              Temps de cuisson
              <input type="text" placeholder="1h" />
            </label>
            <label htmlFor="cookingTech">
              Type de cuisson
              <select id="ingredient" onChange={editIngredient}>
                <option value="">Sélectionner un type</option>
                {cookingTechs.map((cookingTech) => (
                  <option key={cookingTech.id} value={cookingTech.id}>
                    {cookingTech.name}
                  </option>
                ))}
              </select>
            </label>
          </div>
          {/* <div>
      <img alt="select" />
      <button type="button" className="secondary-button">
        Sélectionner une photo
      </button>
    </div> */}
          <div className="ingredients-container">
            <label htmlFor="nativeIngredient">
              <h3>Ingrédients</h3>
              Sélectionner un ingrédient :
              <select id="ingredient" onChange={editIngredient}>
                <option value="">Sélectionner un ingrédient</option>
                {nativeIngredients.map((nativeIngredient) => (
                  <option key={nativeIngredient.id} value={nativeIngredient.id}>
                    {nativeIngredient.name}
                  </option>
                ))}
              </select>
            </label>
            <label htmlFor="newIngredient">
              Ou ajouter un nouvel ingrédient :
              <input type="text" onChange={editIngredient} />
            </label>
          </div>
          <div className="quantity-container">
            <label>
              Quantité
              <div className="quantity-input">
                <input type="number" />
                <select name="" id="">
                  <option value="nombre">Unité</option>
                  {types.map((type) => (
                    <option key={type.id} value={type.name}>
                      {type.name}
                    </option>
                  ))}
                  <option value="kg">kg</option>
                </select>
              </div>
              <button type="button" className="secondary-button">
                + Ajouter
              </button>
            </label>
          </div>

          <div className="recipe-step-container">
            <label>
              <h3>Etapes de la recette</h3>
              Etape 1
              <textarea type="textarea" />
              <div>
                <button type="button" className="secondary-button">
                  + Ajouter
                </button>
              </div>
            </label>
          </div>
        </form>
        <div className="new-recipe-display">
          {/* <RecipeCard ingredients={ingredients} /> */}
          <section className="card-container">
            <div className="recipe-cards">
              <h3>{recipeInfo.title}</h3>
              <div className="card-content">
                <div>
                  <h3>Titre</h3>
                  <h4>Difficulté</h4>
                  <p>{}</p>
                  <h4>Temps de préparation</h4>
                  <p>{}</p>
                  <h4>Temps de cuisson</h4>
                  <p>{}</p>
                  <h4>Ingrédients</h4>

                  <p>{}</p>

                  <h4>Préparation</h4>
                  <ul>
                    <li>{}</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>
        </div>
      </section>
      <div>
        <button type="button" className="secondary-button">
          Proposer ma recette
        </button>
      </div>
    </>
  );
}

export default NewRecipeForm;
