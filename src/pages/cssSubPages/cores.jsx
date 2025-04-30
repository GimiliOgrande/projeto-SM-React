import React from 'react';
import '../Css.css';
import logo from '../../assets/logo-code-easy.png';

function Cores() {
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
          <h1>Cores em CSS</h1>
          <p>O CSS permite usar várias formas de representar cores, como nomes, códigos hexadecimais, RGB e HSL.</p>
          <h2>Formas de representar:</h2>
          <p><strong>Palavras-chave:</strong> red, blue, green...</p>
          <p><strong>Hexadecimal:</strong> #FF5733, #00FF00...</p>
          <p><strong>RGB:</strong> rgb(255, 0, 0)</p>
          <p><strong>RGBA:</strong> rgb + canal alpha (transparência)</p>
          <p><strong>HSL:</strong> hue, saturation, lightness</p>
        </div>

        <div className='side-container2'>
          <h1 className='box-title'>Navegar</h1>
          <ul className="subtopics-list">
            <li><a href="/cssSubPages/selectores">Seletores</a></li>
            <li><a href="/cssSubPages/flexbox">Flexbox</a></li>
            <li><a href="/cssSubPages/grid">Grid</a></li>
            <li><a href="/cssSubPages/responsivo">Responsivo</a></li>
          </ul>
        </div>
      </main>
    </div>
  );
}

export default Cores;
