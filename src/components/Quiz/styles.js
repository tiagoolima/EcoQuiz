import styled from 'styled-components';

export const Tittle = styled.div`
  margin: 20px auto;
  width: 70%;
  text-align: center;

  @media (max-width: 768px) {
    width: 90%;
  }

  @media (max-width: 480px) {
    width: 95%;
    padding: 0 10px;
  }
`;

export const Questions = styled.h2`
  color: #000000;
  font-size: 2.5rem;
  font-weight: 700;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 2rem;
  }

  @media (max-width: 480px) {
    font-size: 1.5rem;
  }
`;

export const OptionsList = styled.ul`
  padding: 0;
  margin: 0 auto;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Options = styled.li`
  list-style-type: none;
  margin: 10px 0;
  width: 80%; /* Ensure the width is 80% of the parent */
  display: flex;
  justify-content: center;
`;

export const OptionButton = styled.button`
  width: 100%;
  max-width: 400px;
  padding: 15px;
  border: 5px solid #000000;
  border-radius: 45px;
  background-color: #3a50d4;
  color: #ffffff;
  font-size: 1.5rem;
  font-weight: 700;
  text-align: center;
  cursor: pointer;
  transition: background-color 0.3s, border 0.3s;
  margin: 5px 0;

  &:disabled {
    cursor: not-allowed;
  }

  &:hover:not(:disabled) {
    opacity: 0.6;
  }

  &.correct {
    background-color: green;
    border: none;
  }

  &.incorrect {
    background-color: red;
    border: none;
  }

  @media (max-width: 768px) {
    font-size: 1.2rem;
    padding: 12px;
  }

  @media (max-width: 480px) {
    font-size: 1rem;
    padding: 10px;
  }
`;

export const Timer = styled.div`
  font-size: 1.5rem;
  font-weight: 700;
  color: #ff0000;
  text-align: center;
  margin-bottom: 10px;

  @media (max-width: 768px) {
    font-size: 1.2rem;
  }

  @media (max-width: 480px) {
    font-size: 1rem;
  }
`;
