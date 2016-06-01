import React from 'react'
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
  render() {
    return (
      <section>
        <div className="row">
        {this.props.tshirts.map(function(tshirt, i){
          return <div className="col-md-4" key={i}>
            <div className="">
              <div id="imageSwap" className="carousel" data-ride="carousel" data-interval="false">
                <a className="view__tshirt--flip carousel-swap" href="#imageSwap" role="button" data-slide="prev">
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
                      <li className="button view__nav--link">
                        <a className="" href="#">
                          <i className="fa fa-exchange fa-2x" aria-hidden="true"></i>
                        </a>
                      </li>
                      <li className="button view__nav--link">
                        <a className="" href="#">
                          <i className="fa fa-heart-o fa-2x" aria-hidden="true"></i>
                        </a>
                      </li>
                      <li className="button view__nav--link">
                        <a className="shirtSize__icon--default" href="#">XL</a>
                      </li>
                      <li className="button view__nav--link">
                        <div className="color__current color">X</div>
                        <ul>
                          <li className="color"></li>
                          <li className="color"></li>
                          <li className="color"></li>
                          <li className="color"></li>
                        </ul>
                      </li>
                      <li className="button view__nav--link">
                        <a className="" href="#">
                          <i className="fa fa-shopping-cart fa-2x" aria-hidden="true"></i>
                        </a>
                      </li>
                    </ul>
                    <p className="view__tshirt--name">{tshirt.title}<span className="view__tshirt--price">{`$${tshirt.price}`}</span></p>
            </div>
          </div>
        })}
        </div>
      </section>


    )
  }
})
