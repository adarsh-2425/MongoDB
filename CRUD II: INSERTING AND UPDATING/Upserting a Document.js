db.<collection>.updateOne(
  <filter>, 
  <update>, 
  { upsert: <boolean> }
);

db.pets.updateOne(
  { name: "Luna", type: "Cat"},
  { $set: { age: 3 }},
  { upsert: true }
)
