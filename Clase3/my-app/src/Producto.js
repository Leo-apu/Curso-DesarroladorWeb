import React from 'react';
import './Producto.css';

const Producto = ({ producto }) => {
  const { nombre,descripcion, precio, sku, cantidadDisponible } = producto;

  return (
    <div className="producto">
      <div className='column'>
        <img src={producto.imagen} alt={producto.nombre} style={{margin: '0 auto'}} />
        <h2>{nombre}</h2>
        <p className='sku'>SKU: {sku}</p>
        <p className='cantidad_disponible'>Cantidad disponible: {cantidadDisponible}</p>
      </div>
      
      <div className='column'>
        <p className='descripcion'><b>Descripción del producto:</b><br></br>{descripcion}</p>
        <h3>Precio:${precio}</h3>
        <button className='button_comprar'><span className="material-symbols-outlined">
shopping_cart
</span>Comprar</button>
      </div>
    </div>
  );
};

export default Producto;
