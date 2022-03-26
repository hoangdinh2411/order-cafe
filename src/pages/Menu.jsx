import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import useAPI from '../hooks/useAPI';

import MenuItem from '../components/List/MenuItem';


function Menu() {
  const {menu, fetchingMenu} = useAPI();
  React.useEffect(() => {
    fetchingMenu();
  }, []);

  return (
    <>
      
      <div className='menu-container'>
        <Header />
        <div className='menu-content'>
          <h2 className='heading'>Meny</h2>
          <ul className='list'>
            {menu
              ? menu.map((item) => (
                  <MenuItem key={item?.id} {...item} />
                ))
              : null}
          </ul>
        </div>
        <Footer />
      </div>
    </>
  );
}

export default Menu;
