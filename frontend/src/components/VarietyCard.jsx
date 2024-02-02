/* eslint-disable react/require-default-props */
/* eslint-disable react/forbid-prop-types */
import PropTypes from "prop-types";

function VarietyCard({ arrayVarieties, varietySearch }) {
  console.info(arrayVarieties);
  return (
    <section className="card-container">
      {arrayVarieties
        ?.filter((val) => {
          return val.name.toLowerCase().includes(varietySearch);
        })
        .map((val) => (
          <div className="variety-cards">
            <h3>{val.name}</h3>
            <img
              alt="pomme de terre charlotee"
              src="https://upload.wikimedia.org/wikipedia/commons/7/72/Pommes_de_terre_%28CHARLOTTE%29-cliche_Jean_Weber_%2823594803261%29.jpg?uselang=fr"
            />
            <div className="card-content">
              <div>
                <h4>Description</h4>
                <p>{val.description}</p>
                <h4>Caractéristiques physiques</h4>
                <p>
                  La {val.name} possède une couleur de peau {val.outside_color}{" "}
                  et une chaire {val.inside_color}
                </p>
                <h4>Type de chaire</h4>
                <p>{val.flesh}</p>
                <h4>Origin</h4>
                <p>{val.origin}</p>
                <h4>Adaptée pour cuisiner : </h4>
                <ul>
                  <li>{}</li>
                  <li>{}</li>
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
  arrayVarieties: PropTypes.arrayOf(PropTypes.object).isRequired,
  varietySearch: PropTypes.arrayOf(PropTypes.object),
};

export default VarietyCard;
