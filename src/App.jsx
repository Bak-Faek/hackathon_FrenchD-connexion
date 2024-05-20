import "./App.css";
import ReactAudioPlayer from "react-audio-player";
// import Pomodoro from './pages/Pomodoro';

// import MainPage from "./components/MainPage";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <>
      
      <main>
        <Outlet />
        <ReactAudioPlayer src="/music.mp3" autoPlay  />
        {/* <Pomodoro/> */}
      </main>
    </>
  );
}

export default App;
