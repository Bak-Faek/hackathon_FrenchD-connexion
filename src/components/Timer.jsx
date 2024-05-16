import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import './Timer.css'
import PlayButton from './PlayButton';
import PauseButton from './PauseButton';
import SettingsButton from './SettingsButton';


function Timer() {
  const percentage = 60;

  const red ='#FF3131';
  const green = '#00BF63';
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
          <SettingsButton/>
        </div>
      </div>
    </>
  );
}

export default Timer;
