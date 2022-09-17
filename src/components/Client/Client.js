import React, { Fragment } from "react";
function Client() {
  return (
    <Fragment>
      <div className="container">
        <div className="row justify-content-center">
          <h1 className="text-center">Klien Kami</h1>
          <br />
          <br />
          <br />
          <div className="col-4">
            <img
              width="300px"
              height="300px"
              src="https://images.unsplash.com/photo-1587331833452-c9bf082e6c59?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=881&q=80"
              alt="motor"
            />
          </div>
          <div className="col-4">
            <img
              width="300px"
              height="300px"
              src="https://images.unsplash.com/photo-1555596899-d634257b55bb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
              alt=""
            />
          </div>

          <div className="col-4">
            <img
              width="300px"
              height="300px"
              src="
              https://images.unsplash.com/photo-1585059466136-2c1c459ef42e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80"
              alt=""
            />
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default Client;
