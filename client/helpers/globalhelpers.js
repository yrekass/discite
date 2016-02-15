'use strict';
/**
 * Handlebars helper to display username
 */
Handlebars.registerHelper('username', (userId) => {
    Meteor.subscribe('user', userId);
    const user = Meteor.users.findOne({_id: userId});
    if (!user) {
        return;
    }
    if (user.username) {
        return user.username;
    }
    if (user.emails) {
        if (user.emails.length > 0) {
            return user.emails[0].address;
        }
        else {
            return;
        }
    }
});

Handlebars.registerHelper('fromNow', (date) => {
        return moment(date).fromNow();
});
