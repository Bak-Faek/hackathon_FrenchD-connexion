import Question from "../components/quest/questionnaire"
import ButtonValidate from "../components/quest/buttonValidate"
import NavBar from "../components/navBar/NavBar";

function QuizzPage() {
    return (
      <section>
        <NavBar />
        <div className='quest_butt'>
          <Question classeName='quest' />
          <ButtonValidate className='butVal'  />
        </div>
      
      </section>
    );
}

export default QuizzPage;