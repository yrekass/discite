Quizzs = new Mongo.Collection('quizzs');
CoursesSubsManager = new SubsManager();
Quizzs.before.insert(function (userId, quizz) {
    quizz.userId = Meteor.userId();
    quizz.createdAt = new Date();
});
//to do : il faut stocker l'id cours aussi

if (Meteor.isClient) {
    Quizzs.after.insert(()=> {
        Router.go('/quizz/list');
    });
}

Schemas.quizz = new SimpleSchema({
    name: {
        type: String
    },
    userId:{
        type:String
    },
    duration:{
       type:Number
    },
    quizz: {
        type: Array,
        optional: true
    },
    "quizz.$": {
        type: Object
    },

    "quizz.$.question": {
        type: String
    },
    "quizz.$.answers": {
        type: Array,
        optional: true
    },
    "quizz.$.answers.$": {
        type: Object
    },
    "quizz.$.answers.$.body": {
        type: String
    },
    "quizz.$.answers.$.isAnswer": {
        type: Boolean
    }

});

Quizzs.attachSchema(Schemas.quizz);
