import { Link } from "react-router-dom";
import NavBar from "../components/navBar/NavBar";
import { Button } from "@mui/material";
import "./Shaman.css";

function Shaman() {
  return (
    <>
      <NavBar />
      <div className='GlobalContainer'>
        <h3 className='title-shaman'>Découvrez nos Chamans</h3>
        <div className='shaman'>
          <div className='intro'>
            <img className='shamanImage' src='./matthieu.jpg' alt='' />

            <h3>Matthieu</h3>
          </div>

          <p>
            Matthieu est un ancien enseignant passionné dans le domaine du
            développement web. Pendant de nombreuses années, il a partagé son
            savoir et son expertise avec ses élèves, les guidant à travers les
            complexités du codage et de la conception de sites web.{' '}
          </p>
          <Link to='/Shaman/Matthieu'>
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
            >
              En savoir plus
            </Button>
          </Link>
        </div>
        <div className='shaman'>
          <div className='intro'>
            <img src='./vivien.jpg' alt='' className='shamanImage' />

            <h3>Vivien</h3>
          </div>
          <p>
            Vivien est un ancien Data Analyst passionné par l&apos;analyse de
            données et la résolution de problèmes complexes. Pendant des années,
            il a travaillé dans des environnements technologiques, explorant les
            méandres des données pour en extraire des insights précieux. Son
            esprit analytique et sa capacité à interpréter les informations lui
            ont valu une réputation d&apos;expert dans son domaine.{' '}
          </p>
          <Link to='/Shaman/Vivien'>
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
            >
              En savoir plus
            </Button>
          </Link>
        </div>
        <div className='shaman'>
          <div className='intro'>
            <img src='./william.jpg' alt='' className='shamanImage' />

            <h3>William</h3>
          </div>
          <p>
            William est un génie du développement informatique, réputé pour ses
            compétences exceptionnelles dans le domaine de la technologie.
            Pendant des années, il a travaillé dans les coulisses, créant des
            programmes et des applications innovants qui ont repoussé les
            limites de ce qui était considéré comme possible.{' '}
          </p>
          <Link to='/Shaman/William'>
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
