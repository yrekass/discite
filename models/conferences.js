Conferences = new Meteor.Collection('conferences');

Conferences.before.insert(function (userId, doc) {
    doc.userId = Meteor.userId();
    doc.createdAt = new Date();
});

if (Meteor.isClient) {
    Conferences.after.insert(()=> {
        Router.go('/conference/list');
    });
}

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