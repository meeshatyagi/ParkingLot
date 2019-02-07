const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const VehicleSchema = new Schema({
    color:{
        type: String,
        required: true
    },
    type:{
        type:String,
        required: true
    },
    registrationNumber: {
        type: Number,
        required: true,
        unique: true
    }  
},{
    timestamps: true
})

var Vehicles = mongoose.model('Vehicle' ,VehicleSchema);

module.exports = Vehicles;