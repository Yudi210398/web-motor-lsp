import React, { Fragment } from "react";
import "./galeri.css";
function GaleriFoto() {
  return (
    <Fragment>
      <div className="container">
        <div className="row">
          <h1 className="text-center">Galeri Foto</h1>

          <div className="col-4">
            <br />
            <img
              src="https://media.istockphoto.com/photos/club-98-picture-id459234435?k=20&m=459234435&s=612x612&w=0&h=7_TicDyzeNhV2M_N538zelCqRJqUIwbkJMaLsPdPbRw="
              className="rounded mx-auto d-block"
              alt="motor"
            />
          </div>

          <div className="col-4">
            <br />
            <img
              src="https://images.unsplash.com/photo-1622123255304-552ac3decf91?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1107&q=80"
              className="rounded mx-auto d-block"
              alt="motor"
            />
          </div>

          <div className="col-4">
            <br />
            <img
              src="https://images.unsplash.com/photo-1622123256821-845ffeff1f09?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1032&q=80"
              className="rounded mx-auto d-block"
              alt="motor"
            />
          </div>

          <div className="col-4">
            <br />
            <img
              src="https://media.istockphoto.com/photos/motorcycle-and-parts-in-the-garage-kitchen-blurry-picture-id1363985066?k=20&m=1363985066&s=612x612&w=0&h=ZEwQzfKRNd2xGk8gMeSG5ctk1uzh9wNOSyjTtM8Hb_8="
              className="rounded mx-auto d-block"
              alt="motor"
            />
          </div>

          <div className="col-4">
            <br />
            <img
              src="https://media.istockphoto.com/photos/blue-waters-anglers-club-inc-building-hamilton-bermuda-picture-id477340032?k=20&m=477340032&s=612x612&w=0&h=QECFxiMeHw5Utis1Sv4G-6xiAHy5p0SFlWYlqIZtlD4="
              className="rounded mx-auto d-block"
              alt="motor"
            />
          </div>

          <div className="col-4">
            <br />
            <img
              src="https://media.istockphoto.com/photos/beautiful-young-woman-enjoying-beer-at-the-bar-picture-id1149146679?k=20&m=1149146679&s=612x612&w=0&h=MUi-jfS8cKwJNfknylEWExPI6Lyqq593ZDp-MVCP0Qo="
              alt="motor"
              className="rounded mx-auto d-block"
            />
          </div>
        </div>
      </div>
      <br />
    </Fragment>
  );
}

export default GaleriFoto;
