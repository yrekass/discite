'use strict';
/*global RTCMultiConnection:true*/
function appendStream(event, selector, template) {
    if (!template.find('#' + selector + ' video')) {
        var div = template.find('#' + selector);
        div.appendChild(event.mediaElement);
    }
}

Template.conferenceTpl.rendered = function () {
    Meteor.subscribe('conference', Router.current().params._id);
    var params = {
        MODERATOR_CAM_CHANNEL_ID: Router.current().params._id + 'CAM',
        MODERATOR_CAM_SESSION_ID: 'XYZ',
        MODERATOR_ID: 'JKL',
        MODERATOR_CAM_SESSION: {
            audio: true,
            video: true,
            oneway: true
        },
        MODERATOR_CAM_EXTRA: {},
        MODERATOR_SCREEN_CHANNEL_ID: Router.current().params._id + 'SCREEN',
        MODERATOR_SCREEN_SESSION_ID: 'XYZ',
        MODERATOR_SCREEN_SESSION: {
            screen: true,
            oneway: true
        },
        MODERATOR_SCREEN_EXTRA: {}
    };

    Session.set('paramsRtc', params);
};

Template.conferenceTpl.helpers({
    isMine: function (ownerId) {
        return Meteor.userId() === ownerId;
    }
});

Template.conferenceTpl.events({
    'click #launch': function (e, t) {
        var params = Session.get('paramsRtc');
        var moderatorCam = new RTCMultiConnection(params.MODERATOR_CAM_CHANNEL_ID);
        moderatorCam.session = params.MODERATOR_CAM_SESSION;
        moderatorCam.userid = params.MODERATOR_ID;
        moderatorCam.extra = params.MODERATOR_CAM_EXTRA;
        moderatorCam.open({
            dontTransmit: true,
            sessionid: params.MODERATOR_CAM_SESSION_ID
        });
        moderatorCam.onstream = function (event) {
            appendStream(event, 'streamCam', t);
        };

        var moderatorScreen = new RTCMultiConnection(params.MODERATOR_SCREEN_CHANNEL_ID);
        moderatorScreen.session = params.MODERATOR_SCREEN_SESSION;
        moderatorScreen.userid = params.MODERATOR_ID;
        moderatorScreen.extra = params.MODERATOR_SCREEN_EXTRA;
        moderatorScreen.open({
            dontTransmit: true,
            sessionid: params.MODERATOR_SCREEN_SESSION_ID
        });
        moderatorScreen.onstream = function (event) {
            appendStream(event, 'streamScreen', t);
        };
    },
    'click #participate': function (e, t) {
        var params = Session.get('paramsRtc');
        var particpantsCam = new RTCMultiConnection(params.MODERATOR_CAM_CHANNEL_ID);
        particpantsCam.join({
            sessionid: params.MODERATOR_CAM_SESSION_ID,
            userid: params.MODERATOR_ID,
            extra: params.MODERATOR_CAM_EXTRA,
            session: params.MODERATOR_CAM_SESSION
        });

        particpantsCam.onstream = function (event) {
            appendStream(event, 'streamCam', t);
        };

        var participantsScreen = new RTCMultiConnection(params.MODERATOR_SCREEN_CHANNEL_ID);
        participantsScreen.join({
            sessionid: params.MODERATOR_SCREEN_SESSION_ID,
            userid: params.MODERATOR_ID,
            extra: params.MODERATOR_SCREEN_EXTRA,
            session: params.MODERATOR_SCREEN_SESSION
        });

        participantsScreen.onstream = function (event) {
            appendStream(event, 'streamScreen', t);
        };
    }
});