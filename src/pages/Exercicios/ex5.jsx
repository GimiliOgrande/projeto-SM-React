import React, { useState } from 'react';
import './Exercicio.css'

function Exercicio5() {
  const [mostrarResposta, setMostrarResposta] = useState(false);

  return (
    <div className="exercicio">
      <strong>5. O que é uma função em JavaScript?</strong><br />
      <button onClick={() => setMostrarResposta(!mostrarResposta)}>
        {mostrarResposta ? 'Ocultar resposta' : 'Mostrar resposta'}
      </button>
      {mostrarResposta && (
        <p>
          <em>Resposta:</em> Um bloco de código reutilizável. Ex: <code>{'function nomeFuncao() { ... }'}</code>
        </p>
      )}
    </div>
  );
}

export default Exercicio5;
