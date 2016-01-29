const MESSAGE_FILE = 'file';
const MESSAGE_TEXT = 'text';
const MESSAGE_IMAGE_FILE = 'image_file';

Template.chatConferenceTpl.rendered = function () {
    Meteor.subscribe('files', Router.current().params._id);
    Tracker.afterFlush(function () {
        var $panelBody= $('.panel-body:first-child');
        console.log($panelBody.prop('scrollHeight'));
        $panelBody.scrollTop = $panelBody.prop('scrollHeight');
    });
};

Template.chatConferenceTpl.events({
    'submit form': function (event) {
        event.preventDefault();
        const form = $(event.target);
        const body = form.find('[name=body]').val();
        const userId = Router.current().params._id;
        const extra = {
            type : MESSAGE_TEXT
        };
        Meteor.call('sendMessage', userId, body, extra, 'conferences');
        form.find('[name=body]').val('');
    },
    'change #fileInput': function(event, template) {
        FS.Utility.eachFile(event, function(file) {
            var newFile = new FS.File(file);
            newFile.metadata = {
                conferenceId: Router.current().params._id
            };

            Files.insert(newFile, function (err, fileObj) {
                console.log(fileObj.url({brokenIsFine: true}));
                if(err)
                {
                    // TODO Do something
                }
                else {
                    var body = fileObj.original.name;
                    console.log(fileObj.type().indexOf('image'));
                    if (fileObj.type().indexOf('image') !== -1) {
                        var extra = {
                            type: MESSAGE_IMAGE_FILE,
                            fileURL: fileObj.url({brokenIsFine: true}),
                            fileName: fileObj.original.name
                        };
                    }
                    else {
                        var extra = {
                            type: MESSAGE_FILE,
                            fileURL: fileObj.url({brokenIsFine: true}),
                            fileName: fileObj.original.name
                        };
                    }
                    Meteor.call('sendMessage', Router.current().params._id, body, extra, 'conferences');
                }
                // Inserted new doc with ID fileObj._id, and kicked off the data upload using HTTP
            });
        });
    }
});

Template.chatConferenceTpl.helpers({
    me: function (userId) {
        return userId === Meteor.userId();
    },
    getFileObject: function(fileName){
        console.log(fileName);
        console.log(Files.findOne({ 'original.name': fileName }));
        return Files.findOne({ 'original.name': fileName });
    },
    isTextMessage: function (messageType){
        return messageType === MESSAGE_TEXT;
    },
    isFileMessage: function (messageType){
        return messageType === MESSAGE_FILE;
    },
    isImageFileMessage: function (messageType) {
        return messageType === MESSAGE_IMAGE_FILE;
    },
    'uploadedFiles': function(){
        Meteor.subscribe('files', Router.current().params._id);
        return Files.find();
    }
});
