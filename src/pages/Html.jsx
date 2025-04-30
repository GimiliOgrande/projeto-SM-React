import React from 'react';
import './Html.css';
import logo from '../assets/logo-code-easy.png';
import { Link } from 'react-router-dom';

function HtmlPage() {

  return (
    <div className="pagina-html">
        <header className='Html-header'>
                <h1 className="titulo">CodeEasy</h1>
                <img src={logo} alt="Logo CodeEasy" className="logo-img" />
        
        </header>

        <main className='html-content'>
        <div className='side-container1'>
          <h1 className='box-title'>HTML</h1>
          <ul className="side-list">
            <li><Link to="/htmlSubPages/tags">Tags básicas</Link></li>
            <li><Link to="/htmlSubPages/formularios">Formulários</Link></li>
            <li><Link to="/htmlSubPages/links">Links</Link></li>
            <li><Link to="/htmlSubPages/multimidia">Multimídia</Link></li>
            <li><Link to="/htmlSubPages/estrutura">Estrutura da página</Link></li>
          </ul>
        </div>

        <div className='mid-content'>
          <h1>HTML: Guia Essencial para Iniciantes</h1>
          <p>HTML (Linguagem de Marcação de Hipertexto) é a base da web. Ele define a estrutura do conteúdo da web usando marcações chamadas elementos.</p>
          <p>HTML permite criar páginas web com textos, imagens, vídeos, links, formulários e muito mais. Outras tecnologias como CSS e JavaScript complementam sua funcionalidade.</p>
          <h2>Principais Elementos HTML</h2>
          <p>'html', 'head', 'body', 'title', 'p', 'div', 'span', 'img', 'a', 'ul', 'ol', 'li', 'form', 'input', 'video', 'audio', entre outros.</p>
          <h2>Tags e Sintaxe</h2>
          <p>As tags delimitam elementos e aparecem entre  'e'. Elas podem conter atributos que modificam o comportamento do elemento.</p>
          <h2>Tópicos Importantes</h2>
          <p>- Como estruturar uma página com HTML</p>
          <p>- Como adicionar multimídia</p>
          <p>- Como criar formulários</p>
          <p>- Como utilizar links</p>
          <p>- Diferença entre elementos inline e block-level</p>
        </div>

        <div  className='side-container2'>
          <h1 className='box-title'>HTML</h1>
        </div>
      </main>
    </div>
  );
}

export default HtmlPage;
