import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Pages/home';
import HtmlPage from './pages/Html.jsx';
import CssPage from './pages/Css';
import JavascriptPage from './pages/Javascript';
import Seletores from './pages/cssSubPages/seletores'
import Flexbox from './pages/cssSubPages/flexbox'
import Grid from './pages/cssSubPages/grid'
import Cores from './pages/cssSubPages/cores'
import Responsivo from './pages/cssSubPages/responsivo'
import Multimidia from './pages/htmlSubPages/multimidia.jsx';
import Links from './pages/htmlSubPages/links.jsx';
import Estrutura from './pages/htmlSubPages/estrutura.jsx';
import TagsBasicas from './pages/htmlSubPages/tags.jsx';
import Formularios from './pages/htmlSubPages/formularios.jsx';
import EventosJavascript from './pages/jsSubPages/eventos.jsx'
import FuncoesJavascript from './pages/jsSubPages/funcoes.jsx';
import LacosJavascript from './pages/jsSubPages/lacos.jsx';
import CondicionaisJavascript from './pages/jsSubPages/condicionais.jsx';
import OperadoresJavascript from './pages/jsSubPages/operadores.jsx';
import TiposDadosJavascript from './pages/jsSubPages/tiposDados.jsx';
import VariaveisJavascript from './pages/jsSubPages/variaveis.jsx';
import Ex1 from './pages/Exercicios/ex1.jsx';
import Ex2 from './pages/Exercicios/ex2.jsx';
import Ex3 from './pages/Exercicios/ex3.jsx';
import Ex4 from './pages/Exercicios/ex4.jsx';
import Ex5 from './pages/Exercicios/ex5.jsx';
import Ex6 from './pages/Exercicios/ex6.jsx';
import Ex7 from './pages/Exercicios/ex7.jsx';

function App(){
    return(
      <Router>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Html" element={<HtmlPage/>}/>
            <Route path="/Css" element={<CssPage/>}/>
            <Route path="/Javascript" element={<JavascriptPage/>}/>
            <Route path="/cssSubPages/seletores" element={<Seletores/>}/>
            <Route path="/cssSubPages/grid" element={<Grid/>}/>
            <Route path="/cssSubPages/cores" element={<Cores/>}/>
            <Route path="/cssSubPages/flexbox" element={<Flexbox/>}/>
            <Route path="/cssSubPages/responsivo" element={<Responsivo/>}/>
            <Route path="/htmlSubPages/multimidia" element={<Multimidia/>}/>
            <Route path="/htmlSubPages/links" element={<Links/>}/>
            <Route path="/htmlSubPages/estrutura" element={<Estrutura/>}/>
            <Route path="/htmlSubPages/tags" element={<TagsBasicas/>}/>
            <Route path="/htmlSubPages/formularios" element={<Formularios/>}/>
            <Route path="/jsSubPages/eventos" element={<EventosJavascript/>}/>
            <Route path="/jsSubPages/lacos" element={<LacosJavascript/>}/>
            <Route path="/jsSubPages/condicionais" element={<CondicionaisJavascript/>}/>
            <Route path="/jsSubPages/operadores" element={<OperadoresJavascript/>}/>
            <Route path="/jsSubPages/tiposDados" element={<TiposDadosJavascript/>}/>
            <Route path="/jsSubPages/variaveis" element={<VariaveisJavascript/>}/>
            <Route path="/jsSubPages/funcoes" element={<FuncoesJavascript/>}/>
            <Route path="Exercicios/ex1" element={<Ex1/>}/>
            <Route path="Exercicios/ex2" element={<Ex2/>}/>
            <Route path="Exercicios/ex3" element={<Ex3/>}/>
            <Route path="Exercicios/ex4" element={<Ex4/>}/>
            <Route path="Exercicios/ex5" element={<Ex5/>}/>
            <Route path="Exercicios/ex6" element={<Ex6/>}/>
            <Route path="Exercicios/ex7" element={<Ex7/>}/>

        </Routes> 
      </Router>
      
    );
}

export default App;
