/**
 * Created by Youness on 04/02/2016.
 */

Forums.allow({
    insert: (userId) => {
        console.log('Forum creeted !!');
        return !!userId;
    },
    update: (userId) => {
        return !!userId;
    },
    remove: () => {
        return false;
    }
});