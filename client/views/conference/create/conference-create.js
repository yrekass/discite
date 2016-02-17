'use strict';

Template.conferenceCreateTpl.rendered = function () {
    const hookObj = {
        before: {
            insert: function (doc) {
                if (Router.current().params._id) {
                    doc.courseId = Router.current().params._id;
                }
                return doc;
            }
        }
    };

    AutoForm.addHooks('insertConferenceForm', hookObj, true);
};

Template.conferenceCreateTpl.helpers({
    isNotCourseContext: ()=> {
        return Router.current().location.get().path.split('/')[1] !== 'course';
    }
});

