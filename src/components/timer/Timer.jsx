import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import './Timer.css';
import PlayButton from '../playButton/PlayButton';
import PauseButton from '../pauseButton/PauseButton';
import SettingsButton from '../settingsButton/SettingsButton';
import { useContext, useState, useEffect, useRef } from 'react';
import SettingsContext from '../../context/SettingsContext';


function Timer() {

 const red = '#FF3131';
  const green = '#00BF63';

  const [isPaused, setIsPaused] = useState(true);
  const [secondsLeft, setSecondsLeft] = useState(0);
  const [mode, setMode] = useState('work');//work,
  const settingsInfo = useContext(SettingsContext);
  const secondsLeftRef = useRef(secondsLeft);
  const isPausedRef = useRef(isPaused);
  const modeRef = useRef(mode);

  function initTimer() {
    setSecondsLeft(settingsInfo.workMinutes * 60)
  }

  function switchMode() {
    const nextMode = modeRef.current === 'work' ? 'work' : 'break';
    setMode(nextMode);
    modeRef.current = nextMode;
     const nextSeconds = nextMode === "work" ? settingsInfo.workMinutes * 60 : settingsInfo.breakMinutes * 60;
    setSecondsLeft(nextSeconds);
    secondsLeftRef.current = nextSeconds;
    
  }

  function tick() {
    secondsLeftRef.current--;
    
    setSecondsLeft(secondsLeftRef.current);
  }

  useEffect(() => {
    initTimer();

     const interval = setInterval(() => {
      if (isPausedRef.current) {
        return;
      }
      if (secondsLeftRef.current === 0) {
       return  switchMode();
      }

      tick();

     }, 1000);
    
    return ()=>clearInterval(interval);
  }, [settingsInfo])

  const totalSeconds = mode === "work" ? settingsInfo.workMinutes * 60 : settingsInfo.breakMinutes * 60;
  const minutes = Math.floor(secondsLeft / 60);

  const percentage = Math.round(secondsLeft / totalSeconds) * 100;
  let seconds = secondsLeft % 60;
  if (seconds < 10) seconds = '0' + seconds;
  
  return (
    <>
      <div className='progressbar-container'>
        <div style={{ width: 200, height: 200 }}>
          <CircularProgressbar
            value={percentage}
            text={minutes + ':' + seconds}
            styles={buildStyles({
              textColor: '#fff',
              pathColor: mode === 'work' ? red : green,
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
