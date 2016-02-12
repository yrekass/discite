Template.conferenceListTpl.helpers({
    conferences: function(){
        Meteor.subscribe('conferences');
        return Conferences.find();
    },
    createDate: function(date){
        console.log(date);
        return moment(date).fromNow();
    }
});