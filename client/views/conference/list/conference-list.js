Template.conferenceListTpl.helpers({
    conferences: function(){
        Meteor.subscribe('conferences');
        return Conferences.find();
    }
});