## CRUD I: FINDING DOCUMENTS

1. Introduction to Querying  
```db.<collection>.find()```

2. Querying Collections


```
db.<collection>.find(
  {
    <field>: <value>,
    <second_field>: <value>
    ...
  }
);```
```


3. Querying Embedded Documents
  ```{
  maker: "Honda",
  country: "Japan",
  models: [
    { name: "Accord" },
    { name: "Civic" },
    { name: "Pilot" },
    …
  ]
},
…'''
````
````
db.<collection>.find(
  { 
    "<parent_field>.<embedded_field>": <value> 
  }
)```
````

4. Comparison Operators: $gt and $lt  
   ```db.<collection>.find( { <field>: { $gt: <value> } } )```  
   eg: ```db.national_parks.find({ founded: { $gt: 1900 }});```  

5. Sorting Documents  
```
   db.<collection>.find().sort(
  {
    <field>: <value>,
    <second_field>: <value>,
  }
)```
```
There are two values we can provide for the fields: 1 or -1. Specifying a value of 1 sorts the field in ascending order, and -1 sorts in descending order. For datetime and string values, a value of 1 would sort the fields, and their corresponding documents, in chronological and alphabetical order, respectively, while -1 would sort those fields in the reverse order.

6. Query Projections
```
db.<collection>.find(
  <query>, 
  { 
    <projection_field_1>: <0 or 1>, 
    <projection_field_2>: <0 or 1>,
    …
  }
)
```

To include a projection, we can pass a second argument to the .find() method, a projection document that specifies the fields we want to include, or exclude, in our returned documents. Fields can have a value of 1, to include that field, or 0 to exclude it. id will be inlcuded default

eg: ```db.listingsAndReviews.find( {}, {address: 1, name: 1} )```

It is important to note that except for the _id field, it is not possible to combine inclusion and exclusion statements in a single projection document. For example, the following query with a projection would be invalid, and return a MongoServerError:

```db.restaurants.find({}, {grades: 0, address: 1 })```

7. And Operator
```
db.students.find({
  $and: [
  { age: { $gt: 18 } },
    { gender: "male" }
  ]
})
```
8. Limit
   
   ```db.collection.find().limit(<number>)```
