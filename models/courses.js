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
    'messages.$.body': {
        type: String
    },
    'messages.$.date': {
        type: Date
    },
    //todo:edit model
    'quizz': {
        optional: true,
        type: Array
    },
    'quizz.$': {
        type: Object
    },
    'quizz.$.question': {
        type: String
    },
    'quizz.$.answer': {
        type: Object
    },
    'quizz.$.answer.userId': {
        type: String
    },
    'quizz.$.answers.$':{
        type: Array
    },
    'quizz.$.answers.$.choice': {
        type: Object
    },
    'quizz.$.answers.$.choice.isAnswer': {
        type: Boolean
    },
    'quizz.$.answers.$.choice.body': {
        type: String
    },
    'quizz.$.choices': {
        type: Array
    },
    'quizz.$.choices.$.isAnswer': {
        type: Boolean
    },
    'quizz.$.choices.$.body': {
        type: String
    }
});

Courses.attachSchema(Schemas.course);