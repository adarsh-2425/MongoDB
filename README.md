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
