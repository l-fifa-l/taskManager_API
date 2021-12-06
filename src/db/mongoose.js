const mongoose = require("mongoose");
require("dotenv").config();

mongoose.connect(process.env.MONGODB_URL, {
  useNewUrlParser: true,
  useCreateIndex: true,
});

const Task = mongoose.model("tasks", {
  description: {
    type: String,
    required: true,
    trim: true,
  },
  completed: {
    type: Boolean,
    required: false,
    default: false,
  },
});

//"/home/vivek/mongodb/bin/mongod --dbpath=/home/vivek/mongodb-data"
