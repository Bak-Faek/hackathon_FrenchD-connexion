import Question from "./components/quest/questionnaire";
import ButtonValidate from "./components/quest/buttonValidate";
import "./App.css";

function App() {
  return  <>
            <div className="quest_butt">
            <Question classeName="quest"/>
              <ButtonValidate className="butVal" />
            </div>
              
          </>;
}

export default App;
