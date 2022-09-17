import React, { Fragment } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import "./product.css";
function Product() {
  return (
    <Fragment>
      <div className="container">
        <div className="row justify-content-center">
          <h1 className="text-center">Product</h1>
          <br />
          <br />
          <br />
          <div className="col-3">
            <Card style={{ width: "18rem" }}>
              <Card.Img
                variant="top"
                src="https://media.istockphoto.com/photos/pouring-motor-oil-for-motor-vehicles-from-a-gray-bottle-into-the-picture-id1325588832?k=20&m=1325588832&s=612x612&w=0&h=WLFM5NKYdWmJmLgOb6_uPCdzWGMbUrdIHb53jjq2eMA="
              />
              <Card.Body>
                <Card.Title>Oli Motor</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
                <br />
                <Button variant="primary">Rp 50.000</Button>
              </Card.Body>
            </Card>
          </div>
          <div className="col-3">
            <Card style={{ width: "18rem" }}>
              <Card.Img
                variant="top"
                src="https://media.istockphoto.com/photos/car-components-picture-id188052258?k=20&m=188052258&s=612x612&w=0&h=JsM560V-1NouGm0wvka45j6TTC_q0XwGjUxcMAnDqiw="
              />
              <Card.Body>
                <Card.Title>Gir Motor</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
                <br />
                <Button variant="primary">Rp 500.000</Button>
              </Card.Body>
            </Card>
          </div>
          <div className="col-3">
            <Card style={{ width: "18rem" }}>
              <Card.Img
                variant="top"
                src="https://media.istockphoto.com/photos/odd-cog-picture-id175405676?k=20&m=175405676&s=612x612&w=0&h=1DceJk24NtAGBHN1a5EkEwcPbFtKHs4453mflPWyZSY="
              />
              <Card.Body>
                <Card.Title>Mesin Motor</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
                <br />
                <Button variant="primary">Rp 940.000</Button>
              </Card.Body>
            </Card>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default Product;
