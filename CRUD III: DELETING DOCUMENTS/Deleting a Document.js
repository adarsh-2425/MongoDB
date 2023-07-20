db.<collection>.deleteOne(<filter>, <options>);

db.monsters.deleteOne({ age: 95 });

{ acknowledged: true, deletedCount: 1 }
