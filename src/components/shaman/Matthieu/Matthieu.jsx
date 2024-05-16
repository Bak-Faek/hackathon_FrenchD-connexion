import NavBar from "../../navBar/NavBar";
import "./Matthieu.css";

export default function Matthieu() {
  return (
    <>
      <NavBar />
      <section className="globalContainer">
        <h2>La Hutte de Matthieu</h2>
        <img src="/hutte2.png" alt="" />
        <div className="presentation">
          <h3>Qui est Matthieu ?</h3>
          <p>
            Matthieu est un ancien enseignant passionné dans le domaine du
            développement web. Pendant de nombreuses années, il a partagé son
            savoir et son expertise avec ses élèves, les guidant à travers les
            complexités du codage et de la conception de sites web.{" "}
          </p>
          <p>
            {" "}
            Cependant, après une période de réflexion profonde sur sa vie et ses
            aspirations, Matthieu a entrepris un voyage spirituel qui l&apos;a
            conduit à découvrir sa véritable passion pour le chamanisme. Fasciné
            par les pratiques anciennes de guérison et de connexion avec la
            nature, il a décidé de se reconvertir dans cette voie.{" "}
          </p>
          <p>
            Aujourd&apos;hui, Matthieu combine ses connaissances techniques du
            monde numérique avec sa nouvelle compréhension spirituelle en tant
            que chamane. Il a choisi de s&apos;isoler dans une cabane rustique
            au cœur de la nature, où il se connecte profondément avec les
            éléments naturels et pratique ses rituels chamaniques.{" "}
          </p>
          <p>
            Dans cet environnement paisible, Matthieu invite des adeptes et des
            chercheurs spirituels à le rejoindre pour des sessions de guérison,
            des cérémonies de connexion avec la nature et des enseignements sur
            le chamanisme et la technologie. Sa cabane devient ainsi un refuge
            pour ceux qui cherchent à explorer les mystères de l&apos;âme et à
            trouver un équilibre entre le monde moderne et la sagesse ancienne
            de la nature.
          </p>
        </div>

        <div className="contact">
          <h3>Pour Rejoindre Matthieu :</h3>
          <p>Cabane de Matthieu</p>
          <p>Chemin des Esprits Sauvages Forêt de l&apos;Aube</p>
          <p>12345 Harmonie-sur-Verdure, France</p>
        </div>
      </section>
    </>
  );
}
