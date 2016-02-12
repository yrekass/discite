/**
 * Created by Youness on 04/02/2016.
 */

Forums = new Mongo.Collection('forums');

Forums.before.insert(function (userId, forum) {
    forum.userId = Meteor.userId();
    forum.createdAt = new Date();
});
if (Meteor.isClient) {
    Forums.after.insert(()=> {
        Router.go('/forum/list');
    });
}
Schemas.forum = new SimpleSchema({
    name: {
        type: String,
        label: 'Name',
        max: 200
    },
    description: {
        type: String,
        label: 'Description',
        max: 500
    },
    courseId:{
        type: String
    },
    userId: {
        type: String
    },
    createdAt: {
        type: Date
    },
    reponses: {
        type: Array,
        optional: true
    },
    'reponses.$': {
        type: Object
    },
    'reponses.$.type': {
        type: String
    },
    'reponses.$.fileURL': {
        type: String,
        optional:true
    },
    'reponses.$.fileName':{
        type:String,
        optional:true
    },
    'reponses.$.userId': {
        type: String
    },
    'reponses.$.body': {
        type: String
    },
    'reponses.$.date': {
        type: Date
    },
    'reponses.$.date': {
    type: Date
}
});
Forums.attachSchema(Schemas.forum);