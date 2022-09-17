import React, { Fragment } from "react";
import "./visi.css";
function VisiMisi() {
  return (
    <Fragment>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-6">
            <h1>Visi</h1>
            <br />
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Cupiditate delectus voluptatum explicabo a nihil soluta, expedita
              alias officiis voluptas quae quis corrupti esse! Animi, blanditiis
              repellat. Dolorem, cum consequatur. Voluptatem. Lorem ipsum dolor
              sit amet, consectetur adipisicing elit. Cupiditate delectus
              voluptatum explicabo a nihil soluta, expedita alias officiis
              voluptas quae quis corrupti esse! Animi, blanditiis repellat.
              Dolorem, cum consequatur. Voluptatem.
            </p>
          </div>

          <div className="col-6">
            <h1>misi</h1>
            <br />
            <div className="row">
              <div className="col-2">
                <p className="misis">1</p>
              </div>
              <div className="col-10">
                <p className="misi">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Cupiditate delectus voluptatum explicabo a nihil soluta,
                  expedita alias officiis voluptas quae quis corrupti esse!
                  Animi, blanditiis repellat. Dolorem, cum consequatur.
                  Voluptatem.
                </p>
              </div>

              <div className="col-2">
                <p className="misiss">2</p>
              </div>
              <div className="col-10">
                <p className="misia">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Cupiditate delectus voluptatum explicabo a nihil soluta,
                  expedita alias officiis voluptas quae quis corrupti esse!
                  Animi, blanditiis repellat. Dolorem, cum consequatur.
                  Voluptatem.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default VisiMisi;
