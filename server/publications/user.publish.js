//j'ai mis en place cette méthode afin qu'on puisse récupérer lié au utilisateur connecter
Meteor.publish('user', function (userID) {
    return Users.find({_id: userID});
});