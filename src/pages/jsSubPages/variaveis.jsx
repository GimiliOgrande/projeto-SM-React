import React from 'react';
import { Link } from 'react-router-dom';
import '../Javascript.css';

function VariaveisJavascript() {
  return (
    <div className="pagina-html">
        <header className='Html-header'>
                <h1 className="titulo">CodeEasy</h1>
        </header>

        <main className='html-content'>
            <div className='side-container1'>
                <h1 className='box-title'>JavaScript - Variáveis</h1>
                <ul className='side-list'>
                    <li><Link to="/jsSubPages/introducao">Introdução</Link></li>
                    <li><Link to="/jsSubPages/variaveis">Variáveis</Link></li>
                    <li><Link to="/jsSubPages/tiposDados">Tipos de Dados</Link></li>
                    <li><Link to="/jsSubPages/operadores">Operadores</Link></li>
                    <li><Link to="/jsSubPages/condicionais">Condicionais</Link></li>
                    <li><Link to="/jsSubPages/lacos">Laços de Repetição</Link></li>
                    <li><Link to="/jsSubPages/funcoes">Funções</Link></li>
                    <li><Link to="/jsSubPages/eventos">Eventos</Link></li>
                </ul>
            </div>

            <div className='mid-content'>
                <h1>Variáveis em JavaScript</h1>
                <p>Em JavaScript, variáveis são usadas para armazenar dados que podem ser usados e manipulados durante a execução do programa. Existem três maneiras de declarar variáveis:</p>
                <h2>Declaração de Variáveis</h2>
                <p>Você pode declarar variáveis usando `var`, `let` ou `const`:</p>
                <ul>
                    <li><strong>var:</strong> Era usado anteriormente, mas seu uso é desencorajado em favor de `let` e `const`.</li>
                    <li><strong>let:</strong> Usado para declarar variáveis cujo valor pode mudar.</li>
                    <li><strong>const:</strong> Usado para declarar variáveis cujo valor não pode ser alterado após a atribuição.</li>
                </ul>
                <h2>Exemplo de Código</h2>
                <pre>
                    <code>
                        let idade = 25;<br />
                        const nome = "João";<br />
                        var cidade = "São Paulo";<br />
                    </code>
                </pre>
            </div>

            <div className='side-container2'>
                <h1 className='box-title'>JavaScript - Variáveis</h1>
            </div>
        </main>
    </div>
  );
}

export default VariaveisJavascript;
