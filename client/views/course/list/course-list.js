Template.courseListTpl.helpers({
    /**
     * Return list of course, context subscribe
     * @returns [{Course}]
     */
    courses: function () {
        return Courses.find();
    },
    /**
     * Display or not display the participate btn
     * @param id
     * @returns {boolean}
     */
    displayBtnParticipate: function (id) {
        var me = Meteor.userId();
        var course = Courses.findOne({_id: id.hash.id});
        if (course.participants === undefined) {
            return true;
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
    /**
     * Subscribe myCourse
     */
    'click #myCourses': function () {
        console.log('> Subscribe myCourses');
        CoursesSubsManager.clear();
        CoursesSubsManager.subscribe('myCourses', Meteor.userId);
    },
    /**
     * Subscribe allCourse
     */
    'click #allCourses': function () {
        console.log('> Subscribe all courses');
        CoursesSubsManager.clear();
        CoursesSubsManager.subscribe('courses');
    }
});