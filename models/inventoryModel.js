const mongoose = require('mongoose');

const inventorySchema = new mongoose.Schema({
    inventoryType: {
        type: String,
        required: [true, 'Inventory type required!'],
        enum: ['in', 'out']
    },
    bloodGroup:{
        type: String,
        required: [true, 'Blood Group is required!'],
        enum:[  "A+","A-","B+","B-","AB+","AB-","O+","O-"]
    },
    quantity:{
        type: Number,
        require:[true, "Blood quantity is required!"],
    },
    organisation:{
        type: mongoose.Schema.Types.ObjectId,
        ref:'users',
        require:[true, 'organisation is required!']
    },
    hospital:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'users',
        required: function(){
            return this.inventoryType ==='out';
        },
    },
    donor:{
        type: mongoose.Schema.Types.ObjectId,
        ref:'users',
        required: function(){
            return this.inventoryType === 'in';
        },
    },
}, {timestamps: true});

module.exports = mongoose.model('Inventory',inventorySchema);