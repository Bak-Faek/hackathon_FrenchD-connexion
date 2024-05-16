import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import './Timer.css';
import PlayButton from '../playButton/PlayButton';
import PauseButton from '../pauseButton/PauseButton';
import SettingsButton from '../settingsButton/SettingsButton';
import { useContext } from 'react';
import SettingsContext from '../../context/SettingsContext';


function Timer() {
  const percentage = 60;
 const red = '#FF3131';
  const green = '#00BF63';
  const settingsInfo = useContext(SettingsContext);
  return (
    <>
      <div className='progressbar-container'>
        <div style={{ width: 200, height: 200 }}>
          <CircularProgressbar
            value={percentage}
            text={`${percentage}%`}
            styles={buildStyles({
              textColor: '#fff',
              pathColor: red,
              tailColor: 'rgba(255,255,255,.2)',
            })}
          />
        </div>
        <div className='button-container'>
          <PlayButton />
          <PauseButton />
        </div>
        <div>
          <SettingsButton onClick={()=> settingsInfo.setShowSettings(true)} />
        </div>
      </div>
    </>
  );
}

export default Timer;
