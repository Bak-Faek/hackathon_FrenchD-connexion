import { Link } from 'react-router-dom';
import { Button } from '@mui/material';
import './MainPage.css'

export default function MainPage() {
  return (
    <div className="mainPage">
        <div className='title'>
            <h2>Bienvenue chez French D-Connexion</h2>
            <Link to='/Quiz'>
            <Button sx={{ height: '150%', color:'green', fontWeight: 'bold' , fontSize: 18}} variant="outlined">Commencer votre aventure</Button>
            </Link>
        </div>
      <video className="video" autoPlay loop muted>
        {/* <source src={'../public/lavender.mp4'} type="video/mp4" /> */}
        <source src={'/woman.mp4'} type="video/mp4" />
      </video>
    </div>
  );
}
