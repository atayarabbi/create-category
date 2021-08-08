import React, { useState } from "react";
import ProductCard from "./ProductCard";
import productData from "./Products";

const Home = () => {


  const [items, setItems] = useState(productData);

  const filterItem = (categoryItem) => {
    const updateItems = productData.filter((currentItem) => {
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
            onClick={() => setItems(productData)}
          >
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
              {items.map((item, index) => {
                return (
                  <ProductCard
                    image={item.image}
                    name={item.name}
                    price={item.price}
                    item={item}
                    key={item.index}
                    description={item.description}
                  ></ProductCard>
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
