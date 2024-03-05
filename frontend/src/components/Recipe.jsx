// import { motion, AnimatePresence } from "framer-motion";
import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import instance from "../services/instance";

import RecipeCard from "./RecipeCard";

function Recipe() {
  const [recipesCookTechs, setRecipesCookTechs] = useState([]);
  const [recipeSearch, setRecipeSearch] = useState([]);

  useEffect(() => {
    instance
      .get("/api/recipes-cookingtechs")
      .then((result) => {
        setRecipesCookTechs(result.data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  const uniqueCookingTechs = recipesCookTechs
    .map((recipe) => recipe.cooking_tech)
    .filter((value, index, self) => self.indexOf(value) === index);

  const handleRecipeSearch = (e) => {
    const selectedTech = e.target.value;

    if (recipeSearch.includes(selectedTech)) {
      setRecipeSearch((prevSearch) =>
        prevSearch.filter((tech) => tech !== selectedTech)
      );
    } else {
      setRecipeSearch((prevSearch) => [...prevSearch, selectedTech]);
    }
  };

  return (
    // <AnimatePresence>
    //   <motion.div
    //     animate={{
    //       x: chooseRecipe ? 0 : 100,
    //       opacity: chooseRecipe ? 1 : 0,
    //     }}
    //   >
    <>
      <section id="trouve-recettes">
        <div className="recettes">
          <div className="form_recettes">
            <h1>Comment veux-tu cuisiner tes patates ?</h1>
            <form>
              {uniqueCookingTechs.map((cookingTech) => (
                <button
                  type="button"
                  name="cookingT"
                  value={cookingTech}
                  onClick={handleRecipeSearch}
                  // className={isActive ? "active" : ""}
                >
                  {cookingTech}
                </button>
              ))}
            </form>
          </div>
          <div className="div-img">
            <img
              className="img"
              src="./src/assets/img/PW_surpriso.png"
              alt="potato_in_a_plate"
            />
          </div>
        </div>
      </section>
      <div>
        <RecipeCard
          recipesCookTechs={recipesCookTechs}
          recipeSearch={recipeSearch}
        />
      </div>
    </>
    //   </motion.div>
    // </AnimatePresence>
  );
}

export default Recipe;

Recipe.propTypes = {
  chooseRecipe: PropTypes.bool.isRequired,
  handleRecipeClick: PropTypes.func.isRequired,
};
