'use strict';

Meteor.publish('user', function (_id) {
    return Meteor.users.find({_id});
});