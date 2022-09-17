import React, { Fragment } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import "./signin.css";
function SignIn() {
  return (
    <Fragment>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12">
            <h1 className="text-center">Sign IN</h1>
          </div>

          <div className="col-9">
            <Form>
              <Form.Group className="mb-3" controlId="email">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" placeholder="email" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="password">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" />
              </Form.Group>
              <br />
              <Button variant="primary" type="submit">
                Submit
              </Button>
            </Form>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default SignIn;
