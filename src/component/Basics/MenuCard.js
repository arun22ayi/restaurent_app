import React from "react";

const MenuCard = ({ menuData }) => {   //will ACCEPT as Parameters
  //   console.log(menuData);

  return (
    <>
    <section className="main-card--cointainer">
    {menuData.map((curElem) => {
      const { id, name, category, image, description } = curElem;   // first will save properties of object into curELem this is object destructuring

      return (                                           // will add menucard code into the loop of map method & while using map we need to pass key
        <>
          <div className="card-container" key={id}>             
            <div className="card ">
              <div className="card-body">
                <span className="card-number card-circle subtle">{id}</span>
                <span className="card-author subtle" style={{color:"red"}}> {category}</span>
                <h2 className="card-title"> {name} </h2>
                <span className="card-description subtle">
                  {description}
                </span>
                <div className="card-read">Read</div>
              </div>
              <img src={image} alt="images" className="card-media" />

              <span className="card-tag  subtle">Order Now</span>
            </div>
          </div>
        </>
      );
    })}
  </section>
    </>
  );
};

export default MenuCard;
