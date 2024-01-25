import "../styles/commons.scss";
import "./cards.scss";

function RecipeCard() {
  return (
    <container className="card-container">
      <section>
        <h3>La Charlotte</h3>
        <img
          alt="pomme de terre charlotee"
          src="https://upload.wikimedia.org/wikipedia/commons/7/72/Pommes_de_terre_%28CHARLOTTE%29-cliche_Jean_Weber_%2823594803261%29.jpg?uselang=fr"
        />
      </section>
      <section className="card-content">
        <div>
          <h4>Description physique</h4>
          <p>
            La charlotteLorem ipsum dolor sit amet, consectetuer adipiscing
            elit, sed diam nonuLorem ipsum dolor sit amet, consectetuer
            adipiscing elit, sed diam nonummy nibh euis
          </p>
          <h4>Informations nutritives</h4>
          <p>
            La charlotteLorem ipsum dolor sit amet, consectetuer adipiscing
            elit, sed diam nonuLorem ipsum dolor sit amet, consectetuer
            adipiscing elit, sed diam nonummy nibh euis
          </p>
          <h4>Type de chaire</h4>
          <p>Ferme</p>
          <h4>Adaptée pour cuisiner : </h4>
          <ul>
            <li>Purée</li>
            <li>Frites</li>
          </ul>
          <h4>Le saviez-vous ?</h4>
          <p>
            La charlotteLorem ipsum dolor sit amet, consectetuer adipiscing
            elit, sed diam nonuLorem ipsum dolor sit amet, consectetuer
            adipiscing elit, sed diam nonummy nibh euis
          </p>
        </div>
      </section>
      <section>
        <button type="button">Les recettes</button>
      </section>
    </container>
  );
}

export default RecipeCard;
