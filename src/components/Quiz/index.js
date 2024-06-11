import React, { useState, useEffect } from 'react';
import { Tittle, Questions, Options, OptionButton, Timer, OptionsList } from './styles';

const Quiz = () => {
  const [questions, setQuestions] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [feedback, setFeedback] = useState(null); 
  const [timer, setTimer] = useState(60); 

  useEffect(() => {
    fetch('/questions.json')
      .then(response => response.json())
      .then(data => {
        console.log("Perguntas carregadas:", data);
        setQuestions(data);
      })
      .catch(error => console.error('Erro ao buscar perguntas:', error));
  }, []);

  useEffect(() => {
    if (timer > 0) {
      const countdown = setInterval(() => {
        setTimer(prevTimer => prevTimer - 1);
      }, 1000);
      return () => clearInterval(countdown);
    } else {
      handleNextQuestion();
    }
  }, [timer]);

  const handleAnswerClick = (option) => {
    const currentQuestion = questions[currentQuestionIndex];
    console.log("Opção selecionada:", option);
    console.log("Resposta correta:", currentQuestion.resposta_correta);

    if (option === currentQuestion.resposta_correta) {
      setFeedback('correct');
      setSelectedOption(option);
      setTimeout(() => {
        setFeedback(null);
        setSelectedOption(null);
        handleNextQuestion();
      }, 1000); 
    } else {
      setFeedback('incorrect');
      setSelectedOption(option);
      setTimeout(() => {
        setFeedback(null);
        setSelectedOption(null);
        setTimeout(() => {
          setFeedback('correct');
          setSelectedOption(currentQuestion.resposta_correta);
          setTimeout(() => {
            setFeedback(null);
            setSelectedOption(null);
            handleNextQuestion();
          }, 1000);
        }, 1000);
      }, 1000);
    }
  };

  const handleNextQuestion = () => {
    setTimer(60);
    setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
  };

  if (questions.length === 0) {
    return <div>Carregando...</div>;
  }

  const currentQuestion = questions[currentQuestionIndex];

  if (!currentQuestion) {
    return <div>Quiz completo!</div>;
  }

  return (
    <Tittle>
      <Questions>{currentQuestion.pergunta}</Questions>
      <Timer>Tempo restante: {timer} segundos</Timer>
      <OptionsList>
        {currentQuestion.opcoes.map((opcao, index) => (
          <Options key={index}>
            <OptionButton
              onClick={() => handleAnswerClick(opcao)}
              disabled={feedback !== null && selectedOption !== opcao}
              className={selectedOption === opcao ? feedback : ''}
            >
              {opcao}
            </OptionButton>
          </Options>
        ))}
      </OptionsList>
    </Tittle>
  );
};

export default Quiz;
