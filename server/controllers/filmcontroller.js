let id = 1;
let films = [
    {
        id: id++,
        title: 'The Godfather Part II',
        genre: 'Drama',
        rating: 100,
        imageUrl: 'https://m.media-amazon.com/images/M/MV5BMWMwMGQzZTItY2JlNC00OWZiLWIyMDctNDk2ZDQ2YjRjMWQ0XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg'
    },
    {
        id: id++,
        title:'The Shining',
        rating: 100,
        genre: 'Thriller',
        imageUrl: 'https://ih1.redbubble.net/image.90216314.5236/flat,550x550,075,f.jpg'
    },
    {
        id: id++,
        title: 'Goodfellas',
        genre: 'Drama',
        rating: 100,
        imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/51rOnIjLqzL.jpg'
    },
    {
        id: id++,
        title: 'Pulp Fiction',
        genre: 'Action',
        rating: 100,
        imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/71rg3yrbSOL._SY741_.jpg'
    },
    {
        id: id++,
        title: 'Interstellar',
        genre: 'Science Fiction',
        rating: 100,
        imageUrl: 'https://i.pinimg.com/originals/1d/55/0b/1d550b56f35085ed5b26b88d67ed8ddd.png'
    }
];

module.exports = {
    get: (req, res)=>{
        let result = films;
        console.log(req.query);
        if (req.query.genre == 'all' || req.query.genre == 'All' || req.query.genre == 'ALL'){
            result = result;
        }
         else if (req.query.genre){
            result = result.filter((val)=>{return val.genre.toLowerCase() === req.query.genre.toLowerCase()})
        } 
        else if(req.query.genre == ''){
            result=result;
        }
        res.send(result)
    },
    post: (req, res)=>{
        let { title, genre, rating, imageUrl } = req.body;
        let realImageUrl = imageUrl.startsWith('http') ? (imageUrl) : (null)
        // beautiful conditional image rendering with code above
        if (title === 'The Godfather Part II' || title === 'The Shining' || title === 'Pulp Fiction' || title === 'Goodfellas' || title === 'Interstellar') {
            rating = 100;
        }
        // the classics must have a rating of 100
        let newFilm = {
            id: id++,
            title: title || 'Movie Title',
            genre: genre || 'Rom Com',
            rating: rating || 100,
            imageUrl: realImageUrl || 'https://www.ulyssesroom.com/g/007-template-ideas-movie-poster.jpg'
        };
        newFilm.id = id++;
        films.push(newFilm);
        res.send(films)
    },
    put: (req, res)=>{
            let  { title, genre, rating, imageUrl } = req.body;
            let realImageUrl = imageUrl.startsWith('http') ? (imageUrl) : (null)
            if (title === 'The Godfather Part II' || title === 'The Shining' || title === 'Pulp Fiction' || title === 'Goodfellas' || title === 'Interstellar') {
                rating = 100;
            }
            // the classics must have a rating of 100
            let updatedFilm = {
                id: 1 * req.params.id,
                title: title || 'Movie Title',
                genre: genre || 'Rom Com',
                rating: parseInt(rating) || 100,
                imageUrl: realImageUrl || 'https://www.ulyssesroom.com/g/007-template-ideas-movie-poster.jpg'
            }
            let indy = films.findIndex((film)=>{ return 1*film.id === 1*req.params.id });
            films.splice(indy, 1, updatedFilm);
            // updated film will take place of the original in the code above
            res.send(films);
        
    },
    delete: (req, res) => {
        let { id } = req.params
        let indy = films.findIndex(val => parseInt(val.id) === parseInt(id))
        films.splice(indy, 1)
        res.send(films)
    }
}