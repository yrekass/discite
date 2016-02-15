'use strict';
const MESSAGE_TEXT = 'text';

Template.chatCourseTpl.events({
    'submit form': function (event) {
        event.preventDefault();
        const form = $(event.target);
        const body = form.find('[name=body]').val();
        const userId = Router.current().params._id;
        const extra = {
            type: MESSAGE_TEXT
        };
        Meteor.call('sendMessage', userId, body, extra, 'courses');
        form.find('[name=body]').val('');
    }
});


Template.chatCourseTpl.helpers({
    me: function (userId) {
        return userId === Meteor.userId();
    }
});