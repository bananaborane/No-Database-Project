import React, { Component } from 'react'
import Film from './Film'

class FilmList extends Component {

  render() {
      let { films, updateFilm, removeFilm } = this.props
      let mappedFilms = (films.length) ? (films.map((film)=>{
        return ( <div key={film.id}>
          <Film key={film.id} film={film} title={film.title} rating={film.rating} imageUrl={film.imageUrl} id={film.id} genre={film.genre} removeFilm={removeFilm} updateFilm={updateFilm} />
        </div> )
      })) : ( <div className="no-display"><h2> You have no films to display, add some!</h2></div> )
    return (
      <div style={{ display:"flex", flexDirection:"row", justifyContent:'center', alignItems:'center', flexWrap:'wrap', paddingTop: 66 }}>
          {mappedFilms}
      </div>
    )
  }
}

export default FilmList
