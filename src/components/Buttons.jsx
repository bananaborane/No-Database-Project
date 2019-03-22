import React, { Component } from 'react'

// theres only like 2 buttons here lol

class Buttons extends Component {
    constructor(){
        super();
        this.state={
            title:'',
            genre:'',
            rating: '',
            imageUrl:'',
            edit: false
        }
    }

    handleChange = (e) => {
        let { name, value } = e.target;
        this.setState({
          [name]: value
        });
      };

      handleFilterButton = ()=>{
          let { filteredText, filterFilms  } = this.props;
          filterFilms(filteredText);
      }

    createFilmButton = ()=>{
       setTimeout(()=>{
        let { title, genre, rating, imageUrl } = this.state
        let realImageUrl = imageUrl.startsWith('http') ? (imageUrl) : (null);
        // clever conditional above but not fool proof
        let newFilm = {
            title: title || 'Movie Title',
            genre: genre || 'Rom Com',
            rating: parseInt(rating) || 100,
            imageUrl: realImageUrl || "https://www.ulyssesroom.com/g/007-template-ideas-movie-poster.jpg"
        }
        this.props.createFilm(newFilm);
        this.setState({
            title:'',
            genre:'',
            rating: '',
            imageUrl:''
        })}, 450)
        // setTimeout to make it more "natural"
    }

  render() {
    return (
      <div className='the-section'>
          <section className="create-section">
            <p>Create a New Film here:</p>
            <input size='26' type="text" name="title" placeholder="Enter Film Title here" onChange={this.handleChange} value={this.state.title} />
            <input size='26' type="text" name="genre" placeholder="Enter Film Genre here" onChange={this.handleChange} value={this.state.genre} />
            <input size='26' maxLength='3' type="text" name="rating" placeholder="Enter Film Rating here (0-100)" onChange={this.handleChange} value={this.state.rating} />
            <input size='26' type="text" name="imageUrl" placeholder="Enter Film Image URL here" onChange={this.handleChange} value={this.state.imageUrl} />
            <button className="create-and-filter-buttons" onClick={()=>this.createFilmButton()}>Create Film</button>
          </section>
          <section className="filter-section">
            <p>Filter the List of Films here:</p>
            <input type="text" name='filteredText' placeholder="Filter Films by Genre" onChange={this.props.handleChange} value={this.props.filteredText} />
            <button className='create-and-filter-buttons' onClick={()=>this.handleFilterButton()} >Filter Films</button>
          </section>
      </div>
    )
  }
}

export default Buttons
