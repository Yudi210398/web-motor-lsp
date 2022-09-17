import React, { Fragment } from "react";
import "./event.css";
function Event() {
  return (
    <Fragment>
      <div className="row">
        <h1 className="text-center">Event</h1>
        <br />
        <br />
        <br />
        <div className="col-6">
          <img
            src="https://akcdn.detik.net.id/community/media/visual/2022/09/16/jorge-martin_169.jpeg?w=700&q=90"
            className="rounded mx-auto d-block"
            alt="motor"
          />
        </div>
        <div className="col-4">
          <p className="even">Selasa, 20 September 2022</p>
          <br />
          <p className="judul">Kumpul Club Motor</p>
          <br />
          <p className="isi">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit nemo
            accusamus sunt magni incidunt, modi ad pariatur quo perferendis quae
            tempore doloribus eos aspernatur voluptatem delectus commodi dolores
            assumenda. Cum veniam eum nesciunt, ab ratione neque beatae illum
            tenetur vel doloribus delectus non expedita rem consequatur,
            deserunt, quaerat sint.
          </p>
        </div>
      </div>
    </Fragment>
  );
}

export default Event;
