import React from "react";
import Carousel from "react-bootstrap/Carousel";
import "./profile.css";
function Profile() {
  return (
    <div className="container">
      <br />
      <div className="row">
        <h1 className="text-center">Motor Antique Club Indonesia (MACI)</h1>
        <br />
        <br />
        <br />
        <br />
        <div className="col-12">
          <Carousel fade>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="https://images.unsplash.com/photo-1622123255108-2dde086a4bee?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1032&q=80"
                alt="First slide"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="https://images.unsplash.com/photo-1622123255875-7c100270dd25?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1032&q=80"
                alt="Second slide"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="https://images.unsplash.com/photo-1622123255593-983cc2abd888?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1032&q=80"
                alt="Third slide"
              />
            </Carousel.Item>
          </Carousel>
        </div>
      </div>
      <div className="row justify-content-center">
        <div className="col-10">
          <p className="profilep">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere
            accusamus voluptatem ut, placeat illo magnam exercitationem
            voluptates quam labore assumenda? Obcaecati, fuga repellat corporis,
            eveniet non excepturi atque eos quidem quibusdam porro esse commodi
            saepe cum sapiente ullam deleniti debitis aliquam iure in, nulla
            labore nam. Quod mollitia eum nulla rerum tempore? Iure assumenda
            beatae explicabo! Ut molestiae unde tenetur? Lorem ipsum dolor sit
            amet consectetur adipisicing elit. Facere accusamus voluptatem ut,
            placeat illo magnam exercitationem voluptates quam labore assumenda?
            Obcaecati, fuga repellat corporis, eveniet non excepturi atque eos
            quidem quibusdam porro esse commodi saepe cum sapiente ullam
            deleniti debitis aliquam iure in, nulla labore nam. Quod mollitia
            eum nulla rerum tempore? Iure assumenda beatae explicabo! Ut
            molestiae unde tenetur? Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Facere accusamus voluptatem ut, placeat illo
            magnam exercitationem voluptates quam labore assumenda? Obcaecati,
            fuga repellat corporis, eveniet non excepturi atque eos quidem
            quibusdam porro esse commodi saepe cum sapiente ullam deleniti
            debitis aliquam iure in, nulla labore nam. Quod mollitia eum nulla
            rerum tempore? Iure assumenda beatae explicabo! Ut molestiae unde
            tenetur? Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Facere accusamus voluptatem ut, placeat illo magnam exercitationem
            voluptates quam labore assumenda? Obcaecati, fuga repellat corporis,
            eveniet non excepturi atque eos quidem quibusdam porro esse commodi
            saepe cum sapiente ullam deleniti debitis aliquam iure in, nulla
            labore nam. Quod mollitia eum nulla rerum tempore? Iure assumenda
            beatae explicabo! Ut molestiae unde tenetur?
          </p>
        </div>
      </div>
      <br />
      <br />
    </div>
  );
}

export default Profile;
