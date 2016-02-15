'use strict';
/*global Conferences:true*/

Template.conferenceListTpl.helpers({
    conferences: function(){
        Meteor.subscribe('conferences');
        return Conferences.find();
    },
    createDate: function(date){
        return moment(date).fromNow();
    }
});