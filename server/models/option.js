var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// define Option schema
var OptionSchema = new mongoose.Schema({
    text: {type: String},
    votes: {type: Number},
    _question: {type: Schema.Types.ObjectId, ref: 'Question'}
}, {timestamps: true }, { usePushEach: true });

var Option = mongoose.model('Option', OptionSchema);
module.exports = Option;
