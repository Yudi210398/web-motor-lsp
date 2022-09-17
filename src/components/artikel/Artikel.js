import React, { Fragment } from "react";
import "./artikel.css";
function Artikel() {
  return (
    <Fragment>
      <div className="row">
        <h1 className="text-center">Artikel</h1>
        <br />
        <br />
        <br />
        <br />
        <br />
        <div className="col-6">
          <img
            src="https://media.istockphoto.com/photos/club-98-picture-id459234435?k=20&m=459234435&s=612x612&w=0&h=7_TicDyzeNhV2M_N538zelCqRJqUIwbkJMaLsPdPbRw="
            className="rounded mx-auto d-block"
            alt="motor"
          />
        </div>

        <div className="col-4">
          <p className="artikel">
            Motor clasic dengan harga terjangkau, yang Ramah Kantong
            Selengkapnya...
          </p>
        </div>

        <div className="col-6">
          <img
            src="https://akcdn.detik.net.id/community/media/visual/2022/09/16/jorge-martin_169.jpeg?w=700&q=90"
            className="rounded mx-auto d-block"
            alt="motor"
          />
        </div>

        <div className="col-4">
          <p className="artikel">
            Hasil Free Practice 1 MotoGP Aragon: Aleix Espargaro Tercepat, Marc
            Marquez ke-11 selengkapnya...
          </p>
        </div>
        <div className="col-6">
          <img
            src="https://akcdn.detik.net.id/community/media/visual/2022/05/28/jorge-martin_169.jpeg?w=700&q=90"
            className="rounded mx-auto d-block"
            alt="motor"
          />
        </div>
        <div className="col-4">
          <p className="artikel">
            Jorge Martin Kuasai Free Practice 2 MotoGP Aragon 2022 Baca artikel
            detiksport, "Jorge Martin Kuasai Free Practice 2 MotoGP Aragon 2022"
            selengkapnya...
          </p>
        </div>
      </div>
    </Fragment>
  );
}

export default Artikel;
