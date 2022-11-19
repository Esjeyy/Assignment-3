var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
const { response } = require('../app');
const workoutdatabase = require('../models/workoutdatabase');

// connect with database model

let workout1 = require('../models/workoutdatabase')

// Read opertation // 
router.get('/', (req, res, next)=>{
    workout1.find((err, workoutdatabase)=>   {
           if(err) {
               return console.error(err)
           }
           else {
               res.render('workout/workoutList', { title: 'workout list',
               workoutdatabaselist: workoutdatabase

           })
           }
       });
});


// add operatin //

router.get('/add', (req, res, next)=>{
      res.render('workout/add', { title: 'Add Workouts'})
    });

// post 


router.post('/add', (req,res,next)=> {
    let newworkout =  workout1({
        "Workout":req.body.Workout,
        "sets":req.body.sets,
        "reps":req.body.reps,
        "weight":req.body.weight
    });
    workout1.create(newworkout,(err,workout1) => {
        if(err)
        {
            console.log(err);
            res.end(err);
        }
        else
        {
            res.redirect('/workout-list');
        }
    });
});

// router.post('/add', (req, res, next)=>{
//     let newworkout = workout1({
//         "Workout": req.body.Workout, 
//         "sets":req.body.sets,
//         "reps":req.body.reps,
//         "weight":req.body.weight
//     });
//     workout1.create(newworkout, (err, workout1)=>{
//         if (err){
//             console.log(err)
//             res.end
//         }
//         else{
//             res.redirect('')
//         }
//     });
  

// });

router.get('/edit/:id',(req,res,next)=>{
    let id = req.params.id;
    workout1.findById(id,(err, workoutEdit)=>{
        if(err){
            console.log(err);
            res.end(err);
        }
        else{
            res.render('./workout/edit', {title: 'Edit Workouts', workoutdatabase:workoutEdit})
        }
    });
});
// get route for displaying the add page -- create operation // 
// also post // 

//Post route for displaying the Edit Operation -- Update Operation */
router.post('/edit/:id', (req,res,next)=> {
    let id = req.params.id;
    let UpdateWorkout = workout1({
        "_id":id,
        "Workout":req.body.Workout,
        "sets":req.body.sets,
        "reps":req.body.reps,
        "weight":req.body.weight
    });
    workout1.updateOne({_id:id},UpdateWorkout,(err) => {
        if(err){
            console.log(err);
            res.end(err);
        }
        else{
            res.redirect('/workout-list');
        }
    });
});



// delete function
router.get('/delete/:id', (req,res,next)=> {
    let id = req.params.id;
    workout1.deleteMany({_id:id}, (err)=>{
        if(err)
        {
            console.log(err);
            res.end(err);
        }
        else
        {
            res.redirect('/workout-List');
        }
    })
});

module.exports = router