'use strict';
/*global Quizzs:true*/

Template.quizzTpl.rendered = function () {
    Meteor.subscribe('quizz', Router.current().params._id);
};

Template.quizzTpl.helpers({
    idCourse: function() {
        return Router.current().params._id;
    },

    questions: function(){
        return Quizzs.findOne({_id: Router.current().params._id});
    },

    //  faut récuper la question et les choix tous possibles
    answersBody: function(){
        return Quizzs.findOne({_id: Router.current().params._id}) ;
    }
});
