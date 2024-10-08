import { useState } from "react";
import { motion } from "framer-motion";

import MainChoise from "../components/MainChoise";

function Home() {
  const [potatoHeart, setPotatoHeart] = useState(false);
  return (
    <header>
      <motion.img
        initial={{
          scale: 0,
          y: 0.5,
        }}
        animate={{
          scale: 1,
          y: [0, 150, -150, -150, 0],
        }}
        exit={{
          scale: 0,
          y: 0,
        }}
        transition={{
          duration: 1,
          ease: "backInOut",
          times: [0, 0.25, 0.5, 0.85, 1],
        }}
        className="potato_heart"
        onMouseEnter={() => setPotatoHeart(true)}
        onMouseLeave={() => setPotatoHeart(false)}
        src={
          potatoHeart
            ? "./src/assets/img/PW_intro-coeur.png"
            : "./src/assets/img/PW_intro.png"
        }
        alt="potato-love"
      />
      <h1>Bienvenue sur</h1>
      <h2>PoTAto PotaTO !?</h2>
      <a href="/#choix">
        <img
          className="arrow"
          src="./src/assets/img/arrow.svg"
          alt="flêche pour descendre"
        />
      </a>
      <section id="choix">
        <MainChoise />
      </section>
    </header>
  );
}

export default Home;
