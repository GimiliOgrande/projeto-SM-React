import React, { useState } from 'react';
import './Exercicio.css'

function Exercicio3() {
  const [mostrarResposta, setMostrarResposta] = useState(false);

  return (
    <div className="exercicio">
      <strong>3. Como declarar uma variável em JavaScript?</strong><br />
      <button onClick={() => setMostrarResposta(!mostrarResposta)}>
        {mostrarResposta ? 'Ocultar resposta' : 'Mostrar resposta'}
      </button>
      {mostrarResposta && <p><em>Resposta:</em> Usando <code>let</code>, <code>const</code> ou <code>var</code>. Ex: <code>let x = 5;</code></p>}
    </div>
  );
}

export default Exercicio3;
