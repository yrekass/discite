Meteor.methods({
    /**
     * A user can join a course
     * @param _id => IdCourse
     */
    participate: function (_id) {
        var participant = Meteor.userId();
        Courses.update({_id}, {$push: {participants: participant}})
    }
});