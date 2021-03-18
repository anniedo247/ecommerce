import React, { useState } from "react";
import { Container } from "react-bootstrap";
import { Form, Col, Button, Row } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import ClipLoader from "react-spinners/ClipLoader";
import { Redirect,Link } from "react-router-dom";

import authActions from "../redux/actions/auth.actions";

const LoginPage = () => {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const dispatch = useDispatch();
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const loading = useSelector((state) => state.auth.loading);

  const onChange = (e) =>
    setUser({ ...user, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    const { email, password } = user;
    dispatch(authActions.login({ email, password }));
  };

  if (isAuthenticated) return <Redirect to="/" />;
  return (
    <div>
      <Container fluid style={{width:"40%", marginTop:"30px"}}>
        <Form onSubmit={onSubmit} className="d-flex flex-column justify-content-center align-content-center text-align-center">
          <Form.Group >
          <div className="text-center mb-3">
              <h1 className="text-primary">Sign In</h1>
              <p className="lead">Sign Into Your Account</p>
            </div>
            <Form.Control
              type="email"
              required
              name = "email"
              value = {user.email}
              onChange={onChange}
              placeholder="Email or Phone Number"
            />
          </Form.Group>
          <Form.Group>
            <Form.Control
              type="password"
              name = "password"
              value = {user.password}
              placeholder="Password"
              onChange={onChange}
            />
          </Form.Group>
          <Button
            block
            type="submit"
            variant="primary"
            className="font-weight-bold"
          >
            Login
          </Button>
        </Form>
      </Container>
    </div>
  );
};

export default LoginPage;
