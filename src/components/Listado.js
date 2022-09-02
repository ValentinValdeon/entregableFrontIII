import React from 'react';
import PropTypes from 'prop-types';
import Item from './Item';
import products from './data.json';

// Debemos importar el listado de objetos del archivo JSON para usarlos como array a la hora de crear cada Item.
// El componente Listado es el padre de:
// - varios Item
// ESTADO: Listado no necesita manejar un estado.
// MÉTODOS: Listado no requiere de métodos.
// PROPS: Listado recibe el método para aumentar el estado de App y se lo pasa a cada uno de sus hijos.
 ////////////////////////////////////////////////////////////////
export default function Listado({ onAddItemToCart }) {
  return (
    <div className="container">
      {products.map((item) => (
        <Item
          description={item.producto.descripcion}
          key={item.id}
          name={item.producto.nombre}
          onAddItemToCart={onAddItemToCart}
          initialStock={item.stock}
        />
      ))}
    </div>
  );
}
 ////////////////////////////////////////////////////////////////
Listado.propTypes = {
  onAddItemToCart: PropTypes.func,
};
 ////////////////////////////////////////////////////////////////
Listado.defaultProps = {
  onAddItemToCart: () => {},
};
