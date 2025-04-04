import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Lesson1.css';

// questions é um constante/objeto que armazena os dados de todas as nossas perguntas. Com base na questions o prjeto pode ser executado. 
const questions = [
  {
    tipo: "portugues",
    valor: 1,
    enunciado: "Traduza a seguinte frase:",
    conteudo: "Hello",
    respostas: ["olá", "oi", "uepa"]
  },
  {
    tipo: "imagens",
    valor: 2,
    enunciado: "Qual animal é maior?",
    imagem1: "/images/cachorro.jpg",
    imagem2: "/images/gato.jpg",
    respostas: ["cachorro", "dog"]
  },
  {
    tipo: "matematica",
    valor: 1,
    enunciado: "Quanto é 2 + 2?",
    conteudo: "",
    respostas: ["4", "quatro"]
  },
  {
    tipo: "matematica",
    valor: 2,
    enunciado: "Quanto é 5 × 3?",
    conteudo: "",
    respostas: ["15", "quinze"]
  },
  {
    tipo: "geografia",
    valor: 1,
    enunciado: "Qual é a capital do Brasil?",
    conteudo: "",
    respostas: ["brasília", "brasilia"]
  },
  {
    tipo: "geografia",
    valor: 2,
    enunciado: "Quantos continentes existem?",
    conteudo: "",
    respostas: ["7", "sete"]
  }
];

const Lesson1 = () => {
  // 
  const navigate = useNavigate();
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [answer, setAnswer] = useState('');
  const [feedback, setFeedback] = useState({ show: false, message: '', type: '' });
  const [isCompleted, setIsCompleted] = useState(false);

  const currentQuestion = questions[currentQuestionIndex];
  const progress = (currentQuestionIndex / questions.length) * 100;

  const checkAnswer = () => {
    // Essa funcao é chamada quando o usuário responde a uma pergunta. 
    const userAnswer = answer.toLowerCase().trim();
    const isCorrect = currentQuestion.respostas.includes(userAnswer);

    if (isCorrect) { // verificar se a resposta está correta
      setScore(score + 1);
      showFeedback("Correto! 🎉", "correct");
    } else {
      showFeedback(`Incorreto. A resposta correta é: ${currentQuestion.respostas[0]}`, "incorrect");
    }
  };

  const showFeedback = (message, type) => {
    // Positiva ou negativa, essa função é chamada.
    // A ideia é que o usuário saiba se a resposta foi correta ou incorreta assim que responder.
    // Toca um som diferente dependendo se acertou ou errou
    const audio = new Audio(type === 'correct' ? '/sounds/sucesso.mp3' : '/sounds/erro.mp3');
    audio.play();

    setFeedback({ show: true, message, type });
    setAnswer('');

    // set timeout será chamado e exibirá uma mensagem ao usuário. 
    // logo em seguida será chamada a próxima pergunta. 
    setTimeout(() => {
      setFeedback({ show: false, message: '', type: '' });
      nextQuestion();
    }, 1500);
  };

  const nextQuestion = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      setIsCompleted(true);
    }
  };

  const restartQuiz = () => {
    setCurrentQuestionIndex(0);
    setScore(0);
    setIsCompleted(false);
    setAnswer('');
    setFeedback({ show: false, message: '', type: '' });
  };

  return (
    <div className="lesson-container">
      <div className="progress-bar-container">
        <div
          className="progress-bar"
          style={{ width: `${progress}%` }}
        ></div>
      </div>

      <button className="back-button" onClick={() => navigate('/home')}>
        ← Back to Home
      </button>

      {!isCompleted ? (
        <div className="question-container">
          <h2>{currentQuestion.enunciado}</h2>
          {currentQuestion.tipo === "imagens" ? (
            <div className="images-container">
              <img src={currentQuestion.imagem1} alt="Primeira imagem" className="question-image" />
              <img src={currentQuestion.imagem2} alt="Segunda imagem" className="question-image" />
            </div>
          ) : currentQuestion.conteudo && (
            <p className="content">{currentQuestion.conteudo}</p>
          )}
          <input
            type="text"
            value={answer}
            onChange={(e) => setAnswer(e.target.value)}
            placeholder="Sua resposta"
            className="answer-input"
            disabled={feedback.show}
          />
          <button
            onClick={checkAnswer}
            className="check-button"
            disabled={!answer || feedback.show}
          >
            Verificar
          </button>
        </div>
      ) : (
        <div className="completion-message">
          <div className="celebrate">🎉</div>
          <h2>Parabéns!</h2>
          <p>Você completou todas as questões!</p>
          <p>Pontuação: {score}/{questions.length}</p>
          <button onClick={restartQuiz} className="restart-button">
            Repetir Quiz
          </button>
        </div>
      )}

      {feedback.show && (
        <div className={`feedback-overlay ${feedback.type}`}>
          <div className="feedback-message">
            {feedback.message}
          </div>
        </div>
      )}
    </div>
  );
};

export default Lesson1;
