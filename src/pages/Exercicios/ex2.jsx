import React, { useState } from 'react';
import './Exercicio.css'

function Exercicio2() {
  const [mostrarResposta, setMostrarResposta] = useState(false);

  return (
    <div className="exercicio">
      <strong>2. Para que serve o CSS em uma página web?</strong><br />
      <button onClick={() => setMostrarResposta(!mostrarResposta)}>
        {mostrarResposta ? 'Ocultar resposta' : 'Mostrar resposta'}
      </button>
      {mostrarResposta && <p><em>Resposta:</em> Para estilizar elementos HTML com cores, tamanhos, espaçamentos etc.</p>}
    </div>
  );
}

export default Exercicio2;
