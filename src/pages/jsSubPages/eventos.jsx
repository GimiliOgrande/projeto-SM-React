import React from 'react';
import { Link } from 'react-router-dom';
import '../Javascript.css';

function EventosJavascript() {
  return (
    <div className="pagina-html">
      <header className='Html-header'>
        <h1 className="titulo">CodeEasy</h1>
      </header>

      <main className='html-content'>
        <div className='side-container1'>
          <h1 className='box-title'>JavaScript - Eventos</h1>
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
          <h1>Eventos em JavaScript</h1>
          <p>Eventos permitem que páginas web respondam a ações do usuário, como cliques, digitação e movimentação do mouse.</p>

          <h2>Exemplo com addEventListener</h2>
          <pre>
            <code>
              const botao = document.getElementById("meuBotao");<br />
              botao.addEventListener("click", () =&gt; &#123;<br />
              &nbsp;&nbsp;alert("Botão clicado!");<br />
              &#125;);
            </code>
          </pre>

          <h2>Eventos comuns:</h2>
          <ul>
            <li><strong>click</strong>: Clique do mouse</li>
            <li><strong>mouseover</strong>: Quando o mouse passa por cima</li>
            <li><strong>keydown</strong>: Quando uma tecla é pressionada</li>
            <li><strong>submit</strong>: Envio de formulário</li>
          </ul>
        </div>

        <div className='side-container2'>
          <h1 className='box-title'>JavaScript - Eventos</h1>
        </div>
      </main>
    </div>
  );
}

export default EventosJavascript;
