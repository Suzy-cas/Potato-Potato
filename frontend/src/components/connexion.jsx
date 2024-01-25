import "./connexion.scss";
import "../styles/commons.scss";

function Connexion() {
  return (
    <section className="backdrop">
      <div className="modal-connexion">
        <h2> Connexion</h2>
        <div className="content">
          <form>
            <input
              className="inputConnexion"
              type="email"
              placeholder="Email"
            />
            <input
              className="inputConnexion"
              type="password"
              placeholder="Mot de passe"
            />
          </form>
        </div>
        <footer className="footer-modal">
          <label className="checkboxCGU">
            <input type="checkbox" /> J'accepte les{" "}
            <a href="/NotFound">conditions générales d'utilisation.</a>
          </label>
          <button className="submit" type="submit">
            Se connecter
          </button>
          <a className="forgetPwdLink" href="/NotFound">
            Mot de passe oublié ?
          </a>
          <a className="inscriptionLink" href="/NotFound">
            S'inscrire
          </a>
        </footer>
      </div>
    </section>
  );
}

export default Connexion;
