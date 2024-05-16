import Question from "./components/quest/questionnaire";
import ButtonValidate from "./components/quest/buttonValidate";
import "./App.css";
// import MainPage from "./components/MainPage";


function App() {
  return (
    <>
      <div className="quest_butt">
        <Question classeName="quest" />
        <ButtonValidate className="butVal" />
      </div>

      {/* <MainPage /> */}
      <questionnaire />
      
      
  </>
  );
}

export default App;
