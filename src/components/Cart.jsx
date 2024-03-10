import React from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { remove } from "../store/CartSlice";
export default function Cart() {
  const dispatch = useDispatch();

  const products = useSelector((state) => state.cart);
  const removeItem = () => {
    dispatch(remove(products));
  };
  const cards = products.map((product, index) => (
    <div className="col-md-3 " key={index} style={{ marginBottom: "20px" }}>
      <Card key={product.id} className="h-100">
        <div className="text-center">
          <Card.Img
            variant="top"
            src={product.image}
            style={{ width: "100px", height: "130px" }}
          />
        </div>
        <Card.Body>
          <Card.Title>{product.title}</Card.Title>
          <Card.Text>INR: {product.price}</Card.Text>
        </Card.Body>
        <Card.Footer
          className="text-muted"
          style={{ backgroundColor: "white", border: "none" }}
        >
          <Button variant="danger" onClick={removeItem}>
            Remove Item
          </Button>
        </Card.Footer>
      </Card>
      ss
    </div>
  ));

  return (
    <>
      <div className="row">{cards}</div>
    </>
  );
}
