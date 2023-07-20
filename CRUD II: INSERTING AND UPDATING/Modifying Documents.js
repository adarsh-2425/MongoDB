db.<collection>.findAndModify({
  query: <document>,
  update: <document>,
  new: <boolean>,
  upsert: <boolean>,
  ...
});

db.foodTrucks.findAndModify({
  query:  { name: "Criff Dogs" },
  update: { shutdown: true }
});
