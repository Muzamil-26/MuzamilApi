import mongoose from "mongoose";

const ProductsSchema = mongoose.Schema({
    id:{
        type:Number,
        required:true
    },
    title: {
        type:String,
        required:true,
    },
    price: {
        type:Number,
        required:true,
    },
    description: {
        type:String,
        required:true,
    },
    category:{
        type:String,
        required:true,
    },
    image: {
        type:String,
        required:true,
    },
    rating: {
    rate: {
        type:Number,
    },
    count: {
        type:Number,
    }
}
});

export const Products = mongoose.model("AllProducts",ProductsSchema);