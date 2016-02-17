'use strict';

Template.conferenceCreateTpl.rendered = function(){
    const hookObj = {
        before: {
            insert: function (doc) {
                if(Router.current().params._id){
                    doc.courseId = Router.current().params._id;
                }
                return doc;
            }
        }
    };

    AutoForm.addHooks('insertConferenceForm', hookObj, true);
};

