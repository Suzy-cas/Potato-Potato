import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import instance from "../services/instance";

function NewRecipeForm() {
  const { handleAuth, handleLogout, user } = useContext(AuthContext);
  const [types, setTypes] = useState();
  const navigate = useNavigate();

  useEffect(() => {
    if (user === 3) {
      navigate("/login");
    }
    instance
      .get("/api/types")
      .then((result) => {
        setTypes(result.data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, [handleAuth, handleLogout]);

  return (
    <section>
      <form>
        <label>
          Intitullé de la recette
          <input type="text" />
        </label>
        <h3>Ingrédients</h3>
        <div className="ingredients-container">
          <label htmlFor="nom">
            Ingredient 1
            <select name="" id="ingredient">
              <option value="" disabled defaultValue hidden>
                {" "}
                Ingrédients
              </option>

              <option value="tomate" type="text" id="">
                tomate
              </option>
            </select>
          </label>
        </div>
        <label>
          Quantité
          <input type="number" />
          <select name="" id="">
            <option value="" disabled defaultValue hidden>
              {" "}
              Type
            </option>
            <option value="kg">kg</option>
          </select>
        </label>
        <h3>Etapes de la recette</h3>
        <label>
          Etape 1
          <textarea type="textarea" />
        </label>
        <label>
          Etape 2
          <textarea type="text" />
        </label>
        <label>
          Etape 3
          <textarea type="text" />
        </label>
        <label>
          Etape 4
          <textarea type="text" />
        </label>
        <label>
          Etape 5
          <textarea type="text" />
        </label>
      </form>
    </section>
  );
}

export default NewRecipeForm;
