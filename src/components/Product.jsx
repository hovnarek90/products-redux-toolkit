import React, { useState, useEffect } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { useDispatch, useSelector } from "react-redux";
import { add } from "../store/CartSlice";
import { getProducts } from "../store/ProductSlice";
import Alert from "react-bootstrap/Alert";
import StatusCode from "../utils/StatusCode";

export default function Product() {
  const dispatch = useDispatch();
  const { data: products, status } = useSelector((state) => state.products);
  useEffect(() => {
    dispatch(getProducts());
  }, []);

  if (status === StatusCode.LOADING) {
    return <h1>Loading...</h1>;
  }
  if (status === StatusCode.ERROR) {
    return <Alert variant="danger">Something went wrong</Alert>;
  }

  const addToCart = (product) => {
    dispatch(add(product));
    // console.log(product);
  };
  const cards = products.map((product, index) => (
    <div className="col-md-3" key={index} style={{ marginBottom: "20px" }}>
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
          <Button variant="primary" onClick={() => addToCart(product)}>
            Add to cart
          </Button>
        </Card.Footer>
      </Card>
    </div>
  ));

  return (
    <>
      <h1>Product dashboard</h1>
      <div className="row">{cards}</div>
    </>
  );
}
