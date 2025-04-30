import React from 'react';
import '../Css.css';
import logo from '../../assets/logo-code-easy.png';

function Responsivo() {
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
          <h1>Design Responsivo</h1>
          <p>Design responsivo é a prática de criar páginas web que se adaptam a diferentes tamanhos de tela.</p>
          <h2>Técnicas principais:</h2>
          <p><strong>Media Queries:</strong> alteram estilos conforme a largura da tela</p>
          <p><strong>Unidades relativas:</strong> %, em, rem, vw, vh</p>
          <p><strong>Flexbox e Grid:</strong> facilitam o layout adaptável</p>
          <p><strong>Imagens fluidas:</strong> que se ajustam ao tamanho do container</p>
        </div>

        <div className='side-container2'>
          <h1 className='box-title'>Navegar</h1>
          <ul className="subtopics-list">
            <li><a href="/cssSubPages/selectores">Seletores</a></li>
            <li><a href="/cssSubPages/flexbox">Flexbox</a></li>
            <li><a href="/cssSubPages/grid">Grid</a></li>
            <li><a href="/cssSubPages/cores">Cores</a></li>
          </ul>
        </div>
      </main>
    </div>
  );
}

export default Responsivo;
