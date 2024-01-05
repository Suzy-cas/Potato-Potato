function Connexion() {
  return (
    <section>
      <h2> Connexion à mon espace </h2>
      <input className="inputConnexion" type="email" placeholder="Email" />
      <input
        className="inputConnexion"
        type="password"
        placeholder="Mot de passe"
      />
      <label className="checkboxCGU">
        <input type="checkbox" /> J'accepte les{" "}
        <a href="/NotFound">conditions générales d'utilisation.</a>
      </label>
      <button type="submit">Se connecter</button>
      <a className="forgetPwdLink" href="/NotFound">
        Mot de passe oublié ?
      </a>
      <a className="inscriptionLink" href="/NotFound">
        S'inscrire
      </a>
    </section>
  );
}

export default Connexion;
