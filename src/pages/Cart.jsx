import React from 'react';
import CartItem from '../components/List/CartItem';
import useAPI from '../hooks/useAPI';

function Cart() {
  const {orders} = useAPI();

  return (
    <div className='cart'>
      <span className="close">X</span>
      <h2 className='heading'>Din beställning</h2>
      <ul className='list'>
        {orders.length>0
          ? orders.map((item) => (
              <CartItem key={item?.id} {...item} />
            ))
          : null}
      </ul>
    </div>
  );
}

export default Cart;
