import React, { useState, useEffect } from "react";
import { Container,Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { ProductCart } from "../components/ProductCart";

import productActions from "../redux/actions/product.actions";

const HomePage = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.product.products);

  useEffect(() => {
    dispatch(productActions.getAllProducts());
  }, []);
  return (
    <Container className="py-5 d-flex justify-content-center">
      <Row>
      {products.map((p)=>(
        <ProductCart product ={p}/>
      ))}
      </Row>
      
    </Container>
  );
};

export default HomePage;
