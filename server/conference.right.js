Conferences.allow({
    insert: (userId) => {
        return userId;
    },
    update: (userId) => {
        return !!userId;
    },
    remove: () => {
        return false;
    }
});