Meteor.publish('courses', () => {
    return Courses.find({});
});

Meteor.publish('course', (id) => {
    return Courses.find({_id: id});
});