import React, { useEffect, useState } from "react";
import { Container, Table, Button, Modal, Form, Col } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt, faEdit, faPlus } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

import productActions from "../../redux/actions/product.actions";

const Products = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.product.products);
  const [show, setShow] = useState(false);
  const [product, setProduct] = useState({
    name: "",
    description: "",
    price: "",
    images: "",
    categories: "",
  });
  const params = useParams();

  useEffect(() => {
    dispatch(productActions.getAllProducts());
  }, []);
  const handleShow = (e) => {
    e.preventDefault();
    setShow(!show);
  };
  const handleClose = () => {
    setShow(false);
  };
  const onChange = (e) => {
    setProduct({ ...product, [e.target.id]: e.target.value});
  };

  const onSubmit = (e) => {
    e.preventDefault();
    console.log("heheh");
  };

  const onDeleteProduct = (id) =>{
    console.log('productIs',id)
    if(id)
    dispatch(productActions.deleteProduct(id))
  }
  return (
    <>
      <Container fluid className="py-5" style={{ width: "70%" }}>
        <div className="d-flex justify-content-between">
          <h2>PRODUCTS</h2>
          <Button as={Link} to = "/admin/products/add" variant="dark" >
            <FontAwesomeIcon icon={faPlus} color="white" size="md" /> CREATE
            PRODUCT
          </Button>
        </div>
        <Table bordered hover className="order-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>NAME</th>
              <th>PRICE</th>
              <th>CATEGORY</th>
              <th></th>
              <th></th>
            </tr>
          </thead>
          {products.map((p) => (
            <tbody>
              <tr>
                <td>{p._id}</td>
                <td>{p.name}</td>
                <td>{new Intl.NumberFormat().format(p.price)} VND</td>
                <td>{p.categories.map((c) => c.name)}</td>
                <td>
                  <FontAwesomeIcon onClick={handleShow}
                    style={{ marginLeft: "35%" }}
                    icon={faEdit}
                    size="md"
                  />
                </td>
                <td>
                  <FontAwesomeIcon
                    style={{ marginLeft: "35%" }}
                    icon={faTrashAlt}
                    color="red"
                    size="md"
                    onClick={()=> onDeleteProduct(p._id)}
                  />
                </td>
              </tr>
            </tbody>
          ))}
        </Table>
      </Container>
      <Modal
        show={show}
        
        onHide={() => setShow(false)}
        aria-labelledby="example-custom-modal-styling-title"
        className="d-flex align-items-center justify-content-center"
      >
        <Modal.Header>
          <Modal.Title>Edit Product</Modal.Title>
        </Modal.Header>
        <Modal.Body>
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
            <Form.Row>
              <Form.Group as={Col} controlId="images">
                <Form.File id="images" label="Images" onChange={onChange} />
              </Form.Group>
            </Form.Row>
            <Form.Row>
              <Form.Group as={Col} controlId="categories">
                <Form.Label>Category</Form.Label>
                {/* <InputGroup>
              <DropdownButton
                as={InputGroup.Prepend}
                variant="outline-secondary"
                id="input-group-dropdown-1"
              >
                <Dropdown.Item href="#">Action</Dropdown.Item>
                <Dropdown.Item href="#">Another action</Dropdown.Item>
                <Dropdown.Item href="#">Something else here</Dropdown.Item>
                <Dropdown.Divider />
                <Dropdown.Item href="#">Separated link</Dropdown.Item>
              </DropdownButton>
              <FormControl
                type="price"
                placeholder="Choose category"
                onChange={onChange}
                aria-describedby="basic-addon1"
              />
            </InputGroup> */}
                <Form.Control
                  type="categories"
                  placeholder="Choose category"
                  onChange={onChange}
                />
              </Form.Group>
            </Form.Row>

            <Button
              className="mx-auto w-50"
              variant="primary"
              type="submit"
              onClick={handleClose}
            >
              Edit
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default Products;
