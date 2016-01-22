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
    }
});

Conferences.attachSchema(Schemas.conference);