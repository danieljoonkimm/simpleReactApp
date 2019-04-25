import React, { Component } from "react";
import dummyImg from "../../../../public/images/dummyImg.jpg";
import "./categoryCollection.scss";

class CategoryCollection extends Component {
  constructor() {
    super();

    this.state = {
      categories: [
        {
            category_id: 74,
            parent_id: 0,
            name: "women",
            categories: []
        },
        {
            category_id: 74,
            parent_id: 0,
            name: "shoes",
            categories: []
        }
      ],
      eachCategory: []
    };
  }

  componentWillMount() {
    //api call
      //this.setState to categories = response.data
        //use logic below to map
          //will render
            //need to see how the componentWillUpdate for categories within the category
    {
      this.state.categories.map(categories => {
        let categoryName = categories;
        this.state.eachCategory.push(categoryName.name);
      });
    }
  }

  render() {
    return (
      <div className="container" id="categoryCollection_container">
        <h1>CATEGORY COLLECTION</h1>
        <div className="row">
          <div className="col-xs-2 col-sm-2 col-sm-2">
            <div className="col-xs-12 col-sm-12 col-md-12">
              {this.state.eachCategory.map( (category) => {
                return <ul><li>{category}</li></ul>
              })}
            </div>
          </div>

          <div className="col-xs-10 col-sm-10 col-md-10">
            <div className="row">
              <div className="col-xs-3 col-sm-3 col-sm-3">
                <div className="col-xs-12 col-sm-12 col-md-12">
                  <img className="img-responsive" alt="" src={dummyImg} />
                </div>
              </div>

              <div className="col-xs-3 col-sm-3 col-sm-3">
                <div className="col-xs-12 col-sm-12 col-md-12">
                  <img className="img-responsive" alt="" src={dummyImg} />
                </div>
              </div>

              <div className="col-xs-3 col-sm-3 col-sm-3">
                <div className="col-xs-12 col-sm-12 col-md-12">
                  <img className="img-responsive" alt="" src={dummyImg} />
                </div>
              </div>

              <div className="col-xs-3 col-sm-3 col-sm-3">
                <div className="col-xs-12 col-sm-12 col-md-12">
                  <img className="img-responsive" alt="" src={dummyImg} />
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-xs-4 col-sm-4 col-md-4">
                <div className="col-xs-6 col-sm-6 col-md-6">
                  <img className="img-responsive" alt="" src={dummyImg} />
                </div>

                <div className="col-xs-6 col-sm-6 col-md-6">
                  <img className="img-responsive" alt="" src={dummyImg} />
                </div>
              </div>

              <div className="col-xs-4 col-sm-4 col-md-4">
                <div className="col-xs-6 col-sm-6 col-md-6">
                  <img className="img-responsive" alt="" src={dummyImg} />
                </div>

                <div className="col-xs-6 col-sm-6 col-md-6">
                  <img className="img-responsive" alt="" src={dummyImg} />
                </div>
              </div>

              <div className="col-xs-4 col-sm-4 col-md-4">
                <div className="col-xs-6 col-sm-6 col-md-6">
                  <img className="img-responsive" alt="" src={dummyImg} />
                </div>

                <div className="col-xs-6 col-sm-6 col-md-6">
                  <img className="img-responsive" alt="" src={dummyImg} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default CategoryCollection;
