// import "../styles/commons.scss";

function RecipeCard() {
  return (
    <section className="variety-cards">
      {arrayRecipe
        ?.filter((val) => {
          return val.name.toLowerCase().includes(varietySearch.toLowerCase());
        })
        .map((val) => (
          <div className="card-container">
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

export default RecipeCard;
