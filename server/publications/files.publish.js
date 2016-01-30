/**
 * Publish all files linked with a course
 * Must subscribe in client for access
 * @param courseId
 */
Meteor.publish('files', (courseId)=> {
    return Files.find({'metadata.courseId':courseId});
});