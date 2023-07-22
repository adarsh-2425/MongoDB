db.<collection>.createIndex({ <keys>, <options>, <commitQuorum>)}

{ 
  _id: ObjectId(...),
  last_name: "Tapia",
  first_name: "Joseph",
  major: "architecture",
  birth_year: 1988,
  graduation_year: 2012,
  year_abroad: 2011
}

db.students.createIndex({ year_abroad: 1 });
