'use strict';
/*global Forums:true*/

Meteor.publish('forum', (_id) => {
    return Forums.find({_id});
});

Meteor.publish('forums', (courseId) => {
    return Forums.find({courseId});
});


