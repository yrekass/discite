'use strict';
/*global Forums:true*/

Template.forumListTpl.helpers({
    forums: function () {
        Meteor.subscribe('forums', Router.current().params._id);
        return Forums.find({'courseId': Router.current().params._id});
    },
    idCourse: function() {
        return Router.current().params._id;
    }
});