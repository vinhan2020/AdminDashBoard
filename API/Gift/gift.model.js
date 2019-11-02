const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Define collection and schema for Business
let Gift = new Schema(
  {
    name: { type: String },
    type: { type: String },
    point: { type: Number },
    mota: { type: String },
    dateStart: { type: Date },
    dateEnd: { type: Date }
  },
  {
    collection: "gifts"
  }
);

module.exports = mongoose.model("Gifts", Gift);
