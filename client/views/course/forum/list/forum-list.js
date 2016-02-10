/**
 * Created by Youness on 04/02/2016.
 */

Template.forumListTpl.helpers({
    forums: function(){
        Meteor.subscribe('forums');
        return Forums.find();
    }
});