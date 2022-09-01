import { useState } from 'react';
import PropTypes from 'prop-types';
// El componente Item no tiene componentes hijos.
// ESTADO: Item debe tener un número para almacenar la cantidad de stock, la misma se la defina el padre a la hora de crearlo.
// MÉTODOS: Item debe manejar el click de su boton para restar la cantidad en stock de sí mismo y a su vez poder aumentar el estado de su "abuelo" App.
// PROPS: Item recibe todos los campos que muestra en pantalla: nombre, descripcion, stock y el métodos heredados para su uso.
// Maqueta de Item:
//    h3
//    p
//    h5 > span    (este span debe mostrar la cantidad si es mayor a 0 "agotado" si llega a 0)
//    button       (este boton debe permitir comprar, pero si la cantidad es menor a 0 debe estar deshabilitado y decir "Sin stock")

export default function Item({
  description,
  name,
  onAddItemToCart,
  initialStockk,
  })
{
  const [stock, setStock] = useState(initialStock);
 ////////////////////////////////////////////////////////////////
  function onClickBuy() {
    onAddItemToCart();
    setStock((prevState) => prevState - 1);
  }
 ////////////////////////////////////////////////////////////////
  return (
    <div className='producto'>
      <h3>{name}</h3>
      <p>{description}</p>
      <h5>
        En stock: <span>{stock > 0 ? stock : 'agotado'}</span>
      </h5>
      <button disabled={stock <= 0} onClick={onClickBuy}>
        {stock > 0 ? 'COMPRAR' : 'SIN STOCK'}
      </button>
    </div>
  );
}
 ////////////////////////////////////////////////////////////////
Item.propTypes = {
  description: PropTypes.string,
  name: PropTypes.string,
  onAddItemToCart: PropTypes.func,
  initialStock: PropTypes.number,
};
 ////////////////////////////////////////////////////////////////
Item.defaultProps = {
  description:
    'Suma más y más kilómetros con tus Zapatillas Nike Revolution 6 Next Nature, que aportan amortiguación y confort a cada paso que des. Su capellada transpirable y suela diseñada por computadora para una mejor tracción son ideales hasta para los corredores más exigentes.',
  name: 'Zapatillas Nike Revolution 6 Next Nature',
  onAddItemToCart: () => {},
  initialStock: 5,
};
