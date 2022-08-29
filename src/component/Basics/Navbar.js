import React from "react";

const navbar = ({ filterItem, menuList }) => {
  return (
    <>
      <nav className="navbar">
        <div className="btn-group">
          {menuList.map((curElem) => {
            return (
             // <button className="btn-group__item" onClick={()=> filterItem("breakfast")}>Breakfast</button> //for filtering we need to pass argument so then better we need to use fat arrow function
             // <button className="btn-group__item" onClick={()=> filterItem("lunch")>Lunch</button>
              <button className="btn-group__item" onClick={() => filterItem(curElem)}>{curElem}</button>
            );
          })}
        </div>
      </nav>
    </>
  );
};

export default navbar;
