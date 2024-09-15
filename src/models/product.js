import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Please input name of the product"],
    },
    price: {
        type: Number,
        required: [true, "Please input price of the product"],
    },
    quantity: {
        type: Number,
        required: [true, "Please input quantity of the product"],
    },
    category: {
        type: String,
        required: [true, "Please input category of the product"],
    },
});

const Product = mongoose.model("Product", productSchema);

export default Product;