import React from 'react';
import { Link } from 'react-router-dom';
import '../Javascript.css';

function CondicionaisJavascript() {
  return (
    <div className="pagina-html">
        <header className='Html-header'>
                <h1 className="titulo">CodeEasy</h1>
        </header>

        <main className='html-content'>
            <div className='side-container1'>
                <h1 className='box-title'>JavaScript - Condicionais</h1>
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
        <h1>Condicionais em JavaScript</h1>
        <p>Condicionais permitem executar diferentes blocos de código dependendo do resultado de uma condição.</p>
        <h2>Exemplo de if/else</h2>
        <pre>
            <code>
                let idade = 18;<br />
                if (idade &gt;= 18) &#123;<br />
                &nbsp;&nbsp;console.log("Maior de idade");<br />
                &#125; else &#123;<br />
                &nbsp;&nbsp;console.log("Menor de idade");<br />
                &#125;
            </code>
        </pre>
        <h2>Exemplo de switch</h2>
        <pre>
            <code>
                let cor = "vermelho";<br />
                switch(cor) &#123;<br />
                &nbsp;&nbsp;case "azul": console.log("Cor azul"); break;<br />
                &nbsp;&nbsp;case "vermelho": console.log("Cor vermelha"); break;<br />
                &nbsp;&nbsp;default: console.log("Outra cor");<br />
                &#125;
            </code>
        </pre>
    </div>

    <div className='side-container2'>
        <h1 className='box-title'>JavaScript - Condicionais</h1>
    </div>
</main>
</div>
); }

export default CondicionaisJavascript;