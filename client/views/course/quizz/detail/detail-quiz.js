Template.quizzTpl.rendered = function () {
    Meteor.subscribe('quizz', Router.current().params._id);
};

Template.quizzTpl.helpers({
    idCourse: function() {
        return Router.current().params._id;
    },

    questions: function(){

        var el = Quizzs.findOne({_id: Router.current().params._id});
        return el.quizz ;
    },

    //  faut récuper la question et les choix tous possibles
    answersBody: function(){
        var el = Quizzs.findOne({_id: Router.current().params._id}) ;
        console.log(el);
        return el.quizz.answers;
    }
});
