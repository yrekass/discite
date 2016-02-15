'use strict';
/*global Quizzs:true*/
/**
 * Created by Youness on 28/01/2016.
 */


Quizzs.allow({
    insert: (userId) => {
        console.log("Quiiz createed!!!");
        return !!userId;
    },
    update: (userId) => {
        return !!userId;
    },
    remove: () => {
        return false;
    }
});
