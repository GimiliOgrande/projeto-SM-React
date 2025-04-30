import React, { useState } from 'react';
import './Exercicio.css'

function Exercicio6() {
  const [mostrarResposta, setMostrarResposta] = useState(false);

  return (
    <div className="exercicio">
      <strong>6. Qual a diferença entre id e class no HTML?</strong><br />
      <button onClick={() => setMostrarResposta(!mostrarResposta)}>
        {mostrarResposta ? 'Ocultar resposta' : 'Mostrar resposta'}
      </button>
      {mostrarResposta && <p><em>Resposta:</em> <code>id</code> é único e <code>class</code> pode ser reutilizada por vários elementos.</p>}
    </div>
  );
}

export default Exercicio6;
