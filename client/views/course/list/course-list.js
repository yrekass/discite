Template.courseListTpl.helpers({
    courses: function () {
        Meteor.subscribe('courses');
        return Courses.find();
    }
});