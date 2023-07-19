db.<collection>.updateOne(
  <filter>,
  { $push: { <field1>: <value1>, ... } }
);

db.vehicles.updateOne(
  { make: "Audi" },
  { $push: { year: 2020 }}
);

