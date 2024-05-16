import { Button } from '@mui/material';
import './MainPage.css'

export default function MainPage() {
  return (
    <div className="mainPage">
        <div className='title'>
            <h2>Bienvenue chez French D-Connexion</h2>
            <Button sx={{ height: '8%', color:'green', fontWeight: 'bold' , fontSize: 18}} variant="outlined">Commencer votre aventure</Button>
        </div>
      <video className="video" autoPlay loop muted>
        {/* <source src={'../public/lavender.mp4'} type="video/mp4" /> */}
        <source src={'../public/woman.mp4'} type="video/mp4" />
      </video>
    </div>
  );
}
