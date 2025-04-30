import React from 'react';
import { Link } from 'react-router-dom';
import '../Javascript.css';

function TiposDadosJavascript() {
  return (
    <div className="pagina-html">
        <header className='Html-header'>
                <h1 className="titulo">CodeEasy</h1>
        </header>

        <main className='html-content'>
            <div className='side-container1'>
                <h1 className='box-title'>JavaScript - Tipos de Dados</h1>
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
                <h1>Tipos de Dados em JavaScript</h1>
                <p>JavaScript tem vários tipos de dados. Os tipos mais comuns são:</p>
                <ul>
                    <li><strong>Number:</strong> Para números (inteiros e decimais).</li>
                    <li><strong>String:</strong> Para textos.</li>
                    <li><strong>Boolean:</strong> Para valores verdadeiros ou falsos.</li>
                    <li><strong>Object:</strong> Para coleções de dados.</li>
                    <li><strong>Array:</strong> Para listas ordenadas de dados.</li>
                    <li><strong>Null:</strong> Representa a ausência de valor.</li>
                    <li><strong>Undefined:</strong> Para variáveis não inicializadas.</li>
                </ul>
                <h2>Exemplo de Código</h2>
                <pre>
                    <code>
                        let numero = 10;<br />
                        let nome = "Maria";<br />
                        let ativo = true;<br />
                        {`let pessoa = { nome: "João", idade: 30 };`}
                        </code>
                </pre>
            </div>

            <div className='side-container2'>
                <h1 className='box-title'>JavaScript - Tipos de Dados</h1>
            </div>
        </main>
    </div>
  );
}

export default TiposDadosJavascript;
