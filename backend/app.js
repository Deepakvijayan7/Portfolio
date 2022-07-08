const express = require('express');
const cors = require('cors');
const app = new express; 
app.use(express.urlencoded({ extended: true }));
app.use(cors());
var path=require('path');
const mongoose=require('mongoose');
const testimonial=require('./model/testimonial');
const MONGODB_URI='mongodb+srv://admin:1234@cluster0.uoaf66f.mongodb.net/testimonial?retryWrites=true&w=majority';
// const localdb= "mongodb://localhost:27017/testimonial";
// mongoose.Promise=global.Promise;
mongoose.connect(MONGODB_URI , { useNewUrlParser: true ,useUnifiedTopology: true}, function(err){
    if(err){
        console.error("Error:" +err);
    }
})

app.get('/testimonial', function(req,res){
    testimonial.find({
        
    }).exec(function(err,testimonial){
        if(err){
            console.log("error retreving")
        }
        else{
            res.json(testimonial);
        }
    })
})

app.use(express.static(path.join(__dirname, 'public')));
app.get('*', (req,res)=>{
    res.sendFile(path.join(__dirname,'public/index.html'));
})
const PORT=process.env.PORT || 8080;
app.listen(PORT, function(){
    console.log('listening to port '+PORT);
});
