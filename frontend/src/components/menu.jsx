/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import { useState } from "react";
import { motion } from "framer-motion";

import "./menu.scss";
import "../styles/commons.scss";
import Variete from "./Variete";
import Recettes from "./Recettes";

function Menu() {
  const [potatoIncognito, setPotatoIncognito] = useState(false);
  const [potatoSurpriso, setPotatoSurpriso] = useState(false);
  const [chooseRecipe, setchooseRecipe] = useState(false);
  const [isVisible, setisVisible] = useState(false);

  const handleRecipeClick = () => {
    setchooseRecipe(!chooseRecipe);
    setisVisible(!isVisible);
  };

  console.info(chooseRecipe);

  return (
    <>
      <section id="choix">
        {!isVisible && (
          <motion.section
            initial={{ x: 0 }}
            animate={{ x: 100 }}
            className="menu"
          >
            <div>
              <h1>Indentifie une</h1>
              <h2>PATATE</h2>
              <img
                className="small_potato"
                onMouseEnter={() => setPotatoIncognito(true)}
                onMouseLeave={() => setPotatoIncognito(false)}
                src={
                  potatoIncognito
                    ? "./src/assets/img/PW_recognito.png"
                    : "./src/assets/img/PW_incognito.png"
                }
                alt="unknown_potato"
              />
              <a href="#trouve-variete">
                <img
                  onMouseEnter={() => setPotatoIncognito(true)}
                  onMouseLeave={() => setPotatoIncognito(false)}
                  onClick={handleRecipeClick}
                  onKeyDown={handleRecipeClick}
                  className="arrow-side"
                  src="./src/assets/img/PW_arrow-left.png"
                  alt="arrow-to-variete"
                />
              </a>
            </div>
            <div>
              <h1>Trouve une</h1>
              <h2>RECETTE</h2>
              <img
                className="small_potato"
                onMouseEnter={() => setPotatoSurpriso(true)}
                onMouseLeave={() => setPotatoSurpriso(false)}
                src={
                  potatoSurpriso
                    ? "./src/assets/img/PW_surpriso.png"
                    : "./src/assets/img/PW_dodo.png"
                }
                alt="potato_in_a_plate"
              />
              <a href="#trouve-recettes">
                <img
                  onMouseEnter={() => setPotatoSurpriso(true)}
                  onMouseLeave={() => setPotatoSurpriso(false)}
                  onClick={handleRecipeClick}
                  onKeyDown={handleRecipeClick}
                  className="arrow-side"
                  src="./src/assets/img/PW_arrow-right.png"
                  alt="arrow-to-recipe"
                />
              </a>
            </div>
          </motion.section>
        )}
      </section>
      <Recettes
        chooseRecipe={chooseRecipe}
        handleRecipeClick={handleRecipeClick}
      />
      <Variete
        chooseRecipe={chooseRecipe}
        handleRecipeClick={handleRecipeClick}
      />
    </>
  );
}

export default Menu;
