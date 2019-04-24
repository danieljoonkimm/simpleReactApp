import React, { Component } from "react";
import Vendors from './vendors/index.jsx';
import FeaturedItems from './featuredItems/index.jsx';
import HighlightVendors from './highlightVendors/index.jsx';
import LookBook from './lookbook/index.jsx';
import "./landing.scss";

class Landing extends Component {
  constructor() {
    super();

    this.state = {};
  }
  render() {
    return (
      <div>
        <Vendors/>
        <FeaturedItems/>
        <HighlightVendors/>
        <LookBook/>
      </div>
    );
  }
}

export default Landing;