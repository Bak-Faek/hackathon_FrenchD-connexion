import Question from "../components/quest/questionnaire"
import ButtonValidate from "../components/quest/buttonValidate"

function QuizzPage() {
    return (
        <div className="quest_butt">
        <Question classeName="quest"/>
          <ButtonValidate className="butVal" />
        </div>
    );
}

export default QuizzPage;