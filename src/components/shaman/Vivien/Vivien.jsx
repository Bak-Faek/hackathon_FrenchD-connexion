import NavBar from "../../navBar/NavBar";
import "./Vivien.css";

export default function Vivien() {
  return (
    <>
      <NavBar />
      <section className="globalContainer">
        <h2>Le temple de Vivien</h2>
        <img src="/temple.jpg" alt="" />
        <div className="presentation">
          <h3>Qui est Vivien ?</h3>
          <p>
            Vivien est un ancien Data Analyst passionné par l&apos;analyse de
            données et la résolution de problèmes complexes. Pendant des années,
            il a travaillé dans des environnements technologiques, explorant les
            méandres des données pour en extraire des insights précieux. Son
            esprit analytique et sa capacité à interpréter les informations lui
            ont valu une réputation d&apos;expert dans son domaine.{" "}
          </p>
          <p>
            {" "}
            Cependant, malgré son succès professionnel, Vivien a toujours
            ressenti un profond appel intérieur vers quelque chose de plus
            profond et de plus spirituel. Il a commencé à ressentir un décalage
            entre son travail quotidien axé sur la technologie et son désir de
            connexion avec la nature et les mystères de l&apos;univers.{" "}
          </p>
          <p>
            Un jour, alors qui&apos;l réfléchissait à sa vie et à ses aspirations les
            plus profondes, Vivien a pris une décision radicale. Inspiré par la
            spiritualité et les anciennes traditions chamaniques, il a décidé de
            tout laisser derrière lui pour se reconvertir en chaman.{" "}
          </p>
          <p>
            Plongeant au cœur de la jungle, Vivien a embrassé une existence
            totalement nouvelle et déconnectée de la technologie moderne. Il a
            trouvé refuge dans un ancien temple sacré, où il pratique et
            enseigne les voies chamaniques. Dans ce temple, il trouve la paix,
            la sagesse et la connexion spirituelle qu&apos;il a longtemps
            recherchées.
          </p>
          <p>
            Utilisant ses compétences analytiques acquises dans son ancien
            métier, Vivien observe les schémas naturels, interprète les signes
            de l&apos;univers et guide ceux qui viennent à lui à travers des
            cérémonies de guérison chamaniques. Son temple est devenu un
            sanctuaire pour ceux qui cherchent la guérison, la révélation
            personnelle et la connexion avec le monde naturel.
          </p>
        </div>

        <div className="contact">
          <h3>Pour rejoindre Vivien :</h3>
          <p>Temple de Vivien</p>
          <p>Voie des Esprits Anciens</p>
          <p>Cœur de la Jungle, </p>
          <p> 67890 Harmonie-des-Lointains, Amazonie</p>
        </div>
      </section>
    </>
  );
}
