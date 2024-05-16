import './App.css';
// import Pomodoro from './pages/Pomodoro';

// import MainPage from "./components/MainPage";
import { Outlet } from "react-router-dom";


function App() {
  return (
    <>
      <main>
        <Outlet />
        {/* <Pomodoro/> */}
      </main>
    </>
  );
}

export default App;
