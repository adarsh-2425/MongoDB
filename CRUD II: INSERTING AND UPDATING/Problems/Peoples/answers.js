//question number and description is on README file

1. db.collection.insertOne({
  name: "Alice",
  age: 27,
  email: "alice@example.com",
  hobbies: ["reading", "cooking"]
})

2. db.collection.insertMany([
  {
    name: "Jack",
    age: 33,
    email: "jack@example.com",
    hobbies: ["running", "swimming"]
  },
  {
    name: "Kate",
    age: 29,
    email: "kate@example.com",
    hobbies: ["travelling", "hiking"]
  }
])

3. db.collection.updateOne(
{_id: ObjectId("615d5f5c91f2b4d1d00d6e00")},
{$set: {age: 26}}
)

4. db.collection.updateMany(
{hobbies: "reading"},
{$set: {age: 30}}
)

5. db.collection.updateOne(
{_id: ObjectId("615d5f5c91f2b4d1d00d6e01")},
{$push: {hobbies: "fishing"}}
)
