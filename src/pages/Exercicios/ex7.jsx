import React, { useState } from 'react';
import './Exercicio.css'
function Exercicio7() {
  const [mostrarResposta, setMostrarResposta] = useState(false);

  return (
    <div className="exercicio">
      <strong>7. Como adicionar uma imagem em HTML?</strong><br />
      <button onClick={() => setMostrarResposta(!mostrarResposta)}>
        {mostrarResposta ? 'Ocultar resposta' : 'Mostrar resposta'}
      </button>
      {mostrarResposta && (
        <p>
          <em>Resposta:</em> Usando <code>{'<img src="caminho" alt="descrição" />'}</code>.
        </p>
      )}
    </div>
  );
}

export default Exercicio7;
