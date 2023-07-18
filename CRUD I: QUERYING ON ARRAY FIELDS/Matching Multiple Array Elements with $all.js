//query
db.books.find({ genres: { $all: [ "science fiction", "adventure" ] } })

//output
{
  _id: ObjectId(...),
  title: "Jurassic Park",
  author: "Michael Crichton",
  year_published: 1990,
  genres: ["science fiction", "adventure", "fantasy", "thriller"]
},
{
  _id: ObjectId(...),
  title: "A Wrinkle in Time",
  author: "Madeleine L'Engle",
  year_published: 1962,
  genres: ["young adult", "fantasy", "science fiction", "adventure"]
},
{
  _id: ObjectId(...),
  title: "Dune",
  author: "Frank Herbert",
  year_published: 1965,
  genres: ["science fiction", "fantasy", "adventure"]
},
…

/*Notice that using the $all operator will match documents where the given array field contains all the specified elements
in any order, not necessarily the order provided in the query. Furthermore, our search returns 
documents where the genres array includes other elements, in addition to the ones specified in our query.*/
