How do MongoDB indexes handle fields whose values are arrays? Conveniently, MongoDB automatically
  creates what’s known as a multikey index whenever an index on a array field is created. Multikey indexes provide an index key for each element in the 
    indexed array.
  
{ 
  _id: ObjectId(...),
  last_name: "Tapia",
  first_name: "Joseph",
  major: "architecture",
  birth_year: 1988,
  graduation_year: 2012 ,
  sports: ["rowing", "boxing"]
}

db.students.createIndex({ sports : 1 });
