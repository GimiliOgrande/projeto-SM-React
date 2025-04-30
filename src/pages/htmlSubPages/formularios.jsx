import React from 'react';
import { Link } from 'react-router-dom';
import '../Html.css';
import logo from '/Users/ramon/Desktop/PROJETOS FACUL/projeto-SM-React/src/assets/logo-code-easy.png'

function FormulariosHtml() {
  return (
    <div className="pagina-html">
        <header className='Html-header'>
                <h1 className="titulo">CodeEasy</h1>
                <img src={logo} alt="Logo CodeEasy" className="logo-img" />
        </header>

        <main className='html-content'>
            <div className='side-container1'>
                <h1 className='box-title'>HTML - Formulários</h1>
                <ul className='side-list'>
                    <li><Link to="/htmlSubPages/links">Links</Link></li>
                    <li><Link to="/htmlSubPages/estrutura">Estrutura HTML</Link></li>
                    <li><Link to="/htmlSubPages/formularios">Forms</Link></li>
                    <li><Link to="/htmlSubPages/multimidia">Multimidia</Link></li>
                </ul>
            </div>

            <div className='mid-content'>
                <h1>Formulários em HTML</h1>
                <p>Formulários são utilizados para coletar dados dos usuários em páginas web. A tag &lt;form&gt; é usada para criar formulários.</p>
                <h2>Exemplo de Formulário</h2>
                <pre>
                    <code>
                        &lt;form action="/enviar-dados"&gt;<br />
                        &nbsp;&nbsp;&lt;label for="nome"&gt;Nome:&lt;/label&gt;<br />
                        &nbsp;&nbsp;&lt;input type="text" id="nome" name="nome"&gt;<br />
                        &nbsp;&nbsp;&lt;button type="submit"&gt;Enviar&lt;/button&gt;<br />
                        &lt;/form&gt;
                    </code>
                </pre>
                <p>Dentro de um formulário, você pode ter vários tipos de campos, como texto, número, botão de envio e muito mais.</p>
            </div>

            <div className='side-container2'>
                <h1 className='box-title'>HTML</h1>
            </div>
        </main>
    </div>
  );
}

export default FormulariosHtml;
