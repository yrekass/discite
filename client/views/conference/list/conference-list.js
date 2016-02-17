'use strict';
/*global Conferences:true*/
/*global Courses:true*/

Template.conferenceListTpl.helpers({
    conferences: function(){
        Meteor.subscribe('conferences');
        Meteor.subscribe('courses');

        var countCourse = Courses.find(Router.current().params._id).count();
        if(countCourse >= 1)
        {
            return Conferences.find({ courseId : Router.current().params._id},{sort: { createdAt: -1 }} );
        }
        else {
            return Conferences.find({ courseId: { $exists:false}},{sort: { createdAt: -1 }} );
        }
    },
    nbConferenceByCourse:function ()
    {
        return Conferences.find({ courseId : Router.current().params._id}).count();
    }
});