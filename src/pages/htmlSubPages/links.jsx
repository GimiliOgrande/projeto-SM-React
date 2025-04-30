import React from 'react';
import { Link } from 'react-router-dom';
import '../Html.css';
import logo from '/Users/ramon/Desktop/PROJETOS FACUL/projeto-SM-React/src/assets/logo-code-easy.png'

function LinksHtml() {
  return (
    <div className="pagina-html">
        <header className='Html-header'>
                <h1 className="titulo">CodeEasy</h1>
                <img src={logo} alt="Logo CodeEasy" className="logo-img" />
        </header>

        <main className='html-content'>
            <div className='side-container1'>
                <h1 className='box-title'>HTML - Links</h1>
                <ul className='side-list'>
                    <li><Link to="/htmlSubPages/tags">Tags</Link></li>
                    <li><Link to="/htmlSubPages/estrutura">Estrutura HTML</Link></li>
                    <li><Link to="/htmlSubPages/formularios">Forms</Link></li>
                    <li><Link to="/htmlSubPages/multimidia">Multimidia</Link></li>
                </ul>
            </div>

            <div className='mid-content'>
                <h1>Links em HTML</h1>
                <p>O elemento &lt;a&gt; em HTML é utilizado para criar links entre páginas, seções ou recursos na web. Links podem ser internos (para a mesma página) ou externos (para outras páginas da web).</p>
                <h2>Exemplo de Link</h2>
                <pre>
                    <code>
                        &lt;a href="https://www.exemplo.com"&gt;Clique aqui&lt;/a&gt;
                    </code>
                </pre>
                <p>O atributo `href` define o destino do link. Você pode usar links para navegar entre páginas HTML ou para se conectar a recursos externos, como imagens e vídeos.</p>
            </div>

            <div className='side-container2'>
                <h1 className='box-title'>HTML</h1>
            </div>
        </main>
    </div>
  );
}

export default LinksHtml;
