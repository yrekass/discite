'use strict';
/*global Files:true*/
/*global Forums:true*/

const MESSAGE_FILE = 'file';
const MESSAGE_TEXT = 'text';
const MESSAGE_IMAGE_FILE = 'image_file';

Template.messageForumTpl.rendered = function () {
    Meteor.subscribe('files', Router.current().params._id);
    Meteor.subscribe('forum', Router.current().params._id);
    Tracker.afterFlush(function () {
        var $panelBody = $('.panel-body:first-child');
        console.log($panelBody.prop('scrollHeight'));
        $panelBody.scrollTop = $panelBody.prop('scrollHeight');
    });
};

Template.messageForumTpl.events({
    'submit form': function (event) {
        event.preventDefault();
        const form = $(event.target);
        const body = form.find('[name=body]').val();
        const forumID = Router.current().params._id;
        const extra = {
            type: MESSAGE_TEXT
        };
        Meteor.call('sendForumMessage', forumID, body, extra, 'forums');
        form.find('[name=body]').val('');
    },
    'change #fileInput': function (event) {
        FS.Utility.eachFile(event, function (file) {
            var newFile = new FS.File(file);
            newFile.metadata = {
                conferenceId: Router.current().params._id
            };

            Files.insert(newFile, function (err, fileObj) {
                console.log(fileObj.url({brokenIsFine: true}));
                if (err) {
                    console.log(err);
                }
                else {
                    var body = fileObj.original.name;
                    var extra;
                    console.log(fileObj.type().indexOf('image'));
                    if (fileObj.type().indexOf('image') !== -1) {
                        extra = {
                            type: MESSAGE_IMAGE_FILE,
                            fileURL: fileObj.url({brokenIsFine: true}),
                            fileName: fileObj.original.name
                        };
                    }
                    else {
                        extra = {
                            type: MESSAGE_FILE,
                            fileURL: fileObj.url({brokenIsFine: true}),
                            fileName: fileObj.original.name
                        };
                    }
                    Meteor.call('sendForumMessage', Router.current().params._id, body, extra, 'forums');
                }
                // Inserted new doc with ID fileObj._id, and kicked off the data upload using HTTP
            });
        });
    }
});

Template.messageForumTpl.helpers({
    me: function (userId) {
        return userId === Meteor.userId();
    },
    getFileObject: function (fileName) {
        console.log(fileName);
        console.log(Files.findOne({'original.name': fileName}));
        return Files.findOne({'original.name': fileName});
    },
    isTextMessage: function (messageType) {
        return messageType === MESSAGE_TEXT;
    },
    isFileMessage: function (messageType) {
        return messageType === MESSAGE_FILE;
    },
    isImageFileMessage: function (messageType) {
        return messageType === MESSAGE_IMAGE_FILE;
    },
    'uploadedFiles': function () {
        Meteor.subscribe('files', Router.current().params._id);
        return Files.find();
    },
    forumMessages: function () {
        console.log('voici la reponse', Router.current().params._id);
        var response = Forums.findOne({_id: Router.current().params._id});
        console.log('voici la reponse', response);
        return response.reponses;
    }
});
/*
 Template.messageForumTpl.events({
 'submit form': function (event) {
 event.preventDefault();
 const form = $(event.target);
 const body = form.find('[name=body]').val();
 const forumID = Router.current().params._id;
 const extra = {
 type: MESSAGE_TEXT
 };

 console.log("message updated");
 Meteor.call('sendForumMessage', forumID, body, extra, 'forums');
 form.find('[name=body]').val('');
 },
 'change #fileInput': function (event, template) {
 FS.Utility.eachFile(event, function (file) {
 var newFile = new FS.File(file);
 newFile.metadata = {
 forumId: Router.current().params._id
 };
 Files.insert(newFile, function (err, fileObj) {
 console.log('file uploader!!');
 });
 });
 }
 });


 Template.messageForumTpl.rendered = function () {
 Meteor.subscribe('forum', Router.current().params._id);
 };

 Template.messageForumTpl.helpers({
 forumMessages: function () {
 var response = Forums.findOne({_id: Router.current().params._id});
 return response.reponses;
 },
 uploadedFiles: function(){
 var file=Files.findOne({_id: Router.current().params._id});
 console.log('recherche fichier',file);
 return Files.find();
 }

 });

 */