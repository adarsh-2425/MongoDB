db.<collection>.createIndex({ 
  <field>: <type>, 
  <field2>: <type>, 
  …
})

db.students.createIndex({ 
  study_abroad_nation: 1, 
  year_abroad: -1 
});
