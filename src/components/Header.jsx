import React from 'react';
import bag from '../assets/graphics/bag.svg';
import useAPI from '../hooks/useAPI';
import Modal from '../components/Modal';
import Cart from '../pages/Cart';
function Header() {
  const {totalProduct} = useAPI();
  const [openModal, setOpenModal] = React.useState(false);

  return (
    <div className='graphics header '>
      <div
        className='bag'
        onClick={() => setOpenModal(true)}
      >
        <Modal
          open={openModal}
          handleClose={() => setOpenModal(false)}
        >
          <Cart />
        </Modal>
        <p className='count'>{totalProduct}</p>
        <img className='bag-image' src={bag} />
      </div>
    </div>
  );
}

export default Header;
