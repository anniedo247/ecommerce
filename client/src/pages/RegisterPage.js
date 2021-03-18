
import React, { useState } from "react";
import { Container } from "react-bootstrap";
import { Form, Col, Button } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import ClipLoader from "react-spinners/ClipLoader";
import { Redirect } from "react-router-dom";
import authActions from "../redux/actions/auth.actions";

const RegisterPage = () => {
  const dispatch = useDispatch();
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const loading = useSelector((state) => state.auth.loading);

  const [user, setUser] = useState({ name: "", email: "", password: "" });

  const onChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    const { name, email, password } = user;
    e.preventDefault();
    dispatch(authActions.register(name, email, password));
  };

  if (isAuthenticated) return <Redirect to="/" />;

  return (
    <div>
      {loading ? (
        <ClipLoader color="blue" loading={loading} size={150} />
      ) : (
        <div>
          <Container fluid style={{width:"40%", marginTop:"30px"}}>
            <div className="text-center p-terms" >
              <h1 className="text-primary"> Sign Up</h1>
              <h4>It's quick and easy</h4>
            </div>

            <Form
              onSubmit={onSubmit}
              className="d-flex flex-column justify-content-center"
            >
              <Form.Row>
                <Form.Group as={Col}>
                  <Form.Control
                    type="name"
                    placeholder="Name"
                    name="name"
                    value={user.name}
                    onChange={onChange}
                  />
                </Form.Group>
              </Form.Row>
              <Form.Row>
                <Form.Group as={Col} controlId="email">
                  <Form.Control
                    type="email"
                    placeholder="Enter email"
                    name="email"
                    value={user.email}
                    onChange={onChange}
                  />
                </Form.Group>
              </Form.Row>
              <Form.Row>
                <Form.Group as={Col} controlId="password">
                  <Form.Control
                    type="password"
                    placeholder="Password"
                    name="password"
                    value={user.password}
                    onChange={onChange}
                  />
                </Form.Group>
              </Form.Row>
              <p className="text-center p-terms">
                By clicking Sign Up, you agree to our Terms, Data Policy and
                Cookie Policy. You may receive SMS notifications from us and can
                opt out at any time.
              </p>
              <Button className="mx-auto w-50" variant="primary" type="submit">
                Sign Up
              </Button>
            </Form>
          </Container>
        </div>
      )}
    </div>
  );
};

 export default RegisterPage;
