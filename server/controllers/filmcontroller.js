// let TMDBGenres = ({
//     "genres": [
//       {
//         "id": 28,
//         "name": "Action"
//       },
//       {
//         "id": 12,
//         "name": "Adventure"
//       },
//       {
//         "id": 16,
//         "name": "Animation"
//       },
//       {
//         "id": 35,
//         "name": "Comedy"
//       },
//       {
//         "id": 80,
//         "name": "Crime"
//       },
//       {
//         "id": 99,
//         "name": "Documentary"
//       },
//       {
//         "id": 18,
//         "name": "Drama"
//       },
//       {
//         "id": 10751,
//         "name": "Family"
//       },
//       {
//         "id": 14,
//         "name": "Fantasy"
//       },
//       {
//         "id": 36,
//         "name": "History"
//       },
//       {
//         "id": 27,
//         "name": "Horror"
//       },
//       {
//         "id": 10402,
//         "name": "Music"
//       },
//       {
//         "id": 9648,
//         "name": "Mystery"
//       },
//       {
//         "id": 10749,
//         "name": "Romance"
//       },
//       {
//         "id": 878,
//         "name": "Science Fiction"
//       },
//       {
//         "id": 10770,
//         "name": "TV Movie"
//       },
//       {
//         "id": 53,
//         "name": "Thriller"
//       },
//       {
//         "id": 10752,
//         "name": "War"
//       },
//       {
//         "id": 37,
//         "name": "Western"
//       }
//     ]
//   })

// // let parsedTMDBGenres = TMDBGenres.genres.forEach((elem)=>{JSON.parse(elem)})
// // why doesn't this work?

// let TMDBTopRated = {
//     "page": 1,
//     "total_results": 7036,
//     "total_pages": 352,
//     "results": [
//         {
//             "vote_count": 2013,
//             "id": 19404,
//             "video": false,
//             "vote_average": 9,
//             "title": "Dilwale Dulhania Le Jayenge",
//             "popularity": 13.486,
//             "poster_path": "/uC6TTUhPpQCmgldGyYveKRAu8JN.jpg",
//             "original_language": "hi",
//             "original_title": "दिलवाले दुल्हनिया ले जायेंगे",
//             "genre_ids": [
//                 35,
//                 18,
//                 10749
//             ],
//             "backdrop_path": "/nl79FQ8xWZkhL3rDr1v2RFFR6J0.jpg",
//             "adult": false,
//             "overview": "Raj is a rich, carefree, happy-go-lucky second generation NRI. Simran is the daughter of Chaudhary Baldev Singh, who in spite of being an NRI is very strict about adherence to Indian values. Simran has left for India to be married to her childhood fiancé. Raj leaves for India with a mission at his hands, to claim his lady love under the noses of her whole family. Thus begins a saga.",
//             "release_date": "1995-10-20"
//         },
//         {
//             "vote_count": 12553,
//             "id": 278,
//             "video": false,
//             "vote_average": 8.7,
//             "title": "The Shawshank Redemption",
//             "popularity": 28.481,
//             "poster_path": "/9O7gLzmreU0nGkIB6K3BsJbzvNv.jpg",
//             "original_language": "en",
//             "original_title": "The Shawshank Redemption",
//             "genre_ids": [
//                 18,
//                 80
//             ],
//             "backdrop_path": "/j9XKiZrVeViAixVRzCta7h1VU9W.jpg",
//             "adult": false,
//             "overview": "Framed in the 1940s for the double murder of his wife and her lover, upstanding banker Andy Dufresne begins a new life at the Shawshank prison, where he puts his accounting skills to work for an amoral warden. During his long stretch in prison, Dufresne comes to be admired by the other inmates -- including an older prisoner named Red -- for his integrity and unquenchable sense of hope.",
//             "release_date": "1994-09-23"
//         },
//         {
//             "vote_count": 9614,
//             "id": 238,
//             "video": false,
//             "vote_average": 8.6,
//             "title": "The Godfather",
//             "popularity": 25.377,
//             "poster_path": "/rPdtLWNsZmAtoZl9PK7S2wE3qiS.jpg",
//             "original_language": "en",
//             "original_title": "The Godfather",
//             "genre_ids": [
//                 18,
//                 80
//             ],
//             "backdrop_path": "/6xKCYgH16UuwEGAyroLU6p8HLIn.jpg",
//             "adult": false,
//             "overview": "Spanning the years 1945 to 1955, a chronicle of the fictional Italian-American Corleone crime family. When organized crime family patriarch, Vito Corleone barely survives an attempt on his life, his youngest son, Michael steps in to take care of the would-be killers, launching a campaign of bloody revenge.",
//             "release_date": "1972-03-14"
//         },
//         {
//             "vote_count": 3815,
//             "id": 372058,
//             "video": false,
//             "vote_average": 8.6,
//             "title": "Your Name.",
//             "popularity": 20.747,
//             "poster_path": "/xq1Ugd62d23K2knRUx6xxuALTZB.jpg",
//             "original_language": "ja",
//             "original_title": "君の名は。",
//             "genre_ids": [
//                 10749,
//                 16,
//                 18
//             ],
//             "backdrop_path": "/7OMAfDJikBxItZBIug0NJig5DHD.jpg",
//             "adult": false,
//             "overview": "High schoolers Mitsuha and Taki are complete strangers living separate lives. But one night, they suddenly switch places. Mitsuha wakes up in Taki’s body, and he in hers. This bizarre occurrence continues to happen randomly, and the two must adjust their lives around each other.",
//             "release_date": "2016-08-26"
//         },
//         {
//             "vote_count": 7611,
//             "id": 424,
//             "video": false,
//             "vote_average": 8.5,
//             "title": "Schindler's List",
//             "popularity": 23.433,
//             "poster_path": "/yPisjyLweCl1tbgwgtzBCNCBle.jpg",
//             "original_language": "en",
//             "original_title": "Schindler's List",
//             "genre_ids": [
//                 18,
//                 36,
//                 10752
//             ],
//             "backdrop_path": "/cTNYRUTXkBgPH3wP3kmPUB5U6dA.jpg",
//             "adult": false,
//             "overview": "The true story of how businessman Oskar Schindler saved over a thousand Jewish lives from the Nazis while they worked as slaves in his factory during World War II.",
//             "release_date": "1993-12-15"
//         },
//         {
//             "vote_count": 5606,
//             "id": 240,
//             "video": false,
//             "vote_average": 8.5,
//             "title": "The Godfather: Part II",
//             "popularity": 18.951,
//             "poster_path": "/bVq65huQ8vHDd1a4Z37QtuyEvpA.jpg",
//             "original_language": "en",
//             "original_title": "The Godfather: Part II",
//             "genre_ids": [
//                 18,
//                 80
//             ],
//             "backdrop_path": "/gLbBRyS7MBrmVUNce91Hmx9vzqI.jpg",
//             "adult": false,
//             "overview": "In the continuing saga of the Corleone crime family, a young Vito Corleone grows up in Sicily and in 1910s New York. In the 1950s, Michael Corleone attempts to expand the family business into Las Vegas, Hollywood and Cuba.",
//             "release_date": "1974-12-20"
//         },
//         {
//             "vote_count": 7063,
//             "id": 129,
//             "video": false,
//             "vote_average": 8.5,
//             "title": "Spirited Away",
//             "popularity": 22.948,
//             "poster_path": "/oRvMaJOmapypFUcQqpgHMZA6qL9.jpg",
//             "original_language": "ja",
//             "original_title": "千と千尋の神隠し",
//             "genre_ids": [
//                 16,
//                 10751,
//                 14
//             ],
//             "backdrop_path": "/mnpRKVSXBX6jb56nabvmGKA0Wig.jpg",
//             "adult": false,
//             "overview": "A young girl, Chihiro, becomes trapped in a strange new world of spirits. When her parents undergo a mysterious transformation, she must call upon the courage she never knew she had to free her family.",
//             "release_date": "2001-07-20"
//         },
//         {
//             "vote_count": 2764,
//             "id": 324857,
//             "video": false,
//             "vote_average": 8.5,
//             "title": "Spider-Man: Into the Spider-Verse",
//             "popularity": 154.921,
//             "poster_path": "/iiZZdoQBEYBv6id8su7ImL0oCbD.jpg",
//             "original_language": "en",
//             "original_title": "Spider-Man: Into the Spider-Verse",
//             "genre_ids": [
//                 28,
//                 12,
//                 16,
//                 878,
//                 35
//             ],
//             "backdrop_path": "/uUiId6cG32JSRI6RyBQSvQtLjz2.jpg",
//             "adult": false,
//             "overview": "Miles Morales is juggling his life between being a high school student and being a spider-man. When Wilson \"Kingpin\" Fisk uses a super collider, others from across the Spider-Verse are transported to this dimension.",
//             "release_date": "2018-12-07"
//         },
//         {
//             "vote_count": 7852,
//             "id": 497,
//             "video": false,
//             "vote_average": 8.4,
//             "title": "The Green Mile",
//             "popularity": 23.193,
//             "poster_path": "/sOHqdY1RnSn6kcfAHKu28jvTebE.jpg",
//             "original_language": "en",
//             "original_title": "The Green Mile",
//             "genre_ids": [
//                 14,
//                 18,
//                 80
//             ],
//             "backdrop_path": "/Rlt20sEbOQKPVjia7lUilFm49W.jpg",
//             "adult": false,
//             "overview": "A supernatural tale set on death row in a Southern prison, where gentle giant John Coffey possesses the mysterious power to heal people's ailments. When the cell block's head guard, Paul Edgecomb, recognizes Coffey's miraculous gift, he tries desperately to help stave off the condemned man's execution.",
//             "release_date": "1999-12-10"
//         },
//         {
//             "vote_count": 6925,
//             "id": 637,
//             "video": false,
//             "vote_average": 8.4,
//             "title": "Life Is Beautiful",
//             "popularity": 20.131,
//             "poster_path": "/f7DImXDebOs148U4uPjI61iDvaK.jpg",
//             "original_language": "it",
//             "original_title": "La vita è bella",
//             "genre_ids": [
//                 35,
//                 18
//             ],
//             "backdrop_path": "/bORe0eI72D874TMawOOFvqWS6Xe.jpg",
//             "adult": false,
//             "overview": "A touching story of an Italian book seller of Jewish ancestry who lives in his own little fairy tale. His creative and happy life would come to an abrupt halt when his entire family is deported to a concentration camp during World War II. While locked up he tries to convince his son that the whole thing is just a game.",
//             "release_date": "1997-12-20"
//         },
//         {
//             "vote_count": 14550,
//             "id": 680,
//             "video": false,
//             "vote_average": 8.4,
//             "title": "Pulp Fiction",
//             "popularity": 28.627,
//             "poster_path": "/dM2w364MScsjFf8pfMbaWUcWrR.jpg",
//             "original_language": "en",
//             "original_title": "Pulp Fiction",
//             "genre_ids": [
//                 53,
//                 80
//             ],
//             "backdrop_path": "/4cDFJr4HnXN5AdPw4AKrmLlMWdO.jpg",
//             "adult": false,
//             "overview": "A burger-loving hit man, his philosophical partner, a drug-addled gangster's moll and a washed-up boxer converge in this sprawling, comedic crime caper. Their adventures unfurl in three stories that ingeniously trip back and forth in time.",
//             "release_date": "1994-09-10"
//         },
//         {
//             "vote_count": 405,
//             "id": 40096,
//             "video": false,
//             "vote_average": 8.4,
//             "title": "A Dog's Will",
//             "popularity": 6.651,
//             "poster_path": "/uHEmM49YphluJnGep8Ef1qwD2QX.jpg",
//             "original_language": "pt",
//             "original_title": "O Auto da Compadecida",
//             "genre_ids": [
//                 12,
//                 35
//             ],
//             "backdrop_path": "/alQqTpmEkxSLgajfEYTsTH6nAKB.jpg",
//             "adult": false,
//             "overview": "The lively João Grilo and the sly Chicó are poor guys living in the hinterland who cheat a bunch of people in a small Northeast Brazil town. But when they die, they have to be judged by Christ, the Devil and the Virgin Mary, before they are admitted to paradise.",
//             "release_date": "2000-09-15"
//         },
//         {
//             "vote_count": 18236,
//             "id": 155,
//             "video": false,
//             "vote_average": 8.4,
//             "title": "The Dark Knight",
//             "popularity": 30.81,
//             "poster_path": "/1hRoyzDtpgMU7Dz4JF22RANzQO7.jpg",
//             "original_language": "en",
//             "original_title": "The Dark Knight",
//             "genre_ids": [
//                 18,
//                 28,
//                 80,
//                 53
//             ],
//             "backdrop_path": "/hqkIcbrOHL86UncnHIsHVcVmzue.jpg",
//             "adult": false,
//             "overview": "Batman raises the stakes in his war on crime. With the help of Lt. Jim Gordon and District Attorney Harvey Dent, Batman sets out to dismantle the remaining criminal organizations that plague the streets. The partnership proves to be effective, but they soon find themselves prey to a reign of chaos unleashed by a rising criminal mastermind known to the terrified citizens of Gotham as the Joker.",
//             "release_date": "2008-07-16"
//         },
//         {
//             "vote_count": 4653,
//             "id": 539,
//             "video": false,
//             "vote_average": 8.4,
//             "title": "Psycho",
//             "popularity": 17.175,
//             "poster_path": "/81d8oyEFgj7FlxJqSDXWr8JH8kV.jpg",
//             "original_language": "es",
//             "original_title": "Psycho",
//             "genre_ids": [
//                 27
//             ],
//             "backdrop_path": "/3md49VBCeqY6MSNyAVY6d5eC6bA.jpg",
//             "adult": false,
//             "overview": "When larcenous real estate clerk Marion Crane goes on the lam with a wad of cash and hopes of starting a new life, she ends up at the notorious Bates Motel, where manager Norman Bates cares for his housebound mother. The place seems quirky, but fine… until Marion decides to take a shower.",
//             "release_date": "1960-06-16"
//         },
//         {
//             "vote_count": 15667,
//             "id": 550,
//             "video": false,
//             "vote_average": 8.4,
//             "title": "Fight Club",
//             "popularity": 29.185,
//             "poster_path": "/adw6Lq9FiC9zjYEpOqfq03ituwp.jpg",
//             "original_language": "en",
//             "original_title": "Fight Club",
//             "genre_ids": [
//                 18
//             ],
//             "backdrop_path": "/52AfXWuXCHn3UjD17rBruA9f5qb.jpg",
//             "adult": false,
//             "overview": "A ticking-time-bomb insomniac and a slippery soap salesman channel primal male aggression into a shocking new form of therapy. Their concept catches on, with underground \"fight clubs\" forming in every town, until an eccentric gets in the way and ignites an out-of-control spiral toward oblivion.",
//             "release_date": "1999-10-15"
//         },
//         {
//             "vote_count": 14094,
//             "id": 13,
//             "video": false,
//             "vote_average": 8.4,
//             "title": "Forrest Gump",
//             "popularity": 31.971,
//             "poster_path": "/yE5d3BUhE8hCnkMUJOo1QDoOGNz.jpg",
//             "original_language": "en",
//             "original_title": "Forrest Gump",
//             "genre_ids": [
//                 35,
//                 18,
//                 10749
//             ],
//             "backdrop_path": "/wMgbnUVS9wbRGAdki8fqxKU1O0N.jpg",
//             "adult": false,
//             "overview": "A man with a low IQ has accomplished great things in his life and been present during significant historic events—in each case, far exceeding what anyone imagined he could do. But despite all he has achieved, his one true love eludes him.",
//             "release_date": "1994-07-06"
//         },
//         {
//             "vote_count": 179,
//             "id": 517814,
//             "video": false,
//             "vote_average": 8.4,
//             "title": "Capernaum",
//             "popularity": 20.226,
//             "poster_path": "/dQWfLmt9aU6Xe6yNPmEZJoLOPxX.jpg",
//             "original_language": "ar",
//             "original_title": "کفرناحوم",
//             "genre_ids": [
//                 18
//             ],
//             "backdrop_path": "/8e0ETQmrgcP6R8TaVjd7o9NCGj9.jpg",
//             "adult": false,
//             "overview": "Zain, a 12-year-old boy scrambling to survive on the streets of Beirut, sues his parents for having brought him into such an unjust world, where being a refugee with no documents means that your rights can easily be denied.",
//             "release_date": "2018-10-06"
//         },
//         {
//             "vote_count": 3560,
//             "id": 389,
//             "video": false,
//             "vote_average": 8.4,
//             "title": "12 Angry Men",
//             "popularity": 19.196,
//             "poster_path": "/3W0v956XxSG5xgm7LB6qu8ExYJ2.jpg",
//             "original_language": "en",
//             "original_title": "12 Angry Men",
//             "genre_ids": [
//                 18
//             ],
//             "backdrop_path": "/lH2Ga8OzjU1XlxJ73shOlPx6cRw.jpg",
//             "adult": false,
//             "overview": "The defense and the prosecution have rested and the jury is filing into the jury room to decide if a young Spanish-American is guilty or innocent of murdering his father. What begins as an open and shut case soon becomes a mini-drama of each of the jurors' prejudices and preconceptions about the trial, the accused, and each other.",
//             "release_date": "1957-03-25"
//         },
//         {
//             "vote_count": 1920,
//             "id": 12477,
//             "video": false,
//             "vote_average": 8.4,
//             "title": "Grave of the Fireflies",
//             "popularity": 0.6,
//             "poster_path": "/4u1vptE8aXuzb5zauZTmikyectV.jpg",
//             "original_language": "ja",
//             "original_title": "火垂るの墓",
//             "genre_ids": [
//                 16,
//                 18,
//                 10752
//             ],
//             "backdrop_path": "/fCUIuG7y4YKC3hofZ8wsj7zhCpR.jpg",
//             "adult": false,
//             "overview": "In the final months of World War II, 14-year-old Seita and his sister Setsuko are orphaned when their mother is killed during an air raid in Kobe, Japan. After a falling out with their aunt, they move into an abandoned bomb shelter. With no surviving relatives and their emergency rations depleted, Seita and Setsuko struggle to survive.",
//             "release_date": "1988-04-16"
//         },
//         {
//             "vote_count": 12649,
//             "id": 122,
//             "video": false,
//             "vote_average": 8.4,
//             "title": "The Lord of the Rings: The Return of the King",
//             "popularity": 34.948,
//             "poster_path": "/rCzpDGLbOoPwLjy3OAm5NUPOTrC.jpg",
//             "original_language": "en",
//             "original_title": "The Lord of the Rings: The Return of the King",
//             "genre_ids": [
//                 12,
//                 14,
//                 28
//             ],
//             "backdrop_path": "/8BPZO0Bf8TeAy8znF43z8soK3ys.jpg",
//             "adult": false,
//             "overview": "Aragorn is revealed as the heir to the ancient kings as he, Gandalf and the other members of the broken fellowship struggle to save Gondor from Sauron's forces. Meanwhile, Frodo and Sam bring the ring closer to the heart of Mordor, the dark lord's realm.",
//             "release_date": "2003-12-01"
//         }
//     ]
// }



// dummy data below

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


