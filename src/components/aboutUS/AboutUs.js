import React, { Fragment } from "react";
import "./about.css";
function AboutUs() {
  return (
    <Fragment>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-6">
            <img
              src="https://images.unsplash.com/photo-1622123255593-983cc2abd888?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1032&q=80"
              className="img-fluid"
              alt="motor"
            />
          </div>

          <div className="col-6">
            <h1 className="text-center">ABOUT US</h1>
            <br />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Temporibus quis sed nemo consequuntur explicabo nisi natus fugiat
              porro excepturi? Vel excepturi explicabo odit doloribus sed
              eligendi cupiditate odio consectetur voluptatum, porro magni
              officiis, similique quia asperiores, rerum Molestiae officiis iure
              ad itaque dolores nemo, minus esse omnis facilis nihil animi
              tempora deleniti suscipit numquam vitae eligendi reiciendis id.
              Molestias tempora minima laudantium dolorum a aspernatur unde aut
              autem temporibus quasi, excepturi dolor laboriosam perferendis
              enim alias nemo natus architecto velit placeat fugiat fugit eum
              ipsam sequi! Deleniti, numquam?
            </p>{" "}
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Temporibus quis sed nemo consequuntur explicabo nisi natus fugiat
              porro excepturi? Vel excepturi explicabo odit doloribus sed
              eligendi cupiditate odio consectetur voluptatum, porro magni
              officiis, similique quia asperiores, rerum
            </p>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default AboutUs;
