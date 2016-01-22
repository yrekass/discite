Meteor.methods({
    participateCourse: function (courseId) {
        if (Meteor.user().profile.myCourses.indexOf(courseId) === -1){
            Meteor.users.update({_id: Meteor.userId()}, {$push: {'profile.myCourses': courseId}})
        }
    }
});