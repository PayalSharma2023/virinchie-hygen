const mongoose = require("mongoose");
const slugify = require("slugify");

const blogSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    slug: String,
    content: {
      type: String,
      required: true,
    },
    excerpt: String,
    author: {
      type: String,
      default: "Admin",
    },
    image: String,
  },
  { timestamps: true }
);

blogSchema.pre("save", function (next) {
  if (!this.slug) {
    this.slug = slugify(this.title, { lower: true });
  }
  next();
});

module.exports = mongoose.model("Blog", blogSchema);
