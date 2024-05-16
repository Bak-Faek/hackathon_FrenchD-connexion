import Question from "./components/quest/questionnaire";
import ButtonValidate from "./components/quest/buttonValidate";
import "./App.css";
import Matthieu from "./components/shaman/Matthieu/Matthieu";
import MainPage from "./components/mainPage/MainPage";

function App() {
  return (
    <>
      {/* <MainPage/> */}
      <Matthieu />

      <div className="quest_butt">
        <Question classeName="quest" />
        <ButtonValidate className="butVal" />
      </div>

      <MainPage />
    </>
  );
}

export default App;
