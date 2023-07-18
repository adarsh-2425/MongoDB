//To match at least one array element that meets all the filter criteria in your query, you can use the following syntax:

db.<collection>.find({ <field>: { $elemMatch: { <operator>: <value>, <operator2>: <value2>, ... } } })
