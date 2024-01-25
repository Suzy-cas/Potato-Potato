import { motion, AnimatePresence } from "framer-motion";
import PropTypes from "prop-types";

import "./recettes.scss";
import "../styles/commons.scss";

function Recettes({ chooseRecipe, handleRecipeClick }) {
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
              <div className="return-menu-right">
                <a href="/#choix">
                  <img
                    className="arrow-top"
                    src="./src/assets/img/arrow_top.svg"
                    alt="arrow-to-menu"
                    onClick={handleRecipeClick}
                  />
                </a>
                <p>Retour au menu</p>
              </div>
            </div>
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
