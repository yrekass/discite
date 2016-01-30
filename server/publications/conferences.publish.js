/**
 * Publish all conferences 
 * Must subscribe in client for access
 */
Meteor.publish('conferences', function () {
    return Conferences.find({});
});

/**
 * Publish a conference
 * Must subscribe in client for access
 * @param conferenceId
 */
Meteor.publish('conference', function (conferenceId) {
    return Conferences.find({_id: conferenceId});
});