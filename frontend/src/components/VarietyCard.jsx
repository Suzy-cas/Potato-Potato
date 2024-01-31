import PropTypes from "prop-types";

import "../styles/commons.scss";
import "./cards.scss";

function VarietyCard({ arrayVarieties }) {
  return (
    <section className="variety-cards">
      {arrayVarieties?.map((variety) => (
        <div className="card-container">
          <h3>{variety.name}</h3>
          <img
            alt="pomme de terre charlotee"
            src="https://upload.wikimedia.org/wikipedia/commons/7/72/Pommes_de_terre_%28CHARLOTTE%29-cliche_Jean_Weber_%2823594803261%29.jpg?uselang=fr"
          />
          <div className="card-content">
            <div>
              <h4>Description</h4>
              <p>{variety.description}</p>
              <h4>Caractéristiques physiques</h4>
              <p>
                La {variety.name} possède une couleur de peau{" "}
                {variety.outside_color} et une chaire {variety.inside_color}
              </p>
              <h4>Type de chaire</h4>
              <p>{variety.flesh}</p>
              <h4>Origin</h4>
              <p>{variety.origin}</p>
              <h4>Adaptée pour cuisiner : </h4>
              <ul>
                <li>Purée</li>
                <li>Frites</li>
              </ul>
            </div>
          </div>
          <section>
            <button type="button">Les recettes</button>
          </section>
        </div>
      ))}
    </section>
  );
}
VarietyCard.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  arrayVarieties: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default VarietyCard;
