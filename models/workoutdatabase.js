let mongoose = require('mongoose')
const { settings } = require('../app')


// Create a Workout model

let workoutmodel = mongoose.Schema({
    Workout: String,
    sets:Number,
    reps:Number,
    weight: Number 
},
{
    collection: "workoutdatabase"
}


);

module.exports = mongoose.model('workoutdatabase', workoutmodel);