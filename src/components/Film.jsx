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
        let { name } = e.target
        if (name === 'The Godfather Part II' || name === 'The Shining' || name === 'Pulp Fiction' || name === 'Goodfellas' || name === 'Interstellar') {
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
    let { title, genre, rating, imageUrl } = this.state
    return this.state.edit ? (
        <div className='edit-delete-buttons' style={{ display: 'flex', flexDirection: 'column' }}>
            <input type="text" name="title" value={title} placeholder="Enter New Title Here" onChange={this.handleChange} />
            <input type="text" name="genre" value={genre} placeholder="Enter New Genre Here" onChange={this.handleChange} />
            <input type="text" name="rating" value={rating} placeholder="Enter New Rating Here" onChange={this.handleChange} />
            <input type="text" name="imageUrl" value={imageUrl} placeholder="Enter New Image Here" onChange={this.handleChange} />
            <button onClick={()=>this.handleUpdateButton()}>Update</button>
            <button onClick={()=>{this.props.removeFilm(this.props.id)}} >Delete</button>
        </div>
    ) : (
        <div className="each-film" style={{ display: 'flex', flexDirection: 'column' }}>
          <div className="col-lg-3 col-md-4 col-sm-6 col-xs-12">
            <div className="hovereffect">
            <img className="img-responsive" src={this.props.imageUrl} alt="" width="210" height="320" />
              <div className="overlay">
                <h3>{this.props.title}</h3>
                <h3>Rating: {this.props.rating}</h3>
              </div>
            </div>
          </div>
           <button className='edit-delete-buttons' name={this.props.title} onClick={(e)=>{this.handleEditButton(e)}} >Edit</button>
           <button className='edit-delete-buttons' onClick={()=>{this.props.removeFilm(this.props.id)}} >Delete</button>
        </div>
    )
  }
}

export default Film


