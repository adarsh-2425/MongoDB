//collection
[
  {
    "_id": ObjectId("60f5aeb4c9d5e05f2d4d8c01"),
    "title": "The Shawshank Redemption",
    "year": 1994,
    "director": "Frank Darabont",
    "genre": ["Drama"],
    "rating": 9.3
  },
  {
    "_id": ObjectId("60f5aeb4c9d5e05f2d4d8c02"),
    "title": "The Godfather",
    "year": 1972,
    "director": "Francis Ford Coppola",
    "genre": ["Crime", "Drama"],
    "rating": 9.2
  },
  {
    "_id": ObjectId("60f5aeb4c9d5e05f2d4d8c03"),
    "title": "The Dark Knight",
    "year": 2008,
    "director": "Christopher Nolan",
    "genre": ["Action", "Crime", "Drama"],
    "rating": 9.0
  },
  {
    "_id": ObjectId("60f5aeb4c9d5e05f2d4d8c04"),
    "title": "The Lord of the Rings: The Return of the King",
    "year": 2003,
    "director": "Peter Jackson",
    "genre": ["Adventure", "Drama", "Fantasy"],
    "rating": 8.9
  },
  {
    "_id": ObjectId("60f5aeb4c9d5e05f2d4d8c05"),
    "title": "Pulp Fiction",
    "year": 1994,
    "director": "Quentin Tarantino",
    "genre": ["Crime", "Drama"],
    "rating": 8.9
  },
  {
    "_id": ObjectId("60f5aeb4c9d5e05f2d4d8c06"),
    "title": "Forrest Gump",
    "year": 1994,
    "director": "Robert Zemeckis",
    "genre": ["Drama", "Romance"],
    "rating": 8.8
  },
  {
    "_id": ObjectId("60f5aeb4c9d5e05f2d4d8c07"),
    "title": "Inception",
    "year": 2010,
    "director": "Christopher Nolan",
    "genre": ["Action", "Adventure", "Sci-Fi"],
    "rating": 8.7
  },
  {
    "_id": ObjectId("60f5aeb4c9d5e05f2d4d8c08"),
    "title": "The Matrix",
    "year": 1999,
    "director": "Lana Wachowski, Lilly Wachowski",
    "genre": ["Action", "Sci-Fi"],
    "rating": 8.7
  },
  {
    "_id": ObjectId("60f5aeb4c9d5e05f2d4d8c09"),
    "title": "Goodfellas",
    "year": 1990,
    "director": "Martin Scorsese",
    "genre": ["Crime", "Drama"],
    "rating": 8.7
  },
  {
    "_id": ObjectId("60f5aeb4c9d5e05f2d4d8c0a"),
    "title": "The Silence of the Lambs",
    "year": 1991,
    "director": "Jonathan Demme",
    "genre": ["Crime", "Drama", "Thriller"],
    "rating": 8.6
  }
]

//1. Find all movies released in the year 2000.
db.collection.find({
  year: 1991
})

//2. Find all movies directed by Christopher Nolan.
db.collection.find({
  director: "Christopher Nolan"
})

//3. Find all movies with a rating greater than or equal to 8.5.
