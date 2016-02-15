/*jshint strict:false */
/*global Forums:true*/
/*global Schemas:true*/

Forums = new Mongo.Collection('forums');

Forums.before.insert(function (userId, forum) {
    'use strict';
    forum.userId = Meteor.userId();
    forum.createdAt = new Date();
});
if (Meteor.isClient) {
    Forums.after.insert(()=> {
        'use strict';
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
    }
});
Forums.attachSchema(Schemas.forum);