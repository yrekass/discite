'use strict';
/*global Conferences:true*/

/**
 * Collections conferences actions rigths
 */
Conferences.allow({
    insert: (userId) => {
        return !!userId;
    },
    update: (userId) => {
        return !!userId;
    },
    remove: () => {
        return false;
    }
});