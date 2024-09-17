/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

function MainChoise() {
  const [potatoIncognito, setPotatoIncognito] = useState(false);
  const [potatoSurpriso, setPotatoSurpriso] = useState(false);

  return (
    <motion.section initial={{ x: -500 }} animate={{ x: 0 }}>
      <section className="main-choise">
        <div>
          <h1>Découvre une</h1>
          <h2>VARIÉTÉ</h2>
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
          <Link to="/varietes">
            <img
              onMouseEnter={() => setPotatoIncognito(true)}
              onMouseLeave={() => setPotatoIncognito(false)}
              className="arrow-side"
              src="./src/assets/img/arrow-left.svg"
              alt="arrow-to-variete"
            />
          </Link>
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

          <Link to="/recettes">
            <img
              onMouseEnter={() => setPotatoSurpriso(true)}
              onMouseLeave={() => setPotatoSurpriso(false)}
              className="arrow-side"
              src="./src/assets/img/arrow-right.svg"
              alt="arrow-to-recipe"
            />
          </Link>
        </div>
      </section>
    </motion.section>
  );
}

export default MainChoise;
