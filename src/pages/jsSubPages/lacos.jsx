import React from 'react';
import { Link } from 'react-router-dom';
import '../Javascript.css';

function LacosJavascript() {
  return (
    <div className="pagina-html">
      <header className='Html-header'>
        <h1 className="titulo">CodeEasy</h1>
      </header>

      <main className='html-content'>
        <div className='side-container1'>
          <h1 className='box-title'>JavaScript - Laços</h1>
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
          <h1>Laços de Repetição em JavaScript</h1>
          <p>Laços de repetição permitem executar um bloco de código várias vezes. Os principais laços em JavaScript são:</p>
          <ul>
            <li><strong>for:</strong> Usado quando sabemos quantas vezes o loop deve rodar.</li>
            <li><strong>while:</strong> Roda enquanto a condição for verdadeira.</li>
            <li><strong>do...while:</strong> Executa ao menos uma vez antes de verificar a condição.</li>
          </ul>

          <h2>Exemplo com for</h2>
          <pre>
            <code>
              for (let i = 0; i &lt; 5; i++) &#123;<br />
              &nbsp;&nbsp;console.log(i);<br />
              &#125;
            </code>
          </pre>
        </div>

        <div className='side-container2'>
          <h1 className='box-title'>JavaScript - Laços</h1>
        </div>
      </main>
    </div>
  );
}

export default LacosJavascript;
