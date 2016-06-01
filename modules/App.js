import React from 'react'
import ReactDOM from 'react-dom'
import Bootstrap from 'bootstrap-sass'

export default React.createClass({
  getDefaultProps(){
    return {
      tshirts: [
        {
          id: 1,
          imageUrlFront: "http://fillmurray.com/250/250",
          imageUrlBack: "http://placecage.com/250/250",
          title: "Save my Trees",
          price: 19

        },
        {
          id: 2,
          imageUrlFront: "http://fillmurray.com/250/250",
          imageUrlBack: "http://placecage.com/250/250",
          title: "Nature Lover",
          price: 19

        },
        {
          id: 3,
          imageUrlFront: "http://fillmurray.com/250/250",
          imageUrlBack: "http://placecage.com/250/250",
          title: "Forrest Walk",
          price: 19

        }
      ]
    }
  },
  getInitialState(){
    return {
      1: false,
      2: false,
      3: false
    }
  },
  handleLikeButton(e){
    var newState = {};
    newState[ReactDOM.findDOMNode(e.target).dataset.id] = !this.state[ReactDOM.findDOMNode(e.target).dataset.id]
    this.setState(newState);
  },
  render() {
    return (
      <section>
        <div className="row">
        {this.props.tshirts.map(function(tshirt, i){
          return <div className="col-md-4" key={i}>
            <div className="">
              <div id={tshirt.id} className="carousel" data-ride="carousel" data-interval="false">
                <a className="view__tshirt--flip carousel-swap" href={`#${tshirt.id}`} role="button" data-slide="prev">
                  <i className="flip fa fa-exchange fa-2x" aria-hidden="true"></i>
                </a>
                <div className="carousel-inner">
                  <div className="item active">
                    <img src={tshirt.imageUrlFront} className="view__tshirt--front"/>
                  </div>
                  <div className="item">
                    <img src={tshirt.imageUrlBack} className="view__tshirt--back"/>
                  </div>
                </div>
              </div>
              <ul className="view__nav">
                <li className="btn btn-default view__nav--link">
                  <a className="carousel-swap" href={`#${tshirt.id}`} role="button" data-slide="prev">
                    <i className="flip fa fa-exchange fa-2x" aria-hidden="true"></i>
                  </a>
                </li>
                <li className="btn btn-default view__nav--link" onClick={this.handleLikeButton}>
                  <a className="active" href="#">
                    <span data-id={tshirt.id} className={`glyphicon ${this.state[tshirt.id] ? "glyphicon-heart" : "glyphicon-heart-empty"}`}></span>
                  </a>
                </li>
                <div className="btn btn-default dropup view__nav--link">
                  <li className="dropdown-toggle" id="dropdownMenu2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    XL
                  </li>
                  <ul className="dropdown-menu" aria-labelledby="dropdownMenu2">
                    <li><a href="#">XL</a></li>
                    <li><a href="#">L</a></li>
                    <li><a href="#">M</a></li>
                    <li><a href="#">S</a></li>
                  </ul>
                </div>

                <div className="btn btn-default dropup view__nav--link">
                  <li className="dropdown-toggle" id="dropdownMenu2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    <div className="color color--blue"></div>
                  </li>
                  <ul className="dropdown-menu dropdown-color" aria-labelledby="dropdownMenu2">
                    <li>
                      <div className="color color--red"></div>
                    </li>
                    <li>
                      <div className="color color--green"></div>
                    </li>
                    <li>
                      <div className="color color--lightBlue"></div>
                    </li>
                    <li>
                      <div className="color color--yellow"></div>
                    </li>
                  </ul>
                </div>

                <li className="btn btn-default view__nav--link">
                  <a className="" href="#">
                    <i className="fa fa-shopping-cart fa-2x" aria-hidden="true"></i>
                  </a>
                </li>
              </ul>
              <p className="view__tshirt--name">{tshirt.title}<span className="view__tshirt--price">{`$${tshirt.price}`}</span></p>
            </div>
          </div>
        }, this)}
        </div>
      </section>


    )
  }
})
