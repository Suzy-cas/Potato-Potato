/* eslint-disable jsx-a11y/no-noninteractive-tabindex */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
// import { motion, AnimatePresence } from "framer-motion";
import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import instance from "../services/instance";

import VarietyCard from "./VarietyCard";

function Variety({ chooseRecipe, handleRecipeClick }) {
  const [arrayVarieties, setArrayVarieties] = useState([]);
  const [varietySearch, setVarietySearch] = useState();
  useEffect(() => {
    instance
      .get("/api/varieties-cookingtechs")
      .then((result) => {
        setArrayVarieties(result.data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  const uniqueVarieties = arrayVarieties.filter(
    (variety, index, self) =>
      self.findIndex((v) => v.name === variety.name) === index
  );
  const handleVarietySearch = (e) => {
    setVarietySearch(e.target.value);
  };

  return (
    <>
      {/* <AnimatePresence> */}

      {/* // <motion.div
        //   animate={{
        //     x: chooseRecipe ? 0 : 100,
        //     opacity: chooseRecipe ? 1 : 0,
        //   }}
        // > */}

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
      </section>

      <VarietyCard
        arrayVarieties={arrayVarieties}
        varietySearch={varietySearch}
        uniqueVarieties={uniqueVarieties}
      />

      {/* </motion.div> */}
      {/* </AnimatePresence> */}
    </>
  );
}

export default Variety;

Variety.propTypes = {
  chooseRecipe: PropTypes.bool.isRequired,
  handleRecipeClick: PropTypes.func.isRequired,
};
