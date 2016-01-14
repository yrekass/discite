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
    }
});

Courses.attachSchema(Schemas.course);