'use strict';
/**
 * Handlebars helper to display username
 */
Handlebars.registerHelper('username', (user) => {
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