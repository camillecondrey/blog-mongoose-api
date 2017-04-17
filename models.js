const mongoose = require('mongoose');

const blogSchema = mongoose.Schema({
	title: {type: String, required: true},
	content: {type: String, required: true},
	author: {type: String, required: true},
	created: {type: String}
})

blogSchema.virtual('authorString').get(function() {
  return `${this.author.firstName} ${this.author.lastName}`.trim()});


restaurantSchema.methods.apiRepr = function() {

  return {
    id: this._id,
    author: this.authorString,
    content: this.content,
    title: this.title,
    created: this.created
  };
}

const Blog = mongoose.model('Blog', blogSchema);

module.exports = {Blog};