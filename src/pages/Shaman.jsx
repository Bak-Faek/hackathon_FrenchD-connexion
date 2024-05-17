import { Link } from "react-router-dom";
import NavBar from "../components/navBar/NavBar";
import { Button } from "@mui/material";
import "./Shaman.css";

function Shaman() {
  return (
    <>
      <NavBar />
      <div className="GlobalContainer">
        <h3>Découvrez nos Chamans</h3>
        <div className="shaman">
          <div className="intro">
            <img className="shamanImage" src="./matthieu.jpg" alt="" />

            <h3>Mattieu</h3>
          </div>

          <p>
            Matthieu est un ancien enseignant passionné dans le domaine du
            développement web. Pendant de nombreuses années, il a partagé son
            savoir et son expertise avec ses élèves, les guidant à travers les
            complexités du codage et de la conception de sites web.{" "}
          </p>
          <Link to="/Shaman/Matthieu">
            <Button
              sx={{
                color: "green",
                fontWeight: "bold",
                fontSize: 18,
              }}
              variant="outlined"
            >
              En savoir plus
            </Button>
          </Link>
        </div>
        <div className="shaman">
          <div className="intro">
            <img src="./vivien.jpg" alt="" />

            <h3>Vivien</h3>
          </div>
          <p>
            Vivien est un ancien Data Analyst passionné par l&apos;analyse de
            données et la résolution de problèmes complexes. Pendant des années,
            il a travaillé dans des environnements technologiques, explorant les
            méandres des données pour en extraire des insights précieux. Son
            esprit analytique et sa capacité à interpréter les informations lui
            ont valu une réputation d&apos;expert dans son domaine.{" "}
          </p>
          <Link to="/Shaman/Vivien">
            <Button
              sx={{
                color: "green",
                fontWeight: "bold",
                fontSize: 18,
              }}
              variant="outlined"
            >
              En savoir plus
            </Button>
          </Link>
        </div>
        <div className="shaman">
          <div className="intro">
            <img src="./william.jpg" alt="" />

            <h3>William</h3>
          </div>
          <p>
            William est un génie du développement informatique, réputé pour ses
            compétences exceptionnelles dans le domaine de la technologie.
            Pendant des années, il a travaillé dans les coulisses, créant des
            programmes et des applications innovants qui ont repoussé les
            limites de ce qui était considéré comme possible.{" "}
          </p>
          <Link to="/Shaman/William">
            <Button
              sx={{
                color: "green",
                fontWeight: "bold",
                fontSize: 18,
              }}
              variant="outlined"
            >
              En savoir plus
            </Button>
          </Link>
        </div>
      </div>
    </>
  );
}

export default Shaman;
