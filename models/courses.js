Courses = new Mongo.Collection('courses');

Schemas = {};

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
})
;

Courses.attachSchema(Schemas.course);