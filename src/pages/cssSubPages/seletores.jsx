import React from 'react';
import '../Css.css';
import logo from '../../assets/logo-code-easy.png';

function Seletores() {
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
          <h1>Seletores em CSS</h1>
          <p>Seletores determinam quais elementos HTML um conjunto de regras CSS afetará.</p>
          <h2>Tipos Comuns:</h2>
          <p><strong>Seletor de tag:</strong> estiliza todas as tags, ex: `p`, `div`</p>
          <p><strong>Seletor de classe:</strong> usa `.classe`, afeta todos com essa classe</p>
          <p><strong>Seletor de id:</strong> usa `#id`, afeta só um elemento único</p>
          <p><strong>Seletor descendente:</strong> estiliza elementos dentro de outros</p>
        </div>

        <div className='side-container2'>
          <h1 className='box-title'>Navegar</h1>
          <ul className="subtopics-list">
            <li><a href="/cssSubPages/flexbox">Flexbox</a></li>
            <li><a href="/cssSubPages/grid">Grid</a></li>
            <li><a href="/cssSubPages/responsivo">Responsivo</a></li>
          </ul>
        </div>
      </main>
    </div>
  );
}

export default Seletores;
