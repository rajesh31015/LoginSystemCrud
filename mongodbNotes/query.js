
// Finding Documents:

// Find all documents in a collection:
const allDocs = await Model.find();
// Find documents based on a condition:
const filteredDocs = await Model.find({ key: value });
// Find one document based on a condition:
const singleDoc = await Model.findOne({ key: value });
// Find a document by its _id:
const docById = await Model.findById(id);
// Find documents and limit the results:
const limitedDocs = await Model.find().limit(10);
// Find documents and skip some results (for pagination):
const paginatedDocs = await Model.find().skip(10).limit(10);

// Updating Documents:

// Update a single document:
const updatedDoc = await Model.updateOne({ key: value }, { $set: { keyToUpdate: newValue } });
// Update multiple documents that match a condition:
const updatedDocs = await Model.updateMany({ key: value }, { $set: { keyToUpdate: newValue } });
// Find a document by ID and update:
const updatedDocById = await Model.findByIdAndUpdate(id, { $set: { keyToUpdate: newValue } });


// Deleting Documents:

// Delete a single document:
const deletedDoc = await Model.deleteOne({ key: value });
// Delete multiple documents that match a condition:
const deletedDocs = await Model.deleteMany({ key: value });
// Find a document by ID and delete:
const deletedDocById = await Model.findByIdAndDelete(id);


// Aggregation:

// Perform aggregation pipelines:
const result = await Model.aggregate([
    { $match: { key: value } },
    { $group: { _id: "$category", total: { $sum: 1 } } }
]);


// Counting Documents:
// Count all documents in a collection:
const totalCount = await Model.countDocuments();
// Count documents based on a condition:
const filteredCount = await Model.countDocuments({ key: value });


// Sorting:
// Sort documents based on a field:
const sortedDocs = await Model.find().sort({ fieldName: 1 }); // 1 for ascending, -1 for descending


// Populating Referenced Documents:
// Populate a referenced document:
const populatedDoc = await Model.findOne({ key: value }).populate('referenceField');

// Executing Queries:
const result1 = await query.exec();

// Comparison Operators:
// Greater Than ($gt), Less Than ($lt), Greater Than or Equal To ($gte), Less Than or Equal To ($lte):
const greaterThanDocs = await Model.find({ age: { $gt: 30 } });
const lessThanDocs = await Model.find({ score: { $lt: 80 } });
const greaterThanOrEqualDocs = await Model.find({ count: { $gte: 100 } });
const lessThanOrEqualDocs = await Model.find({ quantity: { $lte: 10 } });
// Not Equal To ($ne):
const notEqualDocs = await Model.find({ status: { $ne: "completed" } });
// In Array ($in), Not In Array ($nin):
const inArrayDocs = await Model.find({ category: { $in: ["Electronics", "Clothing"] } });
const notInArrayDocs = await Model.find({ status: { $nin: ["pending", "rejected"] } });
// Using $gt (greater than) and $lt (less than) for range queries:
const result9 = await Model.find({
    age: { $gt: 20, $lt: 30 }
});
// Using $gte (greater than or equal to) and $lte (less than or equal to):
const result10 = await Model.find({
    score: { $gte: 80, $lte: 100 }
});
// Using $ne (not equal to) to find documents that do not match a value:
const result11 = await Model.find({
    status: { $ne: "archived" }
});
// Combining various operators for complex queries:
const result16 = await Model.find({
    $and: [
      { age: { $gte: 18, $lte: 60 } },
      { status: "active" },
      { $or: [{ isAdmin: true }, { role: "manager" }] }
    ]
});
  

// Array Queries:
// Querying documents with arrays using $in:
const result12 = await Model.find({
    tags: { $in: ["javascript", "nodejs"] }
});
// Using $all to find documents with all specified array elements:
const result13 = await Model.find({
    tags: { $all: ["javascript", "mongodb"] }
});
// Using $elemMatch for querying within arrays of embedded documents:
const result14 = await Model.find({
    comments: {
      $elemMatch: { author: "John", score: { $gte: 8 } }
    }
});
  
  
  
  
  


// Logical Operators:
// AND ($and):
const andQueryDocs = await Model.find({
    $and: [
      { category: "Electronics" },
      { price: { $gt: 500 } }
    ]
});
// OR ($or):
const orQueryDocs = await Model.find({
    $or: [
      { status: "active" },
      { quantity: { $gt: 10 } }
    ]
});
// Combining AND and OR:
const combinedQueryDocs = await Model.find({
    $and: [
      { $or: [
        { category: "Electronics" },
        { category: "Clothing" }
      ]},
      { price: { $lt: 1000 } }
    ]
});
// Using $and to find documents that match multiple conditions:
const result6 = await Model.find({
    $and: [
      { key1: value1 },
      { key2: value2 }
    ]
});
// Using $or to find documents that match at least one of multiple conditions:
const result7 = await Model.find({
    $or: [
      { key1: value1 },
      { key2: value2 }
    ]
});
// Combining $and and $or for complex queries:
const result8 = await Model.find({
    $and: [
      { key1: value1 },
      {
        $or: [
          { key2: value2 },
          { key3: value3 }
        ]
      }
    ]
});
  
  
  


// Regular Expressions:
// Using Regular Expressions:
const regexQueryDocs = await Model.find({ name: { $regex: /^Joh/ } }); // Starts with "Joh"


// Aggregation:
// Grouping and Summing:
const result2 = await Model.aggregate([
    { $group: { _id: "$category", totalQuantity: { $sum: "$quantity" } } }
]);
// Sorting within Aggregation:
const result3 = await Model.aggregate([
    { $match: { category: "Electronics" } },
    { $group: { _id: "$brand", totalSales: { $sum: "$sales" } } },
    { $sort: { totalSales: -1 } } // Sort in descending order
]);
// Filtering and Counting:
const result4 = await Model.aggregate([
    { $match: { status: "completed" } },
    { $group: { _id: "$user", totalOrders: { $sum: 1 } } }
]);

// Date Queries:
// Querying with Dates:
const dateQueryDocs = await Model.find({
    createdAt: {
      $gte: new Date("2022-01-01"),
      $lt: new Date("2022-02-01")
    }
});
// Date Aggregation:
const result5 = await Model.aggregate([
    {
      $group: {
        _id: { $month: "$createdAt" },
        totalSales: { $sum: "$amount" }
      }
    },
    { $sort: { _id: 1 } } // Sort by month
]);
  
// Text Search (Requires Text Index):
// Text Search:
const searchResults = await Model.find({ $text: { $search: "keyword" } });

// Existence Check:
// Checking for the existence of a field using $exists:
const result15 = await Model.find({
    key: { $exists: true }
});

// Custom Methods:
// Using custom methods to create complex queries:
const result17 = await Model.find().customMethod(parameters);


// Index Utilization:
// Using $index to leverage indexes for query optimization:
const result18 = await Model.find().hint({ fieldName: 1 });

// How to use soft delete technique
// step-1 Add a Field for Soft Deletion => add deleted field to the document with type boolean
const mongoose = require("mongoose");
const { Schema } = mongoose;
const yourSchema = new Schema({
  // Other fields in your schema
  deleted: { type: Boolean, default: false }
});
// Step 2: Create a Middleware for Soft Delete
// You can create a Mongoose middleware that intercepts the delete operation and sets the deleted flag to true instead of actually removing the document:
yourSchema.pre("deleteOne", function(next) {
    // "this" refers to the document being deleted
    this.deleted = true;
    next();
});
// If you want to make this more explicit and not rely on Mongoose's internal methods, you can define your custom method:
yourSchema.methods.softDelete = function() {
    this.deleted = true;
    return this.save();
};
// Step 3: Using the Soft Delete Method
// Now, whenever you want to "delete" a document, you'll call this softDelete method instead of deleteOne():
const doc = await Model.findById(id);
await doc.softDelete();
// Step 4: Querying Active Documents
// When querying for documents, you'll need to ensure that you're excluding the soft-deleted documents by adding { deleted: false } to your queries:
// Find all active documents
const activeDocs = await Model.find({ deleted: false });

// Find a single active document by ID
const activeDoc = await Model.findOne({ _id: id, deleted: false });

// Update: You should also consider adding a default filter to exclude deleted documents
yourSchema.pre("find", function() {
  this.where({ deleted: false });
});
// Step 5: Restoring Soft Deleted Documents
// If you want to provide the ability to "restore" a soft-deleted document, you can create another method to reset the deleted flag:
yourSchema.methods.restore = function() {
    this.deleted = false;
    return this.save();
};
// Then, you can call this restore method on a soft-deleted document:
const doc1 = await Model.findById(id);
await doc1.restore();
// Summary:
// Add a deleted field to your schema.
// Create a pre-delete middleware to mark documents as "soft-deleted".
// Use a custom method like softDelete() to perform the soft deletion.
// Query for active documents by including { deleted: false }.
// Optionally, create a restore() method to undo the soft deletion.

  
  
  



  
  


  
  

