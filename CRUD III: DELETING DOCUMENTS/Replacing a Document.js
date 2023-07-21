db.<collection>.replaceOne(
  <filter>, 
  <replacement>, 
  <options>
);

db.employees.replaceOne(
  { name: "Rhoit Kohli" }, 
  { name: "Rohit Kohli", position: "N/A" }
);

{
  acknowledged: true,
  insertedId: null,
  matchedCount: 1,
  modifiedCount: 1,
  upsertedCount: 0
}
