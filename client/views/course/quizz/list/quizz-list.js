'use strict';
/*global Quizzs:true*/

Template.quizzListTpl.helpers({
    quizzs: function(){
        Meteor.subscribe('quizzs');
        return Quizzs.find();
    },
    idCourse: function() {
        return Router.current().params._id;
    }
});