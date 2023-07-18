db.<collection>.find({ <field>: { <operator>: <value> } })

db.tennis_players.find({ wimbledon_singles_wins: { $gt: 1971, $lt: 1935 } })
