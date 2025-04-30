import React from 'react';
import { Link } from 'react-router-dom';
import '../Html.css';
import logo from '/Users/ramon/Desktop/PROJETOS FACUL/projeto-SM-React/src/assets/logo-code-easy.png'

function TagsBasicas() {
  return (
    <div className="pagina-html">
        <header className='Html-header'>
                <h1 className="titulo">CodeEasy</h1>
                <img src={logo} alt="Logo CodeEasy" className="logo-img" />
        </header>

        <main className='html-content'>
            <div className='side-container1'>
                <h1 className='box-title'>HTML - Tags</h1>
                <ul className='side-list'>
                    <li><Link to="/htmlSubPages/links">Links</Link></li>
                    <li><Link to="/htmlSubPages/estrutura">Estrutura HTML</Link></li>
                    <li><Link to="/htmlSubPages/formularios">Forms</Link></li>
                    <li><Link to="/htmlSubPages/multimidia">Multimidia</Link></li>
                </ul>
            </div>

            <div className='mid-content'>
                <h1>Tags HTML</h1>
                <p>Em HTML, as tags são usadas para estruturar o conteúdo da página web. Elas definem diferentes tipos de conteúdo, como textos, links, imagens, listas, etc.</p>
                <h2>Exemplo de Tags</h2>
                <pre>
                    <code>
                        &lt;p&gt;Este é um parágrafo.&lt;/p&gt;<br />
                        &lt;h1&gt;Este é um título.&lt;/h1&gt;<br />
                        &lt;a href="https://www.exemplo.com"&gt;Link para Exemplo&lt;/a&gt;
                    </code>
                </pre>
                <p>Existem vários tipos de tags, e cada uma tem uma função específica. Por exemplo, as tags &lt;p&gt; são usadas para parágrafos, &lt;h1&gt; para títulos, e &lt;a&gt; para links.</p>
            </div>

            <div className='side-container2'>
                <h1 className='box-title'>HTML</h1>
            </div>
        </main>
    </div>
  );
}

export default TagsBasicas;
