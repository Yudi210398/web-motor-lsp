import React, { Fragment } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import "./kontakkami.css";
function KontakKami() {
  return (
    <Fragment>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12">
            <h1 className="text-center">Kontak Kami</h1>
          </div>

          <div className="col-10">
            <Form>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Nama</Form.Label>
                <Form.Control type="text" placeholder="nama" />
              </Form.Group>

              <Form.Group className="mb-3" controlId="email">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" placeholder="email" />
              </Form.Group>

              <div className="form-floating">
                <textarea
                  className="form-control"
                  placeholder="Leave a comment here"
                  id="floatingTextarea"
                ></textarea>
                <label htmlFor="floatingTextarea">Pesan</label>
              </div>
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

export default KontakKami;
