import React, { Component } from "react";
import Buttons from './Buttons'
import axios from "axios";
import FilmList from './FilmList'

let baseUrl=`https://api.themoviedb.org/3`

class Main extends Component {
    constructor() {
        super();
        this.state = {
            films: [],
            filteredText: ''
    };
  }
  

  
  // The FOLLOWING COMMENTED CODE WORKS WITH TMDB API 
  // Assumes that all methods work with TMDB and doesn't throw an error

  //   componentDidMountwithTMDB=()=>{
  //       axios.get(`https://api.themoviedb.org/3/movie/top_rated?api_key=---MYAPIKEY---&language=en-US&page=1`)
  //       .then(res=>{ console.log(res);
  //         this.setState({
  //             films: res.data.results
  //         }) }).catch(err=>console.log(`OH MY GOD, WE HAVE AN ERROR: ${err}`));
  //   }

  filterFilmswithTMDB =()=>{}

  createFilmwithTMDB =()=>{}

  removeFilmwithTMDB =()=>{}

  updateFilmwithTMDB =()=>{}

//   handleChange = (e) => {
//     let { name, value } = e.target;
//   this.setState({
//       [name]: value
//   });
// };





  // The FOLLOWING CODE works with a CUSTOM EXPRESS SERVER with 'DUMMY' DATA

  handleChange = (e) => {
      let { name, value } = e.target;
    this.setState({
        [name]: value
    });
};

createFilm = (film)=>{
    axios.post('/api/films', film)
    .then(res => this.setState({
        films: res.data
    }))
    .catch(err=>console.log(err))
}

removeFilm = (num)=>{

    setTimeout(()=>{
    axios.delete(`/api/films/${num}`)
    .then(res => this.setState({
        films: res.data
    }))
    .catch(err => console.log('OH MY GOD:', err))
    }, 300);
    }
    // setTimeout to make it more "natural"


  updateFilm = (film)=>{

    axios.put(`/api/films/${film.id}`, film).then(res => {
      this.setState({
        films: res.data
      })
    }).catch(err => console.log('OH MY GOD:',err))
    
  }

  filterFilms = (genre)=>{
    axios.get(`/api/films?genre=${genre}`)
        .then(res => {
        console.log(res);
        this.setState({
            films: res.data
        })
    })
        .catch(err => console.log(err))
  }

  // even though, client and server endpoints for filter method are different, Express takes care of req.query

  
  componentDidMount(){
      axios.get('/api/films')
      .then(res => {
          console.log(res);
          this.setState({
              films: res.data
            })
      })
      .catch(err => console.log(err))
    }
    
    
  render() {
    return (<div className="Main">
                <Buttons films={this.state.films} handleChange={this.handleChange} createFilm={this.createFilm} filteredText={this.state.filteredText} filterFilms={this.filterFilms}/>
                <FilmList films={this.state.films} removeFilm={this.removeFilm} updateFilm={this.updateFilm}/>
            </div>)
  }
}

export default Main;
