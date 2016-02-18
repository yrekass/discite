'use strict';
/*global Quizzs:true*/

Meteor.methods({
    getResult: function (_id, answersUser) {
        const quizz = Quizzs.findOne({_id});
        const Future = Npm.require('fibers/future');
        const future = new Future();

        const goodAnswers = [];
        var note = 0;
        quizz.quizz.forEach(question => {
            question.answers.forEach(answer => {
                if (answer.isAnswer) {
                    goodAnswers.push(answer);
                }
            });
        });

        goodAnswers.forEach(answer => {
            answersUser.forEach(answerUser => {
                if (answerUser === answer.body) {
                    note++;
                }
            });
            if (answer === goodAnswers[goodAnswers.length - 1]) {
                future.return(note);
            }
        });

        return future.wait();

    }
});