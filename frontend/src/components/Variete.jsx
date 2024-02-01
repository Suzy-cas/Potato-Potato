/* eslint-disable jsx-a11y/no-noninteractive-tabindex */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import { motion } from "framer-motion";
import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import instance from "../services/instance";

import "./recettes.scss";
import "../styles/commons.scss";
import VarietyCard from "./VarietyCard";

function Variete({ chooseRecipe, handleRecipeClick }) {
  const [arrayVarieties, setArrayVarieties] = useState([]);
  const [varietySearch, setVarietySearch] = useState();
  useEffect(() => {
    instance
      .get("/api/varieties")
      .then((result) => {
        setArrayVarieties(result.data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  const handleVarietySearch = (e) => {
    setVarietySearch(e.target.value);
  };

  return (
    <motion.div
      animate={{ x: chooseRecipe ? 20 : 100, opacity: chooseRecipe ? 1 : 0 }}
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
              <input
                type="text"
                value={varietySearch}
                placeholder="Charlotte, Agria, Pompadour..."
                onChange={handleVarietySearch}
              />
            </form>
          </div>
        </div>

        <VarietyCard
          arrayVarieties={arrayVarieties}
          varietySearch={varietySearch}
        />

        <div className="return-menu-right">
          <a href="/#choix">
            <img
              className="arrow-top"
              src="./src/assets/img/arrow_top.svg"
              alt="arrow-to-menu"
              onClick={handleRecipeClick}
              onKeyDown={(event) =>
                event.key === "Enter" && handleRecipeClick()
              }
              tabIndex={0}
            />
            <p>Retour au menu</p>
          </a>
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
