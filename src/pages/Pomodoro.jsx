import { useState } from 'react';
import Settings from '../components/settings/Settings';
import Timer from '../components/timer/Timer';

function Pomodoro() {
  const [showSettings, setShowSettings] = useState(false);

  return <div>{showSettings ? <Settings /> : <Timer />}</div>;
}

export default Pomodoro;
