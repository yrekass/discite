Template.courseTpl.rendered = function () {
    Meteor.subscribe('course', Router.current().params._id);
    setTimeout(function () {
        $('#first').tab('show');
    }, 200);
};