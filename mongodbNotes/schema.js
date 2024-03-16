// define your schema
const mongoose = require("mongoose");
const { Schema } = mongoose;

const blogSchema = new Schema(
  {
    title: String, // String is shorthand for {type: String}
    author: String,
    body: String,
    comments: [{ body: String, date: Date }],
    date: { type: Date, default: Date.now },
    hidden: Boolean,
    meta: {
      votes: Number,
      favs: Number
    }
  },
  { timestamps: true, collection: `${process.env.PREFIX_TABLE}_friend_lists` }
);

// this functions run before to save document
userSchema.pre('save',async function(next){
    const data = this.password.toString();
    const encryptedPassword = await bcryptService.encrypt(data);
    this.password = encryptedPassword;
    next();
});

const User = mongoose.model("User", userSchema);
module.exports = User;


// Schema Creation and Modification:

// new Schema():
// Creates a new Mongoose schema instance.
const { Schema } = require('mongoose');
const mySchema = new Schema({ /* Schema definition */ });

// Field Types:
// Mongoose provides various field types for defining schema properties, such as 
String, Number, Date, Boolean, Array, Object, Map, Schema.Types.ObjectId, Schema.Types.Mixed

// Schema Type Options:
const mySchema1 = new Schema({
    fieldName: { type: String, required: true },
    fieldName: { type: Number, default: 0 },
    age: { type: Number, min: 18, max: 100 },
    status: { type: String, enum: ['active', 'inactive'] }
});

// Hooks:
// schema.pre(hook, callback):
// Registers a pre-hook for the given hook point.
mySchema.pre('save', function(next) {
    // Pre-save logic
    next();
});

// schema.post(hook, callback):
// Registers a post-hook for the given hook point.
mySchema.post('save', function(doc) {
    // Post-save logic
});

// Population:
// schema.virtual().get().set().ref():
// For defining population behavior.
const authorSchema = new Schema({ name: String });
const bookSchema = new Schema({
  title: String,
  author: { type: Schema.Types.ObjectId, ref: 'Author' }
});


doc._id instanceof mongoose.Types.ObjectId; // true
  

  
  