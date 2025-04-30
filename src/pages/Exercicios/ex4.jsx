import React, { useState } from 'react';
import './Exercicio.css'

function Exercicio4() {
  const [mostrarResposta, setMostrarResposta] = useState(false);

  return (
    <div className="exercicio">
      <strong>4. Qual é a função da tag &lt;a&gt; no HTML?</strong><br />
      <button onClick={() => setMostrarResposta(!mostrarResposta)}>
        {mostrarResposta ? 'Ocultar resposta' : 'Mostrar resposta'}
      </button>
      {mostrarResposta && <p><em>Resposta:</em> Criar links para outras páginas ou seções. Ex: <code>&lt;a href="link"&gt;</code></p>}
    </div>
  );
}

export default Exercicio4;
