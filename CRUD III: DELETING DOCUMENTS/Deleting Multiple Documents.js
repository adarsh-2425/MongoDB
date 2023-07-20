db.<collection>.deleteMany(<filter>, <options>);

Warning: If no filter is provided to the .deleteMany() method, all documents from the collection will be deleted. 

db.monsters.deleteMany({ type: "Hydra" });

{ acknowledged: true, deletedCount: 3 }
