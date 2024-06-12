import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Button from './components/Button';
import Quiz from './components/Quiz/index.js';
import Terra from './assets/gif.gif';
import Logo from './assets/logo.png';
import { Tela, Container, Imagem, ImagemLogo } from './styles';

function App() {
  const navigateToQuiz = () => {
    window.location.href = '/quiz';
  };

  return (
    <Router>
      <Tela>
        <Routes>
          <Route path="/" element={
            <>
              <Container>
                <Imagem src={Terra} />
              </Container>
              <Button label="PLAY" onClick={navigateToQuiz} />
              <ImagemLogo src={Logo} />
            </>
          } />
          <Route path="/quiz" element={<Quiz />} />
        </Routes>
      </Tela>
    </Router>
  );
}

export default App;
