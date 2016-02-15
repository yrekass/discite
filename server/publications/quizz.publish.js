'use strict';
/*global Quizzs:true*/

Meteor.publish('quizzs', () => {
    return Quizzs.find({});
});

Meteor.publish('quizz', (id) => {
    return Quizzs.find({_id: id});
});
