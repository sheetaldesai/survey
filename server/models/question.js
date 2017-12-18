var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// define Question schema
var QuestionSchema = new mongoose.Schema({
    username: {type: String, required: true},
    question: {type: String, required: true }, 
    _options: [{type: Schema.Types.ObjectId, ref: 'Option'}]
    
}, {timestamps: true }, { usePushEach: true });

var Question = mongoose.model('Question', QuestionSchema);
module.exports = Question;