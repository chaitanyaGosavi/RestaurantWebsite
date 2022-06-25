import React, { useState } from 'react';
import MenuCard from './MenuCard';
import Menu from './menuApi';
import NavBar from './NavBar';

const uniqueCategory = [
  ...new Set(
    Menu.map((ele) => {
      return ele.category;
    })
  ),
  "All",
];

const Restro = () => {
  const [menuData, setMenuData] = useState(Menu);
  const[menuList, setMenuList] = useState(uniqueCategory)

  const filterItem = (category) =>{
    if (category === "All"){
      setMenuData(Menu);
      return;
    }
    const updatatedList = Menu.filter((ele)=>{
    return ele.category===category;
  });
  setMenuData(updatatedList);
  };

  return (
    <>
       <NavBar filterItem = {filterItem} menuList = {menuList}/>
      <div className="row row-cols-1 row-cols-md-2 g-4 card-container">
        <MenuCard menuData={menuData} />
      </div >
    </>

  )
}
export default Restro;
