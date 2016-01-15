Template.uploadCourseTpl.helpers({
    'uploadedFiles': function(){
        Meteor.subscribe('files', Router.current().params._id);
        return Files.find();
    }
});

Template.uploadCourseTpl.events({
    'change #fileInput': function(event, template) {
        FS.Utility.eachFile(event, function(file) {
            var newFile = new FS.File(file);
            newFile.metadata = {
                courseId: Router.current().params._id
            };
            Files.insert(newFile, function (err, fileObj) {
                // Inserted new doc with ID fileObj._id, and kicked off the data upload using HTTP
            });
        });
    }
});