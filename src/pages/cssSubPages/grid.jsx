import React from 'react';
import '../Css.css';
import logo from '../../assets/logo-code-easy.png';

function Grid() {
  return (
    <div className="pagina-html">
      <header className='Css-header'>
        <h1 className="titulo">CodeEasy</h1>
        <img src={logo} alt="Logo CodeEasy" className="logo-img" />
      </header>

      <main className='css-content'>
        <div className='side-container1'>
          <h1 className='box-title'>CSS</h1>
        </div>

        <div className='mid-content'>
          <h1>Grid Layout em CSS</h1>
          <p>CSS Grid é um sistema bidimensional que permite criar layouts com linhas e colunas.</p>
          <h2>Propriedades principais:</h2>
          <p><strong>display: grid</strong> – ativa o grid no container</p>
          <p><strong>grid-template-columns / rows</strong> – define quantas colunas ou linhas</p>
          <p><strong>gap</strong> – define espaço entre linhas e colunas</p>
          <p><strong>grid-column / grid-row</strong> – define onde o item começa e termina</p>
        </div>

        <div className='side-container2'>
          <h1 className='box-title'>Navegar</h1>
          <ul className="subtopics-list">
            <li><a href="/cssSubPages/selectores">Seletores</a></li>
            <li><a href="/cssSubPages/flexbox">Flexbox</a></li>
            <li><a href="/cssSubPages/cores">Cores</a></li>
            <li><a href="/cssSubPages/responsivo">Responsivo</a></li>
          </ul>
        </div>
      </main>
    </div>
  );
}

export default Grid;
