const MESSAGE_FILE = 'file';
const MESSAGE_TEXT = 'text';
const MESSAGE_IMAGE_FILE = 'image_file';

Meteor.methods({
    sendMessage: function (id, body, extra, collection) {
        var message = {};
        message.body = body;
        message.userId = Meteor.userId();
        message.date = new Date();
        if (extra.type === MESSAGE_FILE || extra.type === MESSAGE_IMAGE_FILE) {
            message.fileURL = extra.fileURL;
            message.fileName = extra.fileName;
            message.type = extra.type;
        }
        else if (extra.type === MESSAGE_TEXT) {
            message.type = extra.type;
        }
        // TODO: Refactoring
        if (collection == 'courses') {
            Courses.update({_id: id}, {$push: {messages: message}});
        }
        if (collection == 'conferences') {
            Conferences.update({_id: id}, {$push: {messages: message}});
        }
    }
});