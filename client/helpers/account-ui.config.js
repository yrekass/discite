/**
 * Extend account ui for signin
 */
Accounts.ui.config({
    requestPermissions: {},

    extraSignupFields: [{
        fieldName: 'username',
        fieldLabel: 'Username',
        inputType: 'text',
        visible: true,
        validate: function (value, errorFunction) {
            if (!value) {
                errorFunction("Please write your username");
                return false;
            } else {
                return true;
            }
        }
    }, {
        fieldName: 'lastName',
        fieldLabel: 'Last name',
        inputType: 'text',
        visible: true
    },{
        fieldName: 'firstName',
        fieldLabel: 'First name',
        inputType: 'text',
        visible: true
    }]
});