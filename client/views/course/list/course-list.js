Template.courseListTpl.helpers({
    courses: function () {
        Meteor.subscribe('courses');
        return Courses.find();
    }
});

Template.courseListTpl.rendered = function () {
    setTimeout(()=> {
        $('#allCourses').tab('show');
    }, 200);
};