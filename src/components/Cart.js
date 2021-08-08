import React from "react";
import { Table } from "react-bootstrap";
import { useCart } from "react-use-cart";

const Cart = () => {
  const {
    isEmpty,
    totalUniqueItems,
    items,
    updateItemQuantity,
    removeItem,
    totalItems,
    emptyCart,
    cartTotal,
  } = useCart();

  if (isEmpty) return <h1>Your Cart is Empty</h1>;

  return (
    <section className="container py-5">
      <h1>
        CART:{totalUniqueItems} TOTAL ITEMS: {totalItems}
      </h1>
      <div>
        <Table striped bordered hover size="sm">
          <thead>
            <tr>
              <th>Image</th>
              <th>Product Name</th>
              <th>Price</th>
              <th>Quantity</th>
            </tr>
          </thead>
          <tbody>
            {items.map((item, index) => {
              return (
                <tr key={index}>
                  <td>
                    <img src={item.image} alt="#" />
                  </td>
                  <td>{item.name}</td>
                  <td>{item.price}</td>
                  <td>{item.quantity}</td>
                  <td>
                    <button
                      className="btn brn-info ms-2"
                      onClick={() =>
                        updateItemQuantity(item.id, item.quantity - 1)
                      }
                    >
                      -
                    </button>
                    <button
                      className="btn brn-info ms-2"
                      onClick={() =>
                        updateItemQuantity(item.id, item.quantity + 1)
                      }
                    >
                      +
                    </button>
                    <button
                      className="btn brn-danger ms-2"
                      onClick={() => removeItem(item.id)}
                    >
                      Remove
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </Table>
        <div className="col-auto ms-auto">
          <h2>Total Price: {cartTotal}</h2>
        </div>
        <div className="col-auto">
          <button className="btn btn-danger m-2" onClick={() => emptyCart()}>
            Clear Cart
          </button>
        </div>
        <div className="col-auto">
          <button className="btn btn-primary m-2">Buy Now</button>
        </div>
      </div>
    </section>
  );
};

export default Cart;
