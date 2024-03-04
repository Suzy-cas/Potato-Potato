import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import instance from "../services/instance";

function NewRecipeForm() {
  const { handleAuth, handleLogout, user } = useContext(AuthContext);
  const [types, setTypes] = useState([]);
  const [nativeIngredients, setNativeIngredients] = useState();
  const [ingredients, setIngredients] = useState([{ id: 0, name: "" }]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    if (user === 3) {
      navigate("/login");
    }
  }, [handleAuth, handleLogout]);

  useEffect(() => {
    Promise.all([instance.get("/api/types"), instance.get("/api/ingredients")])
      .then(([typesResponse, ingredientsResponse]) => {
        setTypes(typesResponse.data);
        setNativeIngredients(ingredientsResponse.data);
        setLoading(false);
      })
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

  console.info(ingredients);

  return (
    <section className="new-recipe">
      <form className="recipe-form">
        <div>
          <h3>Nom de la recette :</h3>
          <input type="text" />
        </div>
        <div>
          <img alt="select" />
          <button type="button" className="secondary-button">
            Sélectionner une photo
          </button>
        </div>
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
          </label>
          <button type="button" className="secondary-button">
            + Ajouter
          </button>
        </div>
      </form>
      <div className="new-recipe-display">
        <h3>Nom de la recette</h3>
      </div>
    </section>
  );
}

export default NewRecipeForm;
