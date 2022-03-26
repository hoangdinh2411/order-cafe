import React from 'react';
import arrowDown from '../../assets/graphics/arrow-down.svg';
import arrowUp from '../../assets/graphics/arrow-up.svg';
function CartItem(props) {
  const {title, price, amount} = props;
  return (
    <div className='menu-item'>
      <div className='info'>
        <p className='name-cafe'>{title} </p>
        <p className='sub-text'>{price} </p>
      </div>
      <div>
        <div className='arrowImage'>
          <img src={arrowUp} alt='up' />
        </div>
        <span>{amount}</span>
        <div className='arrowImage'>
          <img src={arrowDown} alt='down' />
        </div>
      </div>
    </div>
  );
}

export default CartItem;
