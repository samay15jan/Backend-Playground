import mongoose from 'mongoose'

const orderItemSchema = new mongoose.Schema(
    {
        productId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Product",
        },
        quantity: {
            type: Number,
            requried: true,
        },
    }
)

const orderSchema = new mongoose.Schema(
    {
        orderPrice: {
            type: Number,
            requried: true,
        },
        customer: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
        },
        address: {
            type: String,
            required: true,
        },
        orderItems: {
            type: [orderItemSchema],
            enum: ["PENDING", "DELIVERED", "CANCELLED"],
            default: "PENDING",
        },
        
    }, {timestamps: true}
)

export const Order = mongoose.model("Order", orderSchema)