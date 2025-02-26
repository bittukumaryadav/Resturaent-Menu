import React from "react";
import Menu from "./menuApi.js";
import MenuCard from "./MenuCard.js";
import Navbar from "./Navbar.js";
import "./Style.css";


const uniqueList = [
    ...new Set
    (Menu.map((curElem) => {
    return curElem.category;
})
),
"All",
];
console.log(uniqueList);
const Resturant = () => {
    const[menuData, setMenuData] = React.useState(Menu);
    const [menuList, setMenuList] = React.useState(uniqueList);

    const filterItem = (category) => {
        if (category === "All") {
            setMenuData(Menu);
            return;
        }
        const updatelist = Menu.filter((curElem) => {
            return curElem.category === category;
        });
        setMenuData(updatelist);

    };
  return (
    <>
      <Navbar filterItem={filterItem} menuList = {menuList} />
      <MenuCard menuData={menuData} />
    </>
  );
};

export default Resturant;
