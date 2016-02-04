Template.uploadCourseTpl.helpers({
    'uploadedFiles': function(){
        Meteor.subscribe('files', Router.current().params._id);
        return Files.find();
    }
});

Template.uploadCourseTpl.events({

});