import NavBar from "../components/navBar/NavBar";
import { Button } from "@mui/material";
import "./Home.css";

function HomePage() {
  return (
    <>
      <NavBar />
      <div className="globalContainer">
        <h2>Bienvenue chez D-Connexion</h2>
        <div className="description">
          <p>
            Au fil des années, le stress quotidien semble être devenu un
            compagnon indésirable mais omniprésent dans nos vies modernes. Les
            pressions professionnelles, les exigences familiales et les attentes
            sociales s&apos;accumulent, créant un fardeau constant sur nos
            épaules. Cette augmentation du stress peut avoir des répercussions
            néfastes sur notre santé mentale et physique, entraînant des
            symptômes tels que l&apos;anxiété, l&apos;irritabilité et même la
            dépression. C&apos;est pourquoi il est crucial de reconnaître
            l&apos;importance de faire une pause régulière.{" "}
          </p>
          <img src="/stress.png" alt="" />
          <p>
            Prendre du temps pour soi permet de recharger ses batteries, de
            prendre du recul par rapport aux sources de stress et de retrouver
            un équilibre mental. Que ce soit en pratiquant la méditation, en
            faisant de l&apos;exercice, en passant du temps avec des proches ou
            en se livrant à des activités créatives, ces pauses sont
            essentielles pour préserver notre bien-être à long terme. En
            s&apos;accordant des moments de repos, on renforce sa résilience
            face au stress et on cultive une meilleure qualité de vie.
          </p>
        </div>
        <Button
          sx={{
            height: "150%",
            color: "green",
            fontWeight: "bold",
            fontSize: 18,
          }}
          variant="outlined"
        >
          Testez notre solution
        </Button>
      </div>
    </>
  );
}

export default HomePage;
