var survey = require('../controller/survey.js');
const path = require('path');

module.exports = function(app) {
    app.get('/questions', survey.getAllQuestions);
    app.post('/questions', survey.createQuestion);
    app.delete('/questions/:id', survey.deleteQuestion);
    app.get('/questions/:id', survey.getQuestion);
    app.put('/comments/:id', survey.updateOption);
    //app.delete('/players/:id', tmController.delete);
    app.all("*", (req,res, next) => {
        res.sendFile(path.resolve('../client/dist/index.html'));
    });
}