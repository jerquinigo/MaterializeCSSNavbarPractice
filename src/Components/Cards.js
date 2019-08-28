import React, { Component } from "react";

class Cards extends Component {
  displayCard = () => {
    return (
      <div className="card">
        <div className="card-image waves-effect waves-block waves-light">
          <img
            className="activator"
            src="https://i.ytimg.com/vi/yCMePBq64MI/maxresdefault.jpg"
            alt=""
          />
        </div>
        <div className="card-content">
          <span className="card-title activator grey-text text-darken-4">
            Card Title<i class="material-icons right">more_vert</i>
          </span>
          <p>
            <a href="#">This is a link</a>
          </p>
        </div>

        <div class="card-reveal">
          <span class="card-title grey-text text-darken-4">
            Card Title<i class="material-icons right">close</i>
          </span>
          <p>
            Here is some more information about this product that is only
            revealed once clicked on.
          </p>
        </div>
      </div>
    );
  };

  render() {
    return <div>{this.displayCard()}</div>;
  }
}

export default Cards;
