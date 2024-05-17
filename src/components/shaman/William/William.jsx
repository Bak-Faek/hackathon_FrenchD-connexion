import NavBar from "../../navBar/NavBar";
import "./William.css";

export default function William() {
  return (
    <>
      <NavBar />
      <section className="globalContainer">
        <h2>L&apos;Oasis de William</h2>
        <img src="/oasis.png" alt="" />
        <div className="presentation">
          <h3>Qui est William ?</h3>
          <p>
            William est un génie du développement informatique, réputé pour ses
            compétences exceptionnelles dans le domaine de la technologie.
            Pendant des années, il a travaillé dans les coulisses, créant des
            programmes et des applications innovants qui ont repoussé les
            limites de ce qui était considéré comme possible.{" "}
          </p>
          <p>
            {" "}
            Cependant, malgré son succès professionnel, William a ressenti un
            vide intérieur grandissant. Il a commencé à se questionner sur le
            sens de sa vie et sur ce qu&apos;il recherchait vraiment au plus profond
            de lui-même. Son esprit brillant était avide de connaissances et de
            compréhension, mais il aspirait également à quelque chose de plus
            profond et de plus significatif..{" "}
          </p>
          <p>
            Un jour, alors qu&apos;il contemplait son avenir, William a pris une
            décision qui a surpris beaucoup de ses collègues et amis. Il a
            laissé tomber son costume d&apos;homme d&apos;affaires pour embrasser une vie
            totalement différente en tant que chaman.{" "}
          </p>
          <p>
            S&apos;installant dans une oasis isolée, loin de l&apos;agitation du monde
            moderne, William a entrepris un voyage spirituel profond. Dans ce
            lieu de paix et de sérénité, il a trouvé la connexion avec la nature
            et avec lui-même qu&apos;il avait tant cherchée.
          </p>
          <p>
            Maintenant, William utilise ses talents informatiques pour compléter
            sa pratique chamanique, créant des outils numériques pour aider les
            autres dans leur propre voyage spirituel. Son oasis est devenu un
            refuge pour ceux qui cherchent la guérison, la transformation et la
            connexion avec leur moi le plus profond.
          </p>
        </div>

        <div className="contact">
          <h3>Pour rejoindre Matthieu :</h3>
          <p>Oasis de William</p>
          <p>Chemin des Âmes Libres</p>
          <p>Cœur du Désert</p>
          <p>12345 Harmonie-des-Sables, Sahara</p>
        </div>
      </section>
    </>
  );
}
