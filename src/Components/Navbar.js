import React, { Component } from "react";
import $ from "jquery";
import M from "materialize-css";

class Navbar extends Component {
  // constructor() {
  //   super();
  // }

  componentDidMount() {
    // $(document).ready(() => {
    //   debugger;
    //   $(".sidenav").sidenav();
    // });
    document.addEventListener("DOMContentLoaded", function() {
      var elems = document.querySelectorAll(".sidenav");
      M.Sidenav.init(elems);
    });
  }

  displayNavbar = () => {
    return (
      <div>
        <nav className="nav-wrapper indigo">
          <div className="container">
            <a href="#" className="sidenav-trigger" data-target="mobile-links">
              <i className="material-icons">menu</i>
            </a>

            <ul className="right hide-on-med-and-down">
              <li>link 1</li>
              <li>link 2</li>
              <li>link 3</li>
            </ul>
          </div>
        </nav>

        <ul className="sidenav" id="mobile-links">
          <li>link 1</li>
          <li>link 2</li>
          <li>link 3</li>
        </ul>
      </div>
    );
  };

  toggleSideNav = () => {
    $(document).ready(function() {
      $(".sidenav").sidenav();
    });
  };

  render() {
    return <div>{this.displayNavbar()}</div>;
  }
}

// <i className="material-icons">Menu</i>

export default Navbar;
