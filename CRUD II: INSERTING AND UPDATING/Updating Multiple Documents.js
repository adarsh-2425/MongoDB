db.<collection>.updateMany(
  <filter>, 
  <update>, 
  <options>
);

db.employees.updateMany(
  { salary: 75000 },
  { $set: { salary: 80000 }}
)
