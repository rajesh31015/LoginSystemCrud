db.products.aggregate([
    {
        $project: {
            _id: 0,        // Exclude the _id field
            name: 1,      // Include the name field
            price: 1,     // Include the price field
        }
    }
]);
// result
[
    {
        "name": "Product A",
        "price": 20.99
    },
    {
        "name": "Product B",
        "price": 15.49
    },
    // ... other documents with "name" and "price" fields
]

db.products.aggregate([
    {
      $limit: 2          // give all field only 2 column data show
    }
  ]);

  db.products.aggregate([
    {
        $project: {
            _idqqq: 0,        // give all field
        }
    }
]);

db.products.aggregate([
    {
      $skip: 1
    },
    {
      $sort: {
        name: 1
      }
    },
    {
      $project:{
        name:1
      }
    }
  ]);
  