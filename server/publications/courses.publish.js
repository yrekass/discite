Meteor.publish('courses', () => {
    return Courses.find({});
});

Meteor.publish('course', (id) => {
    return Courses.find({_id: id});
});

Meteor.publish('myCourses', function () {
    console.log(Courses.findOne({_id: 'iXZ6ZkE4LfTvapkik'}));
    return Courses.find({_id: 'iXZ6ZkE4LfTvapkik'});
});
