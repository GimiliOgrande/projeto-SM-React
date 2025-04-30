import React from 'react';
import '../Css.css';
import logo from '../../assets/logo-code-easy.png';

function Flexbox() {
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
          <h1>Flexbox em CSS</h1>
          <p>O Flexbox é um modelo de layout unidimensional que organiza elementos em linhas ou colunas.</p>
          <h2>Propriedades principais:</h2>
          <p><strong>display: flex</strong> – ativa o Flexbox no container</p>
          <p><strong>justify-content</strong> – alinha os itens no eixo principal</p>
          <p><strong>align-items</strong> – alinha no eixo perpendicular</p>
          <p><strong>flex-direction</strong> – define direção (row, column)</p>
          <p><strong>gap</strong> – define espaçamento entre os itens</p>
        </div>

        <div className='side-container2'>
          <h1 className='box-title'>Navegar</h1>
          <ul className="subtopics-list">
            <li><a href="/cssSubPages/selectores">Seletores</a></li>
            <li><a href="/cssSubPages/grid">Grid</a></li>
            <li><a href="/cssSubPages/cores">Cores</a></li>
            <li><a href="/cssSubPages/responsivo">Responsivo</a></li>
          </ul>
        </div>
      </main>
    </div>
  );
}

export default Flexbox;
