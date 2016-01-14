Template.courseListTpl.helpers({
    courses: function () {
        return Courses.find();
    }
});