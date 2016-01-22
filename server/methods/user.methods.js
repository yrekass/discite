Meteor.methods({
    participateCourse: function (courseId) {
        Meteor.users.update({_id: Meteor.userId()}, {$push: {'profile.myCourses': courseId}});
    },
    me: function(){
        return Meteor.users.find({_id: Meteor.userId()});
    }
});

