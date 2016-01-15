Meteor.publish('files', (courseId)=> {
    return Files.find({'metadata.courseId':courseId});
});