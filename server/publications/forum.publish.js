/**
 * Created by Youness on 04/02/2016.
 */

Meteor.publish('forum', (_id) => {
    console.log("la liste des forums");
    return Forums.find({_id});
});

Meteor.publish('forums', (courseId) => {
    console.log("forum finded!!");
    return Forums.find({courseId});
});


