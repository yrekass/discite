Template.conferenceTpl.rendered = function () {
    Meteor.subscribe('conference', Router.current().params._id);
};