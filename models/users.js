Meteor.Schema = Meteor.Schema || {};

Meteor.Schema.UserProfile = new SimpleSchema({
    username: {
        type: String,
        label: 'Username'
    },
    firstName: {
        type: String,
        label: 'FirstName',
        optional: true
    },
    lastName: {
        type: String,
        label: 'LastName',
        optional:true
    },
    myCourses: {
        type: Array,
        label: 'myCourse'
    },
    'myCourses.$':{
        type: String
    }
});

Meteor.user.schema = new SimpleSchema({
    _id: {type: String},
    emails: {type: Array},
    'emails.$': {type: Object},
    'emails.$.address': {type: String},
    'emails.$.verified': {type: Boolean},
    createdAt: {type: Date},
    services: {type: Object, blackbox: true},
    profile: {type: Meteor.Schema.UserProfile}
});