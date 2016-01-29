Courses = new Mongo.Collection('courses');

CoursesSubsManager = new SubsManager();

Courses.before.insert(function (userId, course) {
    course.userId = Meteor.userId();
    course.createdAt = new Date();
});

if (Meteor.isClient) {
    Courses.after.insert(()=> {
        Router.go('/course/list');
    });
}

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
    'participants': {
        type: Array,
        optional:true
    },
    'participants.$': {
        type: String
    }
    //todo:edit model
});

Courses.attachSchema(Schemas.course);