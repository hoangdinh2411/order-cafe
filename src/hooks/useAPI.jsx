import React from 'react';
import {SET_MENU, SET_ORDERS} from '../store/appSlice';
import {useSelector, useDispatch} from 'react-redux';
function useAPI() {
  const dispatch = useDispatch();
  const menu = useSelector((state) => state.app.menu);
  const orders = useSelector(
    (state) => state.app.orders.list
  );
  const totalProduct = useSelector(
    (state) => state.app.orders.totalProduct
  );

  const fetchingMenu = async () => {
    await fetch('http://localhost:5000/api/beans')
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        dispatch(SET_MENU(data.menu));
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleOrderCafe = async (produceId) => {
    // find product on orders if the product was selected 1 time before
    const orderedProduct = orders.find(
      (order) => order.id === produceId
    );
    let newOrder = orders.slice(0, orders.length);

    // if product was selected,
    if (orderedProduct) {
      // plus 1 on amount property on current list
      newOrder = orders.map((order) => {
        if (order.id === produceId) {
          return {...order, amount: order.amount + 1};
        }
        return order;
      });
    } else {
      // if product wasn't selected , find product on menu
      const selectedProduct = menu.find(
        (item) => item.id === produceId
      );

      // create a new list , that include other old selected product , add amount property for new product
      newOrder.unshift({
        ...selectedProduct,
        amount: 1,
      });
    }
    const total = totalProduct + 1;

    dispatch(
      SET_ORDERS({list: newOrder, total})
    );
    return;
  };

  return {
    menu,
    totalProduct,
    orders,
    fetchingMenu,
    handleOrderCafe,
  };
}

export default useAPI;
