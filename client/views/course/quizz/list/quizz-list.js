'use strict';
/*global Quizzs:true*/

Template.quizzListTpl.helpers({
    quizzs: function(){
        Meteor.subscribe('quizzs');
        return Quizzs.find();
    }
});