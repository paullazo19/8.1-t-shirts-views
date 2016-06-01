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
      <section className="row">
      {this.props.tshirts.map(function(tshirt, i){
        return <div className="col-md-4" key={i}>
          <div className="">
            <div id="imageSwap" className="carousel" data-ride="carousel" data-interval="false">
              <div className="carousel-inner">
                <div className="item active">
                  <img src={tshirt.imageUrlFront} className="view__tshirt--front"/>
                </div>
                <div className="item">
                  <img src={tshirt.imageUrlBack} className="view__tshirt--back"/>
                </div>
              </div>
              <a className="view__tshirt--flip carousel-swap" href="#imageSwap" role="button" data-slide="prev">
                <i className="fa fa-exchange" aria-hidden="true"></i>
              </a>
            </div>
                  <ul className="view__nav">
                    <li className="button view__nav--link">
                      <a className="" href="#">
                        <i className="fa fa-exchange" aria-hidden="true"></i>
                      </a>
                    </li>
                    <li className="button view__nav--link">
                      <a className="" href="#">
                        <i className="fa fa-heart-o" aria-hidden="true"></i>
                      </a>
                    </li>
                    <li className="button view__nav--link">
                      <a className="" href="#">XL</a>
                    </li>
                    <li className="button view__nav--link">
                      <div className="col or__current color"></div>
                      <a className="" href="#"></a>
                      <ul>
                        <li className="color"></li>
                        <li className="color"></li>
                        <li className="color"></li>
                        <li className="color"></li>
                      </ul>
                    </li>
                    <li className="button view__nav--link">
                      <a className="" href="#">
                        <i className="fa fa-shopping-cart" aria-hidden="true"></i>
                      </a>
                    </li>
                  </ul>
                  <p className="view__tshirt--name">{tshirt.title}<span className="view__tshirt--price">{tshirt.price}</span></p>
          </div>
        </div>
      })}

      <div className="dropup">
        <button className="btn btn-default dropdown-toggle" type="button" id="dropdownMenu2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Dropup
          <span className="caret"></span>
        </button>
        <ul className="dropdown-menu" aria-labelledby="dropdownMenu2">
          <li><a href="#">Action</a></li>
          <li><a href="#">Another action</a></li>
          <li><a href="#">Something else here</a></li>
          <li role="separator" className="divider"></li>
          <li><a href="#">Separated link</a></li>
        </ul>
      </div>


      </section>


    )
  }
})
