import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from 'react-router-dom';
import './Favorites.css';
import {removeMovieFavorite} from '../../actions/index'
import { NavLink } from "react-router-dom";
export class ConnectedList extends Component {

  render() {
    return (
      <div>
         <NavLink to="./"   className="btn"> volver</NavLink>
        <ul id ='moviesList'>
          {
            this.props.favorites.length > 0 ? this.props.favorites.map(movie =>
              <div className='movieCard'>
                <Link to={`/movie/${movie.imdbID}`}>
                <img alt="img" className='poster' src={movie.Poster}/> 
                </Link>
                <button  className='fav' onClick={() => this.props.removeMovieFavorite(movie.imdbID)}>❌</button>
              </div> 
              )
              : <h1 className="nomoviesyet">No hay peliculas favoritas, agregalas...</h1>
          }
        </ul>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
/*     movies: state.moviesLoaded, */
    favorites: state.moviesFavourites,
   /*  detail: state.movieDetail */
  };
}

function mapDispatchToProps(dispatch) {
  return {
    /* addMovieFavorite: movie => dispatch(addMovieFavorite(movie)),
    getMovies: title => dispatch(getMovies(title)), */
    removeMovieFavorite: idMovie => dispatch(removeMovieFavorite(idMovie)),
/*     getMovieDetail: id => dispatch(getMovieDetail(id)) */
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ConnectedList);