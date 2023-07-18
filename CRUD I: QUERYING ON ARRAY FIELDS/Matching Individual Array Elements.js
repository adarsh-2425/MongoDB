//example document
{
  _id: ObjectId(...),
  title: "Alice in Wonderland",
  author: "Lewis Carroll",
  year_published: 1865,
  genres: ["childrens", "fantasy", "literary nonsense"]
}

//query
db.books.find({ genres: "young adult" })

//
result
{
  _id: ObjectId(...),
  title: "Children of Blood and Bone",
  author: "Tomi Adeyemi",
  year_published: 2018,
  genres: ["fantasy", "young adult", "adventure"]
},
{
  _id: ObjectId(...),
  title: "The Hunger Games",
  author: "Suzanne Collins",
  year_published: 2008,
  genres: ["young adult", "dystopian", "science fiction"]
},
{
  _id: ObjectId(...),
  title: "The Black Flamingo",
  author: "Dean Atta",
  year_published: 2019,
  genres: ["young adult", "coming of age", "LGBTQ"]
},
…
