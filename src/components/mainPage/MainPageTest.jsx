import { Link } from 'react-router-dom';
import { Button } from '@mui/material';
import './MainPageTest.css'


 function MainPageTest() {
  return (
    <div className='mainPage'>
      <div className='title'>
        <div className='img-logo-container'>
          <img src='/public/logo.png' alt='' className='.overlay-image' />
        </div>
        {/* <h2>Bienvenue chez French D-Connexion</h2> */}
        <Link to='/Quiz'>
          <Button className="custom-button"
            sx={{
              height: '150%',
              color: 'black',
              fontWeight: 'bold',
              padding:"10px",
              fontSize: 25,
              '&:hover': {
                border: 'none', // Supprimer la bordure au survol
              },
              '&:focus': {
                outline: 'none', // Supprimer le focus
              },
            }}
           
          >
            Commencer votre aventure
          </Button>
        </Link>
      </div>
      <video className='video' autoPlay loop muted>
        {/* <source src={'../public/lavender.mp4'} type="video/mp4" /> */}
        <source src={'/woman.mp4'} type='video/mp4' />
      </video>
    </div>
  );
 }

 export default MainPageTest
