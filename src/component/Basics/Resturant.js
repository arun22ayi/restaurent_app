import React, { useState } from "react";
import "./style.css";
import Menu from "./menuApi.js";
import MenuCard from "./MenuCard";
import Navbar from "./Navbar";

const uniqueList = [                //it makes unique lists of category which are getting repeats
  ...new Set(                       //if we use new set it will gives unique list along with object but we need only with the array values so we will use spread operator
    Menu.map((curElem) => {
      return curElem.category;      //will show just category 
    })
  ),
  "All",
];

console.log(uniqueList);

const Resturant = () => {
  const [menuData, setMenuData] = useState(Menu);         // const [menuDtata, setMenuData] = useState(initialdata);     and will define usestate at top at import react
  const [menuList, setMenuList] = useState(uniqueList);   //unique list data will set into menuList and will pass this MenuList as props to navbar

  const filterItem = (category) => {
    if (category === "All") {
      setMenuData(Menu);                       //sets entire menucards for all section
      return;
    }

    const updatedList = Menu.filter((curElem) => {
      return curElem.category === category;           //updatelist will store the matching category which got filtered
    });

    setMenuData(updatedList);                     //updated list will store into setMenuData so now menuData contains the updatedList
  };

  return (
    <>
      <Navbar filterItem={filterItem} menuList={menuList} />
      <MenuCard menuData={menuData} />                     
    </>
  );
};

export default Resturant;
