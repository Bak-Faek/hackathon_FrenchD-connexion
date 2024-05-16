import Question from "./components/quest/questionnaire";
import ButtonValidate from "./components/quest/buttonValidate";
import "./App.css";
// import MainPage from "./components/MainPage";
import DestinationsPage from "./components/quest/DestinationsPage";


function App() {
  return (
    <>
      <div className="quest_butt">
        <Question classeName="quest" />
        <ButtonValidate className="butVal" />
      </div>

      {/* <MainPage /> */}
      <questionnaire />
      <DestinationsPage />
      
      
  </>
  );
}

export default App;
