Template.uploadCourseTpl.helpers({
    'uploadedFiles': function(){
        Meteor.subscribe('files');
        return Files.find();
    }
});

Template.uploadCourseTpl.events({
    'change #fileInput': function(event, template) {
        FS.Utility.eachFile(event, function(file) {
            Files.insert(file, function (err, fileObj) {
                // Inserted new doc with ID fileObj._id, and kicked off the data upload using HTTP
            });
        });
    }
});