import React from 'react';
import { Link } from 'react-router-dom';
import '../Html.css';
import logo from '/Users/ramon/Desktop/PROJETOS FACUL/projeto-SM-React/src/assets/logo-code-easy.png'

function MultimediaHtml() {
  return (
    <div className="pagina-html">
        <header className='Html-header'>
                <h1 className="titulo">CodeEasy</h1>
                <img src={logo} alt="Logo CodeEasy" className="logo-img" />
        </header>

        <main className='html-content'>
            <div className='side-container1'>
                <h1 className='box-title'>HTML - Multimídia</h1>
                <ul className='side-list'>
                    <li><Link to="/htmlSubPages/links">Links</Link></li>
                    <li><Link to="/htmlSubPages/estrutura">Estrutura HTML</Link></li>
                    <li><Link to="/htmlSubPages/formularios">Forms</Link></li>
                    <li><Link to="/htmlSubPages/tags">Tags</Link></li>
                </ul>
            </div>

            <div className='mid-content'>
                <h1>Adicionar Multimídia em HTML</h1>
                <p>Você pode incorporar vídeos, imagens e áudios em seu site HTML com as tags apropriadas.</p>
                <h2>Exemplo de Imagem</h2>
                <pre>
                    <code>
                        &lt;img src="imagem.jpg" alt="Descrição da imagem"&gt;
                    </code>
                </pre>
                <h2>Exemplo de Vídeo</h2>
                <pre>
                    <code>
                        &lt;video controls&gt;<br />
                        &nbsp;&nbsp;&lt;source src="video.mp4" type="video/mp4"&gt;<br />
                        &lt;/video&gt;
                    </code>
                </pre>
                <h2>Exemplo de Áudio</h2>
                <pre>
                    <code>
                        &lt;audio controls&gt;<br />
                        &nbsp;&nbsp;&lt;source src="audio.mp3" type="audio/mp3"&gt;<br />
                        &lt;/audio&gt;
                    </code>
                </pre>
            </div>

            <div className='side-container2'>
                <h1 className='box-title'>HTML</h1>
            </div>
        </main>
    </div>
  );
}

export default MultimediaHtml;
