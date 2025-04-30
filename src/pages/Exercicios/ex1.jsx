import React, { useState } from 'react';
import './Exercicio.css'

function Exercicio1() {
  const [mostrarResposta, setMostrarResposta] = useState(false);

  return (
    <div className="exercicio">
      <strong>1. O que significa a sigla HTML?</strong><br />
      <button onClick={() => setMostrarResposta(!mostrarResposta)}>
        {mostrarResposta ? 'Ocultar resposta' : 'Mostrar resposta'}
      </button>
      {mostrarResposta && <p><em>Resposta:</em> HTML significa HyperText Markup Language.</p>}
    </div>
  );
}

export default Exercicio1;
