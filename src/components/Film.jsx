import React, { Component } from 'react'

class Film extends Component {
    constructor(props){
        super(props);

        this.state = {
            id: props.film.id,
            title: props.film.title,
            genre: props.film.genre,
            rating: props.film.rating,
            imageUrl: props.film.imageUrl,
            edit: false
        };
    }

    handleChange = (e)=>{
        this.setState({
          [e.target.name]: e.target.value
        })
      }

      handleEditButton = (e)=>{
        if (e.target.name === 'The Godfather Part II' || e.target.name === 'The Shining' || e.target.name === 'Pulp Fiction' || e.target.name === 'Goodfellas' || e.target.name === 'Interstellar') {
          alert('dont f with the classics')
      }
      else {
        this.setState({
          edit: true
        })
      }
      }

      handleUpdateButton = () => {
        setTimeout(()=>{this.props.updateFilm(this.state);
        console.log(this.state)
        this.setState({
          edit: false
        })
      }, 300);
      }

  render() {
    return this.state.edit ? (
        <div style={{ display: 'flex', flexDirection: 'column' }}>
            <input type="text" name="title" value={this.state.title} placeholder="Enter New Title Here" onChange={this.handleChange} />
            <input type="text" name="genre" value={this.state.genre} placeholder="Enter New Genre Here" onChange={this.handleChange} />
            <input type="text" name="rating" value={this.state.rating} placeholder="Enter New Rating Here" onChange={this.handleChange} />
            <input type="text" name="imageUrl" value={this.state.imageUrl} placeholder="Enter New Image Here" onChange={this.handleChange} />
            <button onClick={()=>this.handleUpdateButton()}>Update</button>
            <button onClick={()=>{this.props.removeFilm(this.props.id)}} >Delete</button>
        </div>
    ) : (
        <div style={{ display: 'flex', flexDirection: 'column' }}>
           <h3>{this.props.title}</h3>
           <h4>Rating: {this.props.rating}</h4>
           <img src={this.props.imageUrl} alt="" width="210" height="320" />
           <button className='edit-delete-buttons' name={this.props.title} onClick={(e)=>{this.handleEditButton(e)}} >Edit</button>
           <button className='edit-delete-buttons' onClick={()=>{this.props.removeFilm(this.props.id)}} >Delete</button>
        </div>
    )
  }
}

export default Film


