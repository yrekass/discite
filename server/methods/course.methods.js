Meteor.methods({
    participate: function (id) {
        var participant = Meteor.userId();
        Courses.update({_id: id}, {$push: {participants: participant}})
    }
});