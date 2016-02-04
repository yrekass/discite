Template.courseTpl.rendered = function () {
    //subscribe one course
    Meteor.subscribe('course', Router.current().params._id);
    //select the first tab
    setTimeout(function () {
        $('#first').tab('show');
    }, 200);
};

Template.courseTpl.helpers({
    idCourse: function() {
        return Router.current().params._id;
    }
});