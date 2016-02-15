'use strict';
/*global Meteor:true*/
/**
 * Insert a default user in database
 */
Meteor.startup(() => {
    let username = 'Admin';
    let emailUser = 'admin@test.fr';
    let password = 'testtest';
    if (Meteor.users.find().count() === 0) {
        Accounts.createUser({
            username: username,
            email: emailUser,
            password: password
        });
        console.log(`Create ${username} -> ${emailUser} : ${password}`);
    } else {
        console.log(`User is already create | ${username} -> ${emailUser} : ${password}`);
    }
});