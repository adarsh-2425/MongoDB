//10 documents of oceans and sea
[
  {
    name: "Pacific Ocean",
    area: 168723000,
    depth: {
      min: 0,
      max: 10911
    },
    countries: [
      "United States",
      "China",
      "Japan",
      "Australia",
      "Canada",
      "Mexico"
    ]
  },
  {
    name: "Atlantic Ocean",
    area: 106400000,
    depth: {
      min: 0,
      max: 8605
    },
    countries: [
      "United States",
      "Brazil",
      "United Kingdom",
      "France",
      "Spain",
      "Portugal"
    ]
  },
  {
    name: "Indian Ocean",
    area: 70560000,
    depth: {
      min: 0,
      max: 7906
    },
    countries: [
      "India",
      "Indonesia",
      "Australia",
      "South Africa",
      "Madagascar"
    ]
  },
  {
    name: "Southern Ocean",
    area: 20736000,
    depth: {
      min: 0,
      max: 7233
    },
    countries: [
      "Antarctica"
    ]
  },
  {
    name: "Arctic Ocean",
    area: 14056000,
    depth: {
      min: 0,
      max: 5527
    },
    countries: [
      "Canada",
      "Russia",
      "United States"
    ]
  },
  {
    name: "Mediterranean Sea",
    area: 2500000,
    depth: {
      min: 0,
      max: 5121
    },
    countries: [
      "France",
      "Italy",
      "Spain",
      "Greece",
      "Turkey",
      "Egypt",
      "Tunisia",
      "Algeria",
      "Morocco",
      "Israel",
      "Lebanon",
      "Syria"
    ]
  },
  {
    name: "Caribbean Sea",
    area: 2397000,
    depth: {
      min: 0,
      max: 7686
    },
    countries: [
      "Mexico",
      "Cuba",
      "Dominican Republic",
      "Haiti",
      "Jamaica",
      "Puerto Rico"
    ]
  },
  {
    name: "South China Sea",
    area: 3550000,
    depth: {
      min: 0,
      max: 5512
    },
    countries: [
      "China",
      "Vietnam",
      "Philippines",
      "Malaysia",
      "Indonesia",
      "Brunei"
    ]
  },
  {
    name: "Baltic Sea",
    area: 415000,
    depth: {
      min: 0,
      max: 459
    },
    countries: [
      "Sweden",
      "Finland",
      "Russia",
      "Estonia",
      "Latvia",
      "Lithuania",
      "Poland",
      "Germany",
      "Denmark"
    ]
  },
  {
    name: "Red Sea",
    area: 438000,
    depth: {
      min: 0,
      max: 2211
    },
    countries: [
      "Egypt",
      "Saudi Arabia",
      "Yemen",
      "Sudan",
      "Eritrea",
      "Djibouti"
    ]
  }
]

//1. Find all the oceans that have a maximum depth greater than 7000 meters.
db.collection.find({
  "depth.max": {
    $gt: 7000
  }
})

//2. Find all the oceans that have "United States" as one of the countries that border them.
db.collection.find({
  countries: "United States"
})

//3. Find all the oceans that have an area greater than 100 million square kilometers and a maximum depth greater than 1000 meters.
db.collection.find({
  $and: [
    { area: { $gt: 100000000 } },
    { "depth.max": { $gt: 1000 } }
  ]
})

//4. Sort the oceans by their area in ascending order.
db.collection.find().sort({
  area: 1
})

//5. Sort the oceans by their maximum depth in descending order.
db.collection.find().sort({
  "depth.max": -1
})
