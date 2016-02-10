/**
 * Created by Youness on 04/02/2016.
 */

Meteor.publish('forums', () => {
    console.log("la liste des forum");
    return Forums.find({});
});

Meteor.publish('forum', (_id) => {
    console.log("forum finded!!");
    return Forums.find({_id});
});


