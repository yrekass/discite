Meteor.methods({
    /**
     * Get my profile
     * @returns {UserObj}
     */
    me: function(){
        return Meteor.users.find({_id: Meteor.userId()});
    }
});

