import React from 'react';
import { Link } from 'react-router-dom';
import '../Javascript.css';

function FuncoesJavascript() {
  return (
    <div className="pagina-html">
      <header className='Html-header'>
        <h1 className="titulo">CodeEasy</h1>
      </header>

      <main className='html-content'>
        <div className='side-container1'>
          <h1 className='box-title'>JavaScript - Funções</h1>
          <ul className='side-list'>
            <li><Link to="/jsSubPages/introducao">Introdução</Link></li>
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
          <h1>Funções em JavaScript</h1>
          <p>Funções são blocos de código reutilizáveis que executam uma tarefa específica. Podem receber parâmetros e retornar valores.</p>

          <h2>Declaração de função</h2>
          <pre>
            <code>
              function saudacao(nome) &#123;<br />
              &nbsp;&nbsp;return "Olá, " + nome;<br />
              &#125;
            </code>
          </pre>

          <h2>Arrow Function</h2>
          <pre>
            <code>
              const soma = (a, b) =&gt; a + b;
            </code>
          </pre>
        </div>

        <div className='side-container2'>
          <h1 className='box-title'>JavaScript - Funções</h1>
        </div>
      </main>
    </div>
  );
}

export default FuncoesJavascript;
