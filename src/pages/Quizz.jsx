import Question from "../components/quest/questionnaire"
import NavBar from "../components/navBar/NavBar";

function QuizzPage() {
    return (
      <section>
        <NavBar />
        <div className='quest_butt'>
          <Question classeName='quest' />
        </div>
      
      </section>
    );
}

export default QuizzPage;