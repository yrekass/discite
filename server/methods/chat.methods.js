Meteor.methods({
    sendMessage: function (id, body) {
        var message = {};
        message.body = body;
        message.userId = Meteor.userId();
        message.date = new Date();
        Courses.update({_id: id}, {$push: {messages: message}})
    }
});