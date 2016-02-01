Template.courseListTpl.helpers({
    courses: function () {
        return Courses.find();
    },
    meParticipate: function (id) {
        var me = Meteor.userId();
        var course = Courses.findOne({_id: id.hash.id});
        if (course.participants === undefined) {
            console.log('return false', id);
            return false;
        } else {
            return course.participants.indexOf(me) === -1;
        }
    }
});

Template.courseListTpl.rendered = function () {
    console.log('> Subscribe all courses');
    CoursesSubsManager.subscribe('courses');

    setTimeout(()=> {
        $('#allCourses').tab('show');
    }, 200);
};

Template.courseListTpl.events({
    'click #participateBtn': function () {
        console.log(`Participate to : ${this.courseId}`);
        Meteor.call('participate', this.courseId);
    },
    'click #myCourses': function () {
        console.log('> Subscribe myCourses');
        CoursesSubsManager.clear();
        CoursesSubsManager.subscribe('myCourses');
    },
    'click #allCourses': function () {
        console.log('> Subscribe all courses');
        CoursesSubsManager.clear();
        CoursesSubsManager.subscribe('courses');
    }
});