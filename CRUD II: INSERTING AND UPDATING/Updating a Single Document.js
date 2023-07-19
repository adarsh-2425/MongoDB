db.<collection>.updateOne(<filter>, <update>, <options>)

  db.products.updateOne({ title: "iPhoneX" }, { $set: { price: 679 } });
{ "acknowledged" : true, "matchedCount" : 1, "modifiedCount" : 1 }
