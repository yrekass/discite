function appendStream(event, selector, template) {
    if (!template.find('#'+selector+' video')) {
        var div = template.find('#'+selector);
        div.appendChild(event.mediaElement);
    }
}

Template.conferenceTpl.rendered = function () {
    Meteor.subscribe('conference', Router.current().params._id);
    var params = {
        MODERATOR_CAM_CHANNEL_ID: Router.current().params._id+'CAM',
        MODERATOR_CAM_SESSION_ID: 'XYZ',
        MODERATOR_ID: 'JKL',
        MODERATOR_CAM_SESSION: {
            audio: true,
            video: true,
            oneway:true
        },
        MODERATOR_CAM_EXTRA: {},
        MODERATOR_SCREEN_CHANNEL_ID: Router.current().params._id+'SCREEN',
        MODERATOR_SCREEN_SESSION_ID: 'XYZ',
        MODERATOR_SCREEN_SESSION: {
            screen:true,
            oneway:true
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
        var moderator_cam     = new RTCMultiConnection(params.MODERATOR_CAM_CHANNEL_ID);
        moderator_cam.session = params.MODERATOR_CAM_SESSION;
        moderator_cam.userid  = params.MODERATOR_ID;
        moderator_cam.extra   = params.MODERATOR_CAM_EXTRA;
        moderator_cam.open({
            dontTransmit: true,
            sessionid   : params.MODERATOR_CAM_SESSION_ID
        });
        moderator_cam.onstream = function (event)
        {
            appendStream(event, 'streamCam',t);
        };

        var moderator_screen     = new RTCMultiConnection(params.MODERATOR_SCREEN_CHANNEL_ID);
        moderator_screen.session = params.MODERATOR_SCREEN_SESSION;
        moderator_screen.userid  = params.MODERATOR_ID;
        moderator_screen.extra   = params.MODERATOR_SCREEN_EXTRA;
        moderator_screen.open({
            dontTransmit: true,
            sessionid   : params.MODERATOR_SCREEN_SESSION_ID
        });
        moderator_screen.onstream = function (event)
        {
            appendStream(event, 'streamScreen',t);
        }
    },
    'click #participate': function (e, t) {
        var params = Session.get('paramsRtc');
        var participants_cam = new RTCMultiConnection(params.MODERATOR_CAM_CHANNEL_ID);
        participants_cam.join({
            sessionid: params.MODERATOR_CAM_SESSION_ID,
            userid   : params.MODERATOR_ID,
            extra    : params.MODERATOR_CAM_EXTRA,
            session  : params.MODERATOR_CAM_SESSION
        });

        participants_cam.onstream =function (event)
        {
            appendStream(event, 'streamCam',t);
        }

        var participants_screen = new RTCMultiConnection(params.MODERATOR_SCREEN_CHANNEL_ID);
        participants_screen.join({
            sessionid: params.MODERATOR_SCREEN_SESSION_ID,
            userid   : params.MODERATOR_ID,
            extra    : params.MODERATOR_SCREEN_EXTRA,
            session  : params.MODERATOR_SCREEN_SESSION
        });

        participants_screen.onstream = function (event)
        {
            appendStream(event, 'streamScreen',t);
        }
    }
});