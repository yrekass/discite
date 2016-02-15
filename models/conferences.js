/*jshint strict:false */
/*exported Conferences:true*/
/*global Conferences:true*/
/*global Schemas:true*/

/**
 * Global conferences collection
 * @type {FS.Collection}
 */
Conferences = new Meteor.Collection('conferences');

/**
 * Add fields before insert in collection
 */
Conferences.before.insert((userId, doc) => {
    'use strict';
    doc.userId = Meteor.userId();
    doc.createdAt = new Date();
});

/**
 * Redirect after insert
 * Only for client
 */
if (Meteor.isClient) {
    Conferences.after.insert(()=> {
        'use strict';
        Router.go('/conference/list');
    });
}

/**
 * Define conference schema
 * this is use with autoform to generate forms
 * @type {SimpleSchema}
 */
Schemas.conference = new SimpleSchema({
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
    userId: {
        type: String
    },
    createdAt: {
        type: Date
    },
    messages: {
        type: Array,
        optional: true
    },
    'messages.$': {
        type: Object
    },
    'messages.$.userId': {
        type: String
    },
    'messages.$.date': {
        type: Date
    },
    'messages.$.body': {
        type: String
    },
    'messages.$.type':{
        type: String
    },
    'messages.$.fileURL':{
        type:String,
        optional:true
    },
    'messages.$.fileName':{
        type:String,
        optional:true
    }
});

Conferences.attachSchema(Schemas.conference);