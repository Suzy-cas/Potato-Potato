import { motion, AnimatePresence } from "framer-motion";
import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import instance from "../services/instance";

import RecipeCard from "./RecipeCard";
import "./recettes.scss";
import "../styles/commons.scss";

function Recettes({ chooseRecipe, handleRecipeClick }) {
  const [arrayRecipesCookTechs, setArrayRecipesCookTechs] = useState([]);
  const [recipeSearch, setRecipeSearch] = useState();

  useEffect(() => {
    instance
      .get("/api/recipes/cooking-techs")
      .then((result) => {
        setArrayRecipesCookTechs(result.data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  const handleRecipeSearch = (e) => {
    setRecipeSearch(e.target.value);
  };

  return (
    <AnimatePresence>
      {chooseRecipe && (
        <motion.div
          animate={{
            x: chooseRecipe ? 20 : 100,
            opacity: chooseRecipe ? 1 : 0,
          }}
        >
          <section id="trouve-recettes">
            <div className="recettes">
              <div className="form_recettes">
                <h1>Tu cherches quelle type de recette ?</h1>
                <form>
                  <input type="checkbox" name="soup"></input>
                  <label htmlFor="soup">Soupe</label>
                </form>
                <div className="grid_recettes">
                  <button type="button">Soupe</button>
                </div>
              </div>
              <div className="div-img">
                <img
                  className="img"
                  src="./src/assets/img/PW_surpriso.png"
                  alt="potato_in_a_plate"
                />
              </div>
            </div>
            <div className="return-menu-right">
              <a href="/#choix">
                <img
                  className="arrow-top"
                  src="./src/assets/img/arrow_top.svg"
                  alt="arrow-to-menu"
                  onClick={handleRecipeClick}
                />
                <p>Retour au menu</p>
              </a>
            </div>
            <RecipeCard
              arrayRecipes={arrayRecipesCookTechs}
              recipeSearch={recipeSearch}
            />
          </section>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default Recettes;

Recettes.propTypes = {
  chooseRecipe: PropTypes.bool.isRequired,
  handleRecipeClick: PropTypes.func.isRequired,
};
