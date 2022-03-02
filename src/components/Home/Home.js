import React, { Component } from "react";
import "./Home.css";
import peli from "../../myAvatar.png";
import { NavLink } from "react-router-dom";
import home from "../../home.png";
import fav from "../../star.png";




export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      
    };
  }


  render() {
    return (
      
      <div >
     
        <nav>
        <ul className="list">
          <li className="list-item">
            <NavLink exact to="/">
              <img alt="home" src={home} width="30" heigth="30" />
            </NavLink>
            <NavLink to="/favs">
              <img alt="fav" src={fav} width="30" height="30" />
            </NavLink>
          </li>
        </ul>
      </nav>


    

      <div className="contenedor">


        <div className="title">
          <h1>Bienvenido a la app de 
          Sergio Cepeda!</h1>
        
        </div>
        <img alt="peli" className="pelicula" src={peli}/>
        </div>
      </div>

      
    );
  }
}
