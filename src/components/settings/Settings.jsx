
import './Settings.css';
import ReactSlider from 'react-slider';
import './Slider.css';
import SettingsContext from '../../context/SettingsContext';
import { useContext } from 'react';
import BackButton from '../backButton/BackButton';



function Settings() {
  const settingsInfo = useContext(SettingsContext);
  return (
    <div className='settings'>
      <label htmlFor=''>Temps de travail : {settingsInfo.workMinutes}:00</label>
      <ReactSlider
        className='slider'
        thumbClassName={'thumb'}
        trackClassName={'track'}
        value={settingsInfo.workMinutes}
        onChange={(newValue) => settingsInfo.setWorkMinutes(newValue)}
        min={1}
        max={120}
      />

      <label htmlFor=''>
        Minutes de déconnection : {settingsInfo.breakMinutes}:00
      </label>
      <ReactSlider
        className='slider green'
        thumbClassName='thumb green'
        trackClassName={'track'}
        value={settingsInfo.breakMinutes}
        onChange={(newValue) => settingsInfo.setBreakMinutes(newValue)}
        min={1}
        max={120}
      />
      <div className='backbutton-container'>
        <BackButton onClick={()=> settingsInfo.setShowSettings(false) } />
      </div>
    </div>
  );
}

export default Settings
