/**
 * Global courses collection
 * @type {FS.Collection}
 */
Courses = new Mongo.Collection('courses');

/**
 * Use CoursesSubsManager to switch subscribe easly
 * @type {SubsManager}
 */
CoursesSubsManager = new SubsManager();

/**
 * Add fields before insert in collection
 */
Courses.before.insert(function (userId, course) {
    course.userId = Meteor.userId();
    course.createdAt = new Date();
});

/**
 * Redirect after insert
 * Only for client
 */
if (Meteor.isClient) {
    Courses.after.insert(()=> {
        Router.go('/course/list');
    });
}

/**
 * Define course schema
 * this is use with autoform to generate forms
 * @type {SimpleSchema}
 */
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