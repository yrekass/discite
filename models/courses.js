Courses = new Mongo.Collection('courses');

Courses.before.insert(function (userId, course) {
    course.userId = Meteor.userId();
    course.createdAt = new Date();
});

Schemas.course = new SimpleSchema({
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
    createdAt:{
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
    'messages.$.body': {
        type: String
    },

    'messages.$.date': {
        type: Date
    }
});

Courses.attachSchema(Schemas.course);