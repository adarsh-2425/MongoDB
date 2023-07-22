db.students.getIndexes();

[
   {  v : 1,
      key : { _id : 1 },
      name : '_id_'
   },
   {
      v : 1,
      key : { sports : -1 },
      name : 'sports_-1'
   },
   {
      v : 1,
      key : { sports : -1, graduation year : -1 },
      name : 'sports_-1_graduation_year_-1'
   }
]

db.students.dropIndex('sports_-1');
