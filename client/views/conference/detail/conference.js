Template.conferenceTpl.rendered = function () {
    Meteor.subscribe('conference', Router.current().params._id);
    var params = {
        MODERATOR_CHANNEL_ID: 'ABCDEF',
        MODERATOR_SESSION_ID: 'XYZ',
        MODERATOR_ID: 'JKL',
        MODERATOR_SESSION: {
            audio: true,
            video: true,
            oneway:true
        },
        MODERATOR_EXTRA: {}
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
        console.log(t);
        var params = Session.get('paramsRtc');
        var moderator     = new RTCMultiConnection(params.MODERATOR_CHANNEL_ID);
        moderator.session = params.MODERATOR_SESSION;
        moderator.userid  = params.MODERATOR_ID;
        moderator.extra   = params.MODERATOR_EXTRA;
        moderator.open({
            dontTransmit: true,
            sessionid   : params.MODERATOR_SESSION_ID
        });
        moderator.onstream = function(event) {
            var div = t.find('#stream');
            div.appendChild(event.mediaElement);
        };
    },
    'click #participate': function (e, t) {
        var params = Session.get('paramsRtc');
        var participants = new RTCMultiConnection(params.MODERATOR_CHANNEL_ID);
        participants.join({
            sessionid: params.MODERATOR_SESSION_ID,
            userid   : params.MODERATOR_ID,
            extra    : params.MODERATOR_EXTRA,
            session  : params.MODERATOR_SESSION
        });

        participants.onstream = function(event) {
            var div = t.find('#stream');
            div.appendChild(event.mediaElement);
        };
    }
});