import React, { Component } from "react";
import dummyImg from "../../../../public/images/dummyImg.jpg";
import "./newVendors.scss";

class NewVendors extends Component {
  constructor() {
    super();

    this.state = {};
  }
  render() {
    return (
      <div className="container" id="highlightVendors_container">
        <h1>NEW VENDORS</h1>
        <div className="row" id="highlightVendors_row">
          <div className="col-xs-3 col-sm-3 col-md-3">
            <div className="col-xs-12 col-sm-12 col-md-12">
              <img
                className="img-responsive highlightVendors_bigImage"
                alt=""
                src="https://dummyimage.com/400x600/26628a/fff"
              />
            </div>
          </div>

          <div className="col-xs-3 col-sm-3 col-md-3">
            <div className="row">
              <div className="col-xs-6 col-sm-6 col-md-6">
                <img
                  className="img-responsive"
                  id="highlightVendors_topLeft"
                  alt=""
                  src="https://dummyimage.com/400x600/26628a/fff"
                />
              </div>

              <div className="col-xs-6 col-sm-6 col-md-6">
                <img
                  className="img-responsive"
                  id="highlightVendors_topRight"
                  alt=""
                  src="https://dummyimage.com/400x600/26628a/fff"
                />
              </div>
            </div>

            <div className="row">
              <div className="col-xs-6 col-sm-6 col-md-6">
                <img
                  className="img-responsive"
                  id="highlightVendors_bottomLeft"
                  alt=""
                  src="https://dummyimage.com/400x600/26628a/fff"
                />
              </div>

              <div className="col-xs-6 col-sm-6 col-md-6">
                <img
                  className="img-responsive"
                  id="highlightVendors_bottomRight"
                  alt=""
                  src="https://dummyimage.com/400x600/26628a/fff"
                />
              </div>
            </div>
          </div>

          <div className="col-xs-3 col-sm-3 col-md-3">
            <div className="col-xs-12 col-sm-12 col-md-12">
              <img
                className="img-responsive highlightVendors_bigImage"
                alt=""
                src="https://dummyimage.com/400x600/26628a/fff"
              />
            </div>
          </div>

          <div className="col-xs-3 col-sm-3 col-md-3">
            <div className="row">
              <div className="col-xs-6 col-sm-6 col-md-6">
                <img
                  className="img-responsive"
                  id="highlightVendors_topLeft"
                  alt=""
                  src="https://dummyimage.com/400x600/26628a/fff"
                />
              </div>

              <div className="col-xs-6 col-sm-6 col-md-6">
                <img
                  className="img-responsive"
                  id="highlightVendors_topRight"
                  alt=""
                  src="https://dummyimage.com/400x600/26628a/fff"
                />
              </div>
            </div>

            <div className="row">
              <div className="col-xs-6 col-sm-6 col-md-6">
                <img
                  className="img-responsive"
                  id="highlightVendors_bottomLeft"
                  alt=""
                  src="https://dummyimage.com/400x600/26628a/fff"
                />
              </div>

              <div className="col-xs-6 col-sm-6 col-md-6">
                <img
                  className="img-responsive"
                  id="highlightVendors_bottomRight"
                  alt=""
                  src="https://dummyimage.com/400x600/26628a/fff"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default NewVendors;
