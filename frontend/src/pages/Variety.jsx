import { useEffect, useState } from "react";
import { motion } from "framer-motion";

import instance from "../services/instance";
import VarietyCard from "../components/VarietyCard";

function Variety() {
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
    <motion.section initial={{ x: -500 }} animate={{ x: 0 }}>
      <section className="variety">
        <div id="trouve-variete">
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
                  placeholder="Charlotte, Agria,..."
                  onChange={handleVarietySearch}
                />
              </form>
            </div>
          </div>
        </div>

        <VarietyCard
          varietySearch={varietySearch}
          uniqueVarieties={uniqueVarieties}
        />
      </section>
    </motion.section>
  );
}

export default Variety;
