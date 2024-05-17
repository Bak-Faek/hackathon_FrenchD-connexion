import { useState } from 'react';

function Quizz() {
  const [answers, setAnswers] = useState({});

  const handleAnswer = (questionId, answer) => {
    setAnswers({ ...answers, [questionId]: answer });
  };

  return (
    <div>
      <h2>Quiz</h2>

      <Question
        questionId={1}
        question="Où souhaites-tu aller pour déconnecter?"
        options={['Dans un château', 'Dans une forêt dense', 'Dans un chalet perché']}
        handleAnswer={handleAnswer}
      />

      <Question
        questionId={2}
        question=" ?"
        options={['Chien', 'Chat', 'Oiseau']}
        handleAnswer={handleAnswer}
      />

      <Question
        questionId={3}
        question="Quel est votre fruit préféré ?"
        options={['Pomme', 'Banane', 'Orange']}
        handleAnswer={handleAnswer}
      />

      <div>
        <h3>Réponses :</h3>
        <ul>
          {Object.keys(answers).map(questionId => (
            <li key={questionId}>
              Question {questionId}: {answers[questionId]}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

function Question({ questionId}, {question}, {options}, {handleAnswer} ) {
  return (
    <div>
      <h3>{question}</h3>
      <ul>
        {options.map((option, index) => (
          <li key={index}>
            <button onClick={() => handleAnswer(questionId, option)}>
              {option}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Quizz;
