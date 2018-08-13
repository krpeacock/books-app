import React from "react";
import imageUrl from "../static/images/open-book.jpg";

export default () => (
  <div className="hero-container">
    <img src={imageUrl} alt="" />
    <div className="well">
      <h2>WHERE THE STORY BEGINS.</h2>
      <p>
        Integer id erat ligula. Vivamus eu turpis posuere, vehicula magna
        mattis,pellentesque orci. Cras consequat, leo id dignissim porttitor,
        lorem nulla imperdiet felis, vitae fermentum risus lorem ac lacus.
        Mauris eget maximus nisl. Proin molestie quam et luctus maximus.{" "}
      </p>
      <a href="#">LEARN MORE</a>
    </div>
  </div>
);
