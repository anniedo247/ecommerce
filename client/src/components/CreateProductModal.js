import React from "react";
import {Modal,Form,Button,Col} from "react-bootstrap"

const CreateProductModal = ({
  show,
  setShow,
  handleClose,
  onChange,
  onSubmit,
}) => {
  return (
    <Modal
      show={show}
      dialogClassName="modal-90w"
      onHide={() => setShow(false)}
      aria-labelledby="example-custom-modal-styling-title"
      className="d-flex align-items-center justify-content-center"
    >
      <Modal.Header>
        <Modal.Title>Create New Product</Modal.Title>
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
            Create
          </Button>
        </Form>
      </Modal.Body>
    </Modal>
  );
};

export default CreateProductModal;
