Template.login.events({
    'submit form': function(event){
        event.preventDefault();
        var emailVar = event.target.loginEmail.value;
        var passwordVar = event.target.loginPassword.value;
        //login
        Meteor.loginWithPassword(emailVar, passwordVar);
        //redirect / and if login is not correct return in /login
        setTimeout(function () {
            Router.go('/');
        }, 200);
    }
});