Meteor.methods({
    me: function(){
        return Meteor.users.find({_id: Meteor.userId()});
    }
});

