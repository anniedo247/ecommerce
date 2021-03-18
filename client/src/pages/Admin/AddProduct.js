import React, { useState } from "react";
import { Container, Form, Button, Col } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import productActions from "../../redux/actions/product.actions";
const AddProduct = () => {
  const dispatch = useDispatch();
  const [newProduct, setNewProduct] = useState({
    name: "",
    description: "",
    dimesions: "",
    color: "",
    weight: 0,
    material: "",
    price: 0,
    images: [],
    categories: [],
  });

  const onChange = (e) => {
    setNewProduct({ ...newProduct, [e.target.id]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(productActions.addProduct(newProduct));
  };

  const widget = window.cloudinary.createUploadWidget(
    {
      cloudName: "dbxawxez9",
      uploadPreset: "ecommerce_upload",
    },
    (err, result) => {
      console.log(result);
    }
  );
  // const uploadWidget = () => {
  //   window.cloudinary.openUploadWidget(
  //     {
  //       cloud_name: "dbxawxez9",
  //       upload_preset: "ecommerce_upload",
  //     },
  //     function (error, result) {
  //       console.log(result);
  //     }
  //   );
  // };

  return (
    <Container fluid style={{ width: "60%", marginTop: "30px" }}>
      <h3>Create New Product</h3>
      <Button onclick={()=> widget.open()}>Upload Images</Button>

      <Form
        onSubmit={onSubmit}
        className="d-flex flex-column justify-content-center"
      >
        <Form.Row>
          <Form.Group as={Col} controlId="name">
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="name"
              placeholder="Product Name"
              onChange={onChange}
            />
          </Form.Group>
        </Form.Row>
        <Form.Row>
          <Form.Group as={Col} controlId="description">
            <Form.Label>Description</Form.Label>
            <Form.Control
              type="description"
              placeholder="Description"
              onChange={onChange}
            />
          </Form.Group>
        </Form.Row>
        <Form.Row>
          <Form.Group as={Col} controlId="price">
            <Form.Label>Price</Form.Label>
            <Form.Control
              type="price"
              placeholder="Price"
              onChange={onChange}
            />
          </Form.Group>
        </Form.Row>
        {/* <Form.Row>
          <Form.Group as={Col} controlId="images">
            <Form.File id="images" label="Images" />
          </Form.Group>
        </Form.Row> */}
        <Form.Row></Form.Row>
        <Form.Row>
          <Form.Group as={Col} controlId="categories">
            <Form.Label>Category</Form.Label>
            <Form.Control
              type="categories"
              placeholder="Choose category"
              onChange={onChange}
            />
          </Form.Group>
        </Form.Row>

        <Button className="mx-auto w-50" variant="primary" type="submit">
          Create
        </Button>
      </Form>
    </Container>
  );
};

export default AddProduct;
