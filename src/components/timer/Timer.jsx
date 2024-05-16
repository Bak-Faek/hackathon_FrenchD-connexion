import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import './Timer.css';
import PlayButton from '../playButton/PlayButton';
import PauseButton from '../pauseButton/PauseButton';
import SettingsButton from '../settingsButton/SettingsButton';
import { useContext, useState, useEffect, useRef } from 'react';
import SettingsContext from '../../context/SettingsContext';

const red = '#C38370';
const green = '#00BF63';


function Timer() {
  const settingsInfo = useContext(SettingsContext);

  const [isPaused, setIsPaused] = useState(true);
  // const [mode, setMode] = useState('work'); // work/break/null
  const [secondsLeft, setSecondsLeft] = useState(0);

  const secondsLeftRef = useRef(secondsLeft);
  const isPausedRef = useRef(isPaused);
  // const modeRef = useRef(mode);
  const modeRef = useRef(settingsInfo.mode);
  

  function tick() {
    secondsLeftRef.current--;
    setSecondsLeft(secondsLeftRef.current);
  }


  const audioRef = useRef(null);
  

const playAudio = () => {
  audioRef.current
    .play()
    .catch((error) => console.error('Erreur de lecture audio : ', error));
};

const pauseAudio = () => {
  audioRef.current.pause();
};

if (settingsInfo.mode === 'break') {
  playAudio();
}

if (settingsInfo.mode === 'break' && isPausedRef.current) {
  pauseAudio();
}


  useEffect(() => {
    function switchMode() {
      const nextMode = modeRef.current === 'work' ? 'break' : 'work';
      const nextSeconds =
        (nextMode === 'work'
          ? settingsInfo.workMinutes
          : settingsInfo.breakMinutes) * 60;

      // setMode(nextMode);
      settingsInfo.mode=nextMode;
      modeRef.current = nextMode;
     

      setSecondsLeft(nextSeconds);
      secondsLeftRef.current = nextSeconds;

      
    }

    secondsLeftRef.current = settingsInfo.workMinutes * 60;
    setSecondsLeft(secondsLeftRef.current);

    const interval = setInterval(() => {
      if (isPausedRef.current) {
       
        return;
      }
      if (secondsLeftRef.current === 0) {
         
        return switchMode();
      }

      tick();
    }, 100);

    return () => 
      clearInterval(interval);
    
     
  }, [settingsInfo]);

  // const totalSeconds =
  //   mode === 'work'
  //     ? settingsInfo.workMinutes * 60
  //     : settingsInfo.breakMinutes * 60;
    const totalSeconds =
      settingsInfo.mode === 'work'
        ? settingsInfo.workMinutes * 60
        : settingsInfo.breakMinutes * 60;
  const percentage = Math.round((secondsLeft / totalSeconds) * 100);

  const minutes = Math.floor(secondsLeft / 60);
  let seconds = secondsLeft % 60;
  if (seconds < 10) seconds = '0' + seconds;

  return (
    <>
      <audio ref={audioRef} src='/public/Astrance.mp3' />
      <div className='progressbar-container'>
        <div style={{ width: 200, height: 200 }}>
          <CircularProgressbar
            counterClockwise={true}
            value={percentage}
            text={minutes + ':' + seconds}
            styles={buildStyles({
              textColor: 'black',
              pathColor: settingsInfo.mode === 'work' ? red : green,
              tailColor: 'rgba(255,255,255,.2)',
            })}
          />
        </div>
        <div className='button-container'>
          {isPaused ? (
            <PlayButton
              onClick={() => {
                setIsPaused(false);
                isPausedRef.current = false;
              }}
            />
          ) : (
            <PauseButton
              onClick={() => {
                setIsPaused(true);
                isPausedRef.current = true;
              }}
            />
          )}
        </div>
        <div>
          <SettingsButton onClick={() => settingsInfo.setShowSettings(true)} />
        </div>
      </div>
    </>
  );
}

export default Timer;
