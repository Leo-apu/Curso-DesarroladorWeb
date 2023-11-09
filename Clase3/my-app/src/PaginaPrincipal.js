import React, { useState } from 'react';
import Producto from './Producto';
import './PaginaPrincipal.css'

const PaginaPrincipal = ({ productos }) => {
  const [productoSeleccionado, setProductoSeleccionado] = useState(null);

  const hacerClick = (producto) => {
    setProductoSeleccionado(producto);
  };

  const cerrarModal = () => {
    setProductoSeleccionado(null);
  };

  const hacerClickDentro = (event) => {
    event.stopPropagation();
  };

  return (
    <>
    <h1>Tienda de Ropa X</h1>
    <section>
      {productos.map((producto) => (
        <article key={producto.sku}>
          <img src={producto.imagen} alt={producto.nombre}  style={{margin: '0 auto'}}/>
          <h2>{producto.nombre}</h2>
          <button onClick={() => hacerClick(producto)}>+ Detalles</button>
        </article>
      ))}
      {productoSeleccionado && (
        <div className="modal" onClick={cerrarModal}>
          <Producto producto={productoSeleccionado} onClick={hacerClickDentro} />
        </div>
      )}
    </section>
    </>
  );
};

export default PaginaPrincipal;


