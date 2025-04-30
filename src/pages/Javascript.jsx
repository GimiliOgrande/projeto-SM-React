import React from 'react';
import './Javascript.css';
import logo from '../assets/logo-code-easy.png';
import { Link } from 'react-router-dom';

function JavascriptPage() {
  return (
      <div className="pagina-javascript">
          <header className='Js-header'>
                  <h1 className="titulo">CodeEasy</h1>
                  <img src={logo} alt="Logo CodeEasy" className="logo-img" />
          
          </header>
  
          <main className='Js-content'>
          <div className='side-container1'>
            <h1 className='box-title'>Javascript</h1>
            <ul className='side-list'>
                <li><Link to="/jsSubPages/variaveis">Variáveis</Link></li>
                <li><Link to="/jsSubPages/tiposDados">Tipos de Dados</Link></li>
                <li><Link to="/jsSubPages/operadores">Operadores</Link></li>
                <li><Link to="/jsSubPages/condicionais">Condicionais</Link></li>
                <li><Link to="/jsSubPages/lacos">Laços de Repetição</Link></li>
                <li><Link to="/jsSubPages/funcoes">Funções</Link></li>
                <li><Link to="/jsSubPages/eventos">Eventos</Link></li>
            </ul>
          </div>

          <div className='mid-content'>
            <h1>Guia Essencial de JavaScript</h1>
            <p>JavaScript é uma linguagem de programação leve, interpretada e baseada em objetos, amplamente utilizada para páginas web e também em ambientes como Node.js.</p>
            <p>É uma linguagem dinâmica, multi-paradigma e baseada em protótipos, suportando estilos de programação funcional, orientada a objetos e imperativa.</p>
            <p>JavaScript segue o padrão ECMAScript. Desde 2015, novas versões são lançadas anualmente, com a versão atual referenciando o ECMAScript 2018.</p>
            <p>Não deve ser confundido com Java. Apesar dos nomes semelhantes, são linguagens diferentes com finalidades e sintaxes distintas.</p>
            <h2>Principais Conceitos:</h2>
            <p>- Variáveis, strings, números, vetores.</p>
            <p>- Estruturas de controle como condicionais, laços e funções.</p>
            <p>- Orientação a objetos com protótipos.</p>
            <p>- Funções de primeira classe.</p>
            <p>- Manipulação de eventos.</p>
            <h2>Ferramentas e Recursos:</h2>
            <p>- Firefox Developer Tools, Scratchpad, Debugger.</p>
            <p>- JSFiddle para testar código em tempo real.</p>
            <p>- Comunidades como Stack Overflow.</p>
          </div>

          <div  className='side-container2'>
            <h1 className='box-title'>Javascript </h1>
          </div>
        </main>
      </div>
    );
}

export default JavascriptPage;
 