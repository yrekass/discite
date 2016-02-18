'use strict';

Template.quizzCreateTpl.rendered = function(){
    const hookObj = {
        before: {
            insert: function (doc) {
                doc.courseId = Router.current().params.idCourse;
                return doc;
            }
        }
    };
    
    AutoForm.addHooks('insertQuizzForm', hookObj, true);
};