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
   
