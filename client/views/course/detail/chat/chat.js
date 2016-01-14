Template.chatCourseTpl.events({
    'submit form': function (event) {
        event.preventDefault();
        const form = $(event.target);
        const body = form.find('[name=body]').val();
        const userId = Router.current().params._id;
        Meteor.call('sendMessage', userId, body);
        form.find('[name=body]').val('');
    }
});


Template.chatCourseTpl.helpers({
    me: function (userId) {
        return userId === Meteor.userId();
    }
});