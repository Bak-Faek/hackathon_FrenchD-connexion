import { useState } from 'react';
import Settings from '../components/settings/Settings';
import Timer from '../components/timer/Timer';
import SettingsContext from '../context/SettingsContext';

function Pomodoro() {
  const [showSettings, setShowSettings] = useState(false);
  const [workMinutes, setWorkMinutes] = useState(45);
  const [breakMinutes, setBreakMinutes] = useState(15);
  return (
    <div>
      <SettingsContext.Provider value={{showSettings, setShowSettings,workMinutes, breakMinutes, setWorkMinutes,setBreakMinutes}}>
        {showSettings ? <Settings /> : <Timer />}
      </SettingsContext.Provider>
    </div>
  );
}

export default Pomodoro;
