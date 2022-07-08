const mongoose = require('mongoose');
const MONGODB_URI='mongodb+srv://admin:1234@cluster0.uoaf66f.mongodb.net/testimonial?retryWrites=true&w=majority';
mongoose.connect(MONGODB_URI ,{ useNewUrlParser: true ,useUnifiedTopology: true});
// mongoose.connect(MONGODB_URI || 'mongodb://localhost:27017/testimonial');

const Schema = mongoose.Schema;


const testimonialschema = new Schema({
    name : String,
    job: String,
    image: String,
    quote: String,
    class:String
});

const testimonialdata = mongoose.model('testimonialdatas',testimonialschema);

// module.exports = mongoose.model('testimonialdatas',testimonialschema,'testimonial');s
module.exports = testimonialdata;