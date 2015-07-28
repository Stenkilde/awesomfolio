var mongoose 	= require('mongoose');
var Schema		= mongoose.Schema;

var BlogSchema	= new Schema({
	header: String,
	body: String,
	item: String
});

module.exports = mongoose.model('Blog', BlogSchema);
