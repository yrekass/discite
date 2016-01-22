Template.courseListTpl.helpers({
    courses: function () {
        return Courses.find();
    }
});

Template.courseListTpl.rendered = function () {
    Deps.autorun(function () {
        console.log('> Subscribe all courses');
        Meteor.subscribe('courses');
    });

    setTimeout(()=> {
        $('#allCourses').tab('show');
    }, 200);
};

Template.courseListTpl.events({
    'click #participateBtn': function(){
        console.log(`Participate to : ${this.courseId}`);
        Meteor.call('participateCourse', this.courseId);
    },
    'click #myCourses': function(){
        Deps.autorun(function () {
            console.log('> Subscribe myCourses');
            Meteor.subscribe('myCourses');
        });
    }
});