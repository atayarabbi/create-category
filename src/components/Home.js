import React, { useState } from "react";
import Products from "./Products";

const Home = () => {
  const [items, setItems] = useState(Products);
  const filterItem = (categoryItem) => {
    const updateItems = Products.filter((currentItem) => {
      return currentItem.category === categoryItem;
    });
    setItems(updateItems);
  };
  return (
    <div>
      <h1 className="py-4">Chose your Product</h1>
      <div className="menu-tabs container">
        <div className="menu-tab d-flex justify-content-around">
          <button
            className="btn btn-warning"
            onClick={() => setItems(Products)}
          >
            {" "}
            All
          </button>
          <button
            className="btn btn-warning"
            onClick={() => filterItem("laptop")}
          >
            {" "}
            Laptop
          </button>
          <button
            className="btn btn-warning"
            onClick={() => filterItem("mobile")}
          >
            {" "}
            Mobile
          </button>
          <button
            className="btn btn-warning"
            onClick={() => filterItem("camera")}
          >
            {" "}
            Camera
          </button>
        </div>
      </div>

      <div className="container">
        <div className="row">
          <div className="col-11 mx-auto">
            <div className="row my-5">
              {items.map((product) => {
                const { id, price, name, image, description } = product;
                return (
                  <div className="item col-12 col-md-6 col-lg-6 col-xl-4 my-5">
                    <div className="row">
                      <div className="item-image col-12 col-md-12 col-lg-4">
                        <img
                          src={image}
                          alt="itemImage"
                          className="img-fluid"
                        />
                      </div>
                      <div className="item-description col-12 col-md-12 col-lg-8">
                        <div className="main-title pt-4 pb-3">
                          <h1>{name}</h1>
                          <p>{description}</p>
                        </div>
                        <div>
                          <div className="d-flex justify-content-around">
                            <h4>{price}</h4>
                            <a href="#">
                              <button className="btn btn-primary">
                                Order Now
                              </button>
                            </a>
                          </div>
                          <p>Price may vary on selected date</p>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
