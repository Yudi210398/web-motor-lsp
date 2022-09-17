import React, { Fragment } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import "./signin.css";
function SignUp() {
  return (
    <Fragment>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12">
            <h1 className="text-center">Sign up</h1>
          </div>

          <div className="col-9">
            <Form>
              <Form.Group className="mb-3" controlId="nama">
                <Form.Label>Nama Panjang</Form.Label>
                <Form.Control type="text" placeholder="Nama Panjang" />
              </Form.Group>

              <Form.Group className="mb-3" controlId="email">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" placeholder="email" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="nomor">
                <Form.Label>Nomor Handphone</Form.Label>
                <Form.Control
                  type="number"
                  placeholder="No Handphone (+623434xxxxx)"
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="password">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" />
              </Form.Group>

              <Form.Group className="mb-3" controlId="konfirmasi password">
                <Form.Label>Konfirmasi Password</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Konfirmasi Password"
                />
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

export default SignUp;
