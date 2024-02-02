/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import { useState } from "react";

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

  return (
    <>
      <section id="choix" className="menu">
        {/* {!isVisible && (
          <motion.section
            initial={{ x: -50 }}
            animate={{ x: 100 }}
          > */}
        <div>
          <h1>Indentifie une</h1>
          <h2>PATATE</h2>
          <img
            className="small_potato"
            onMouseEnter={() => setPotatoIncognito(true)}
            onMouseLeave={() => setPotatoIncognito(false)}
            onClick={handleRecipeClick}
            onKeyDown={handleRecipeClick}
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
              src="./src/assets/img/arrow-left.svg"
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
            onClick={handleRecipeClick}
            onKeyDown={handleRecipeClick}
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
              src="./src/assets/img/arrow-right.svg"
              alt="arrow-to-recipe"
            />
          </a>
        </div>
        {/* </motion.section> */}
        {/* )} */}
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
