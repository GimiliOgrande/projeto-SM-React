import React from 'react';
import { Navigate, useNavigate, Link } from 'react-router-dom';
import logo from '../assets/logo-code-easy.png';
import imagemHome from '../assets/imagem-home.jpg'

function Home() {
  const navigate = useNavigate();

  return (
    <div className="home-container">
      <header className='home-header'>
        <h1 className="titulo">CodeEasy</h1>
        <img src={logo} alt="Logo CodeEasy" className="logo-img" />

      </header>
      
      <div className='home-buttons'>
        <button className='options-inicial' onClick={() => navigate('/Html')}>HTML</button>
        <button className='options-inicial' onClick={() => navigate('/Css')}>CSS</button>
        <button className='options-inicial'onClick={() => navigate('/Javascript')}>JavaScript</button>
      </div>

      <main className='home-content'>
        <div className='exercicio'>
          <h1 className='box-title'>Exercícios:</h1>
          <ul className='side-list'>
                <li><Link to="/Exercicios/ex1">Exercício 1</Link></li>
                <li><Link to="/Exercicios/ex2">Exercício 2</Link></li>
                <li><Link to="/Exercicios/ex3">Exercício 3</Link></li>
                <li><Link to="/Exercicios/ex4">Exercício 4</Link></li>
                <li><Link to="/Exercicios/ex5">Exercício 5</Link></li>
                <li><Link to="/Exercicios/ex6">Exercício 6</Link></li>
                <li><Link to="/Exercicios/ex7">Exercício 7</Link></li>
          </ul>
        </div>

        <div className='mid-content'>
          <h1>Programação Web</h1>
          <p>Programação web é a prática de criar e desenvolver websites e aplicações acessíveis pela internet. Ela envolve o uso de linguagens como HTML para estruturar conteúdo, CSS para estilizar e JavaScript para adicionar interatividade. Com esses conhecimentos, você pode construir desde páginas simples até sistemas complexos, tornando a web mais dinâmica e funcional para os usuários.</p>
          <img src={imagemHome} alt="img home" className='imgHome'/>
        </div>

        <div  className='links-necessarios'>
          <h1 className='box-title'>Links necessários:</h1>
          <ul className="links-list">
            <li><a href="https://developer.mozilla.org/pt-BR/docs/Web/HTML" target="_blank" rel="noopener noreferrer">Documentação HTML - MDN</a></li>
            <li><a href="https://developer.mozilla.org/pt-BR/docs/Web/CSS" target="_blank" rel="noopener noreferrer">Documentação CSS - MDN</a></li>
            <li><a href="https://developer.mozilla.org/pt-BR/docs/Web/JavaScript" target="_blank" rel="noopener noreferrer">Documentação JavaScript - MDN</a></li>
            <li><a href="https://nodejs.org/en/" target="_blank" rel="noopener noreferrer">Download Node.js</a></li>
            <li><a href="https://www.visualstudio.com/" target="_blank" rel="noopener noreferrer">Download Visual Studio Code</a></li>
            <li><a href="https://github.com/" target="_blank" rel="noopener noreferrer">GitHub - Repositórios de código</a></li>
            <li><a href="https://www.freecodecamp.org/" target="_blank" rel="noopener noreferrer">FreeCodeCamp - Cursos gratuitos</a></li>
            <li><a href="https://www.w3schools.com/" target="_blank" rel="noopener noreferrer">W3Schools - Tutoriais de HTML, CSS e JS</a></li>
          </ul>
        </div>
      </main>
      
    </div>
  );
}

export default Home;
