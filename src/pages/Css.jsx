import React from 'react';
import './Css.css';
import logo from '../assets/logo-code-easy.png';
import { Link } from 'react-router-dom';

function CssPage() {
  return (
    <div className="pagina-css">
            <header className='Css-header'>
                    <h1 className="titulo">CodeEasy</h1>
                    <img src={logo} alt="Logo CodeEasy" className="logo-img" />
            
            </header>

            <main className='css-content'>
            <div className='side-container1'>
              <h1 className='box-title'>CSS</h1>
              <ul className="subtopics-list">
                  <li><Link to="/cssSubPages/Seletores">Selectores</Link></li>
                  <li><Link to="/cssSubPages/flexbox">Flexbox</Link></li>
                  <li><Link to="/cssSubPages/grid">Grid Layout</Link></li>
                  <li><Link to="/cssSubPages/cores">Cores e Temas</Link></li>
                  <li><Link to="/cssSubPages/responsivo">Design Responsivo</Link></li>
                </ul>
            </div>
            
            <div className='mid-content'>
              <h1>O que é CSS e como ele funciona: guia básico para iniciantes</h1>
              <p>CSS (Cascading Style Sheets) é uma linguagem usada para estilizar páginas web, separando o conteúdo (HTML) da aparência visual (cores, fontes, espaçamentos, etc.).</p>
              <p>Antes do CSS, toda a formatação era feita diretamente no HTML, o que deixava o código bagunçado e difícil de manter. O CSS foi criado para resolver isso, tornando a estilização mais eficiente e reutilizável.</p>
              <h2>Vantagens do CSS:</h2>
              <p>- Código HTML mais limpo e fácil de manter.</p>
              <p>- Estilos reaproveitáveis em várias páginas.</p>
              <p>- Mais controle e flexibilidade no design.</p>
              <p>- Páginas mais rápidas e leves.</p>
              <h2>Como o CSS funciona?</h2>
              <p>O CSS funciona por meio de regras de estilo, compostas por:</p>
              <p>- Seletor: define o elemento HTML a ser estilizado.</p>
              <p>- Declarações: definem o estilo (propriedade e valor).</p>
              <h2>Tipos:</h2>
              <p>1. Interno: dentro da tag 'style' no HTML.</p>
              <p>2. Externo: em um arquivo .css separado (melhor prática).</p>
              <p>3. Inline: direto no elemento HTML (menos usado).</p>
            </div>

            <div  className='side-container2'>
              <h1 className='box-title'>CSS</h1>
            </div>
          </main>
      </div>
  );
}

export default CssPage;
