var mongoose = require('mongoose');
var Option = mongoose.model('Option');
var Question = mongoose.model('Question');

var path = require('path');

module.exports = {
    getAllQuestions: (req, res) => {
        console.log("getAllQuestions");
        Question.find({}).then(function (questions){
            //console.log("Found questions: ", questions);
            res.json(questions);
        }).catch(function(err){
            console.log("Error while getting questions: ",err);
            res.json(err);
        });
    },
    // createQuestion: (req, res) => {
    //     console.log("createQuestion req.body: ", req.body);
    //     Question.create(req.body).then(newQuestion => {
    //         console.log("Created new question: ",newQuestion);
    //         // add comments.
    //         console.log("req.body: ", req.body);
    //         var arr = [req.body.option1, req.body.option2, req.body.option3, req.body.option4];
    //         console.log("arr: ", arr);
    //         for (let i = 0; i < arr.length; i++) {
    //             var option = new Option(arr[i]);
    //             option._question = newQuestion.id;
    //             newQuestion.push(option);
    //             newQuestion.save().then(function(savedQ){
    //                 option.save()
    //             })
    //             option.save().then(savedOption => {
    //                 //console.log("Saved option ", savedOption);
    //                 newQuestion._options.push(savedOption);
    //                 console.log("i ", i)
    //                 newQuestion.save().then(savedQuestion=>console.log("savedQ: ", savedQuestion));
    //             })
    //         }
    //     }).catch(err => {
    //         console.log("Error while creating a question: ", err);
    //     });
    // },
    createQuestion: (req, res) => {
        var options;
        Question.create(req.body).then(newQuestion => {
            var option1 = req.body.option1;
            option1._question = newQuestion._id;
            var option2 = req.body.option2;
            option2._question = newQuestion._id;
            var option3 = req.body.option3;
            option3._question = newQuestion._id;
            var option4 = req.body.option4;
            option4._question = newQuestion._id;
            console.log("Crating option1 :", option1);
            console.log("Crating option2 :", option2);
            console.log("Crating option3 :", option3);
            console.log("Crating option4 :", option4);
            Option.create([option1, option2, option3,option4]).then(function(options){
                console.log("Created options: length: ", options );
                for (var i = 0; i < options.length; i++){
                    newQuestion._options.push(options[i]._id);
                }
                newQuestion.save().then(function(savedQ){
                    console.log("saved question: ", savedQ);
                    res.json(savedQ);
                }).catch(function(err){
                    console.log("Error while saving question: ", err);
                });
            }).catch(err => console.log("Erro while creating options: ", err));
        }).catch(err => console.log("Error while creating new question: ",err))
    },

    createOption(option, questionId){
        console.log("Creating option: ", option);
        optionCreated : boolean = false;

        Option.create({text:option.text, votes:option.votes }).then(function(newOption){
            console.log("created option: ", newOption);
            // Create options:
        }).catch(err=>console.log("Error while creating question")) 
    },
    deleteQuestion(req, res) {
        var id = req.params.id;
        console.log("deleting question: ", id);
        Question.remove({_id: id}, function(err, any){
            if (err) {
                res.json({status:'Error while removing player'});
            } else {
                console.log("deleted question");
                res.json({status: 'Success'});
            }
        });
    },
    getQuestion(req, res) {
        var id = req.params.id;
        console.log("Getting question: ", id);
        Question.findOne({_id:id}).populate('_options'). // populate the comments
        exec(function(err, question){                    // execute the query
          console.log(question);
          res.json(question);
          if (err) {
              console.log("Error finding question: ", err);
          }
       });
    },
    updateOption(req, res) {
        var id = req.params.id;
        console.log("UpdateOption: ", id, req.body);
        Option.findOne({_id:id}).then(option => {
            option.votes = req.body.votes;
            option.save().then(savedOption => {
                console.log("Updated option: ", savedOption);
                res.json(savedOption);
            }).catch(err => {
                console.log("Error updating option ", err);
                res.json(err);
            });
        }).catch(err => {
            console.log("Error finding option");
            res.json(err);
        })
    }
}