const mongoose = require("mongoose");

const BookSchema = new mongoose.Schema(
    {
        BookName:{
            type: String,
            required: true,
        },
        Author:{
            type:String,
            required: true,
        },
        Genre:{
            type:String,
            required: true,
        },
        Desc:{
            type:String,
            required: true,
            max:500,
            min:100,
        },
        Price:{
            type: Number,
            required: true,   
        },
        PublishedBy:{
            type:String,
            required: true,
        },
        
    },
    {timestamp: true}
);

module.exports= mongoose.model("Book", BookSchema);