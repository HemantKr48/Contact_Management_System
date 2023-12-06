const mongoose = require("mongoose");

const contactSchema = mongoose.Schema(
  {
    user_id: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "User",
    },
  },
  {
    name: {
      type: String,
      requires: [true, "Please add your contact name"],
    },
    email: {
      type: String,
      requires: [true, "Please add your contact email address"],
    },
    phone: {
      type: String,
      requires: [true, "Please add your contact phone number"],
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Contact", contactSchema);
