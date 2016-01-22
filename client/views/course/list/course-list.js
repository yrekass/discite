Template.courseListTpl.helpers({
    courses: function () {
        console.log('> Subscribe all courses');
        Meteor.subscribe('courses');
        return Courses.find();
    }
});

Template.courseListTpl.rendered = function () {
    setTimeout(()=> {
        $('#allCourses').tab('show');
    }, 200);
};

Template.courseListTpl.events({
    'click #participateBtn': function(){
        console.log(`Participate to : ${this.courseId}`);
        Meteor.call('participateCourse', this.courseId);
    }
});