import React from 'react';
import Favorites from "./components/Favorites/Favorites";
import Buscador from "./components/Buscador/Buscador";
import Movie from "./components/Movie/Movie";
import NavBar from "./components/NavBar/NavBar";
import Home from "./components/Home/Home";
import { Route } from "react-router-dom"
import ThemeProvider from "./context/ThemeProvider";
import './App.css';

function App() {
  return (
    <ThemeProvider>
    <NavBar/>
    <Route exact path="/" component={Home} />
      <Route path="/favs" component={Favorites} />
      <Route path="/movie/:id" component={Movie} />
      <Route path="/search/:page" component={Buscador} />
    </ThemeProvider>
  );
}

export default App;
