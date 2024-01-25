import { motion } from "framer-motion";
import PropTypes from "prop-types";

import "./recettes.scss";
import "../styles/commons.scss";

function Variete({ chooseRecipe, handleRecipeClick }) {
  return (
    <motion.div
      animate={{ x: chooseRecipe ? 0 : 100, opacity: chooseRecipe ? 1 : 0 }}
    >
      <section id="trouve-variete">
        <div className="recettes">
          <div className="div-img">
            <img
              className="img"
              src="./src/assets/img/PW_recognito.png"
              alt="unknown_potato"
            />
          </div>
          <div className="form_recettes">
            <h1>T&apos;as quoi comme variété ?</h1>
            <form>
              <input value="" placeholder="Charlotte"></input>
            </form>
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
        </div>
      </section>
    </motion.div>
  );
}

export default Variete;

Variete.propTypes = {
  chooseRecipe: PropTypes.bool.isRequired,
  handleRecipeClick: PropTypes.func.isRequired,
};
