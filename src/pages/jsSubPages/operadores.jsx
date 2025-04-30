import React from 'react';
import { Link } from 'react-router-dom';
import '../Javascript.css';

function OperadoresJavascript() {
  return (
    <div className="pagina-html">
        <header className='Html-header'>
                <h1 className="titulo">CodeEasy</h1>
        </header>

        <main className='html-content'>
            <div className='side-container1'>
                <h1 className='box-title'>JavaScript - Operadores</h1>
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
                <h1>Operadores em JavaScript</h1>
                <p>Operadores são usados para realizar operações em variáveis e valores. Os tipos de operadores mais comuns são:</p>
                <ul>
                    <li><strong>Operadores Aritméticos:</strong> +, -, *, /, %</li>
                    <li><strong>Operadores de Comparação:</strong> ==, ===, !=, !==, &gt;, &lt;, &gt;=, &lt;=</li>
                    <li><strong>Operadores Lógicos:</strong> && (E), || (OU), ! (NÃO)</li>
                    <li><strong>Operadores de Atribuição:</strong> =, +=, -=, *=, /=</li>
                </ul>
                <h2>Exemplo de Código</h2>
                <pre>
                    <code>
                        {`let x = 10;
                        let y = 20;
                        let soma = x + y;
                        let resultado = (x > y) ? "Maior" : "Menor";`}
                    </code>
                </pre>

            </div>

            <div className='side-container2'>
                <h1 className='box-title'>JavaScript - Operadores</h1>
            </div>
        </main>
    </div>
  );
}

export default OperadoresJavascript;
