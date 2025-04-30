import React from 'react';
import { Link } from 'react-router-dom';
import '../Html.css';
import logo from '/Users/ramon/Desktop/PROJETOS FACUL/projeto-SM-React/src/assets/logo-code-easy.png'

function EstruturaHtml() {
  return (
    <div className="pagina-html">
        <header className='Html-header'>
                <h1 className="titulo">CodeEasy</h1>
                <img src={logo} alt="Logo CodeEasy" className="logo-img" />
        </header>

        <main className='html-content'>
            <div className='side-container1'>
                <h1 className='box-title'>HTML - Estrutura</h1>
                <ul className='side-list'>
                    <li><Link to="/htmlSubPages/links">Links</Link></li>
                    <li><Link to="/htmlSubPages/tags">tags</Link></li>
                    <li><Link to="/htmlSubPages/formularios">Forms</Link></li>
                    <li><Link to="/htmlSubPages/multimidia">Multimidia</Link></li>
                </ul>
            </div>

            <div className='mid-content'>
                <h1>Estrutura Básica do HTML</h1>
                <p>A estrutura básica de um documento HTML consiste em tags principais, como 'html', 'head' e 'body'.</p>
                <h2>Exemplo de estrutura básica:</h2>
                <pre>
                    <code>
                        &lt;!DOCTYPE html&gt;<br />
                        &lt;html&gt;<br />
                        &lt;head&gt;<br />
                        &lt;meta charset="UTF-8"&gt;<br />
                        &lt;title&gt;Página de Exemplo&lt;/title&gt;<br />
                        &lt;/head&gt;<br />
                        &lt;body&gt;<br />
                        &lt;h1&gt;Bem-vindo à nossa página!&lt;/h1&gt;<br />
                        &lt;/body&gt;<br />
                        &lt;/html&gt;
                    </code>
                </pre>
                <p>Este é o formato fundamental de qualquer página HTML, onde você começa com a tag &lt;html&gt;, define os metadados dentro de &lt;head&gt; e o conteúdo visível na página dentro da tag &lt;body&gt;.</p>
            </div>

            <div className='side-container2'>
                <h1 className='box-title'>HTML</h1>
            </div>
        </main>
    </div>
  );
}

export default EstruturaHtml;
