import React from "react";
import { Button, Card } from "react-bootstrap";
import { useCart } from "react-use-cart";


const ProductCard = (props) => {

  const{image, name, price, description} = props.item;

  const { addItem } = useCart();

  return (
    
    <div className="item col-12 col-md-6 col-lg-6 col-xl-4 my-5">
    <Card style={{ width: "18rem", height: "22rem" }}>
      <Card.Img
        variant="top"
        src={image}
        style={{ height: "12rem" }}
        className="img-fluid"
      />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>
          <p>{description}</p>
        </Card.Text>

        <div className="d-flex justify-content-around">
          <div>
            <Card.Text>
              <p>${price}</p>
            </Card.Text>
          </div>
          <div>
            <Button
              className="btn"
              variant="success"
              onClick={addItem(props.item)}
            >
              Add to Cart
            </Button>
          </div>
        </div>
      </Card.Body>
    </Card>
  </div>
  );
};

export default ProductCard;
