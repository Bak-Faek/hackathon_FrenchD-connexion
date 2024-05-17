import NavBar from "../components/navBar/NavBar";
import { Button } from "@mui/material";
import "./Home.css";

function HomePage() {
  return (
    <>
      <NavBar />
      <div className='globalContainer'>
        <h2>Bienvenue chez D-Connexion</h2>
        <div className='description'>
          <p>
            Au fil des années, le stress quotidien semble être devenu un
            compagnon indésirable mais omniprésent dans nos vies modernes. Les
            pressions professionnelles, les exigences familiales et les attentes
            sociales s&apos;accumulent, créant un fardeau constant sur nos
            épaules. Cette augmentation du stress peut avoir des répercussions
            néfastes sur notre santé mentale et physique, entraînant des
            symptômes tels que l&apos;anxiété, l&apos;irritabilité et même la
            dépression. C&apos;est pourquoi il est crucial de reconnaître
            l&apos;importance de faire une pause régulière.{' '}
          </p>
          <img src='/stress.png' alt='' />
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
            // height: '150%',
            height: 'auto',
            color: 'black',
            fontWeight: 'bold',
            fontSize: 18,
            backgroundColor: 'white',
            border: '1px solid black',
            marginBottom: '36px',
            transition:
              'box-shadow 0.3s, background-color 0.3s' /* Ajout de la transition pour background-color */,
            '&:active': {
              transform: 'translateY(2px)',
              boxShadow: '0 0 10px rgba(0, 0, 0, 0.5)',
            },
            '&:hover': {
              backgroundColor:
                '#43431F' /* Correction du background bleu sur hover */,
              color: 'white',
            },
            cursor: 'pointer',
          }}
          // variant='outlined'
        >
          Testez notre solution
        </Button>
      </div>
    </>
  );
}

export default HomePage;
