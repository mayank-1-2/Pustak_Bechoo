// import { NavLink } from 'react-router-dom';
import './Pustak.css';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Header extends Component {

  render() {
    return (
     <div className="Header" >
      
          <nav className="navbar navbar-expand-lg navbar-light bg-light menu__primary" style={{position: "fixed" , top: "0px" , width: "100%" ,zIndex:"1000"}}>
            <a className="navbar-brand ml-3" href=",w#">Pustak Bechoo</a>
            <br />

            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav mr-auto">
                <li className="nav-item active">
                  <a className="nav-link pr-3" href="home">Home <span className="sr-only">(current)</span></a>
                </li>
                <li className="nav-item dropdown">
                  <a className="nav-link dropdown-toggle pr-3" href="hv#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Categories
                      </a>
                  <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                    <a className="dropdown-item" href="html#">Action and Adventure</a>
                    <a className="dropdown-item" href="html#">Classics</a>
                    <a className="dropdown-item" href="html#">Comic Book</a>
                    <a className="dropdown-item" href="html#">Friction</a>
                    <a className="dropdown-item" href="html#">Non Friction</a>
                    <a className="dropdown-item" href="html#">Best Sellers</a>
                    <div className="dropdown-divider"></div>
                    <a className="dropdown-item" href="yu#">For more Add cont</a>
                  </div>
                </li>
              </ul>
              <form className="form-inline my-2 my-lg-0">
                <ul className="navbar-nav mr-auto">
                  <li><Link className="nav-link  pr-3" to="/login">Login</Link></li>
                  <li><Link className="nav-link  pr-2" to="/signup">SignUp</Link></li>
                  <li>
                    <a href="https://secretayush.github.io/Pustak-bechoo/Pustakbecho/home.html#" className="nav-link mr-auto"><i className="material-icons mr-3" style={{ color: "black", size: "30px" }}>add_shopping_cart</i>
                    </a>
                  </li>
                </ul>
              </form>
            </div>
          </nav>




     </div>
    );
  }
}



