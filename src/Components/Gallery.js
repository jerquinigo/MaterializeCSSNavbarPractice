import React, { Component } from "react";
import M from "materialize-css";
import "./CSS/Gallery.css";

class Gallery extends Component {
  constructor() {
    super();
  }

  componentDidMount() {
    document.addEventListener("DOMContentLoaded", function() {
      var elems = document.querySelectorAll(".materialboxed");
      M.Materialbox.init(elems);
    });
  }

  displayImage = () => {
    return (
      <div>
        <img
          className="materialboxed"
          width="40%"
          src="https://i.pinimg.com/originals/a7/b2/17/a7b21733d0bc8fe47b67b53f38d2ef04.jpg"
          alt=""
        />
      </div>
    );
  };

  render() {
    return <div>{this.displayImage()}</div>;
  }
}

export default Gallery;
