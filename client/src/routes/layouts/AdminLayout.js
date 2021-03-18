import React from "react";
import { Container } from "react-bootstrap";
import { Switch, Route } from "react-router-dom";

import AlertMsg from "./AlertMsg";
import PublicNavbar from "../../components/PublicNavbar.js";

import Users from "../../pages/Admin/Users";
import Orders from "../../pages/Admin/Orders";
import Products from "../../pages/Admin/Products";
import NotFoundPage from "../../pages/NotFoundPage";
import AddProduct from "../../pages/Admin/AddProduct"

const PublicLayout = () => {
  return (
    <>
      <PublicNavbar />
      <Container fluid style={{ padding: 0 }}>
        <AlertMsg />
        <Switch>
          <Route exact path="/admin/users" component={Users} />
          <Route exact path="/admin/orders" component={Orders} />
          <Route exact path="/admin/products" component={Products} />
          <Route exact path="/admin/products/add" component={AddProduct} />
          <Route component={NotFoundPage} />
        </Switch>
      </Container>
    </>
  );
};

export default PublicLayout;
