//syntax
db.<collection>.insertOne(
  <new_document>, 
  {
    writeConcern: <document>,
  }
);

//eg:
db.videogames.insertOne({
  title: "Elden Ring",
  year: 2022,
  company: "Fromsoftware"
});

//output
{
  "acknowledged": true,
  "insertedId": ObjectId("5fd989674e6b9ceb8665c63d")
}
