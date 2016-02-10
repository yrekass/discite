/**
 * Created by Youness on 05/02/2016.
 */
const FORUM_FILE = 'file';
const FORUM_TEXT = 'text';
const FORUM_IMAGE_FILE = 'image_file';


Meteor.methods({

    sendForumMessage: function (id, body, extra, collection) {
        var reponse = {};
        reponse.body = body;
        reponse.userId = Meteor.userId();
        reponse.date = new Date();
        if (extra.type === FORUM_FILE || extra.type === FORUM_IMAGE_FILE) {
            reponse.fileURL = extra.fileURL;
            reponse.fileName = extra.fileName;
            reponse.type = extra.type;
        }
        else if (extra.type === FORUM_TEXT) {
            reponse.type = extra.type;
        }
        // TODO: Refactoring
        if (collection == 'forums') {
            Forums.update({_id: id}, {$push: {reponses: reponse}});
        }
    }
});