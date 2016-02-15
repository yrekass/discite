'use strict';
/*global Courses:true*/

/**
 * Publish all courses
 * Must subscribe in client for access
 */
Meteor.publish('courses', () => {
    return Courses.find({});
});

/**
 * Publish a course
 * Must subscribe in client for access
 * @param _id => IdCourse
 */
Meteor.publish('course', (_id) => {
    return Courses.find({_id});
});

/**
 * Publish all courses joined by currentUser logged
 * Must subscribe in client for access
 */
Meteor.publish('myCourses', function() {
    return Courses.find({participants:{$in: [this.userId]}});
});
