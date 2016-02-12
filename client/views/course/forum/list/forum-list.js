/**
 * Created by Youness on 04/02/2016.
 */
Template.forumListTpl.helpers({
    forums: function(){
        Meteor.subscribe('forums',Router.current().params._id);
        console.log(Router.current().params._id);
        return Forums.find({'courseId':Router.current().params._id});

    }
});