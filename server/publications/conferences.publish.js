Meteor.publish('conferences', function () {
    return Conferences.find({});
});

Meteor.publish('conference', function (conferenceId) {
    return Conferences.find({_id: conferenceId});
});