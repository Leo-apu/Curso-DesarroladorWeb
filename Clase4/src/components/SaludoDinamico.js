import React, { useState } from 'react';
import './SaludoDinamico.css';

export function SaludoDinamico() {
    const [nombre, setNombre] = useState('');

    const cambiarNombre = (event) => {
        setNombre(event.target.value);
    };

    return <div className='dinamico'>
             <h2>Componente dinámico:</h2>
             <input type="text" value={nombre} onChange={cambiarNombre} />
             <h1>Hola {nombre}!!</h1>
           </div>

}

