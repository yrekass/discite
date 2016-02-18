'use strict';
Template.quizzTpl.events({
    'submit form': function (e) {
        e.preventDefault();
        var selected = [];
        $('input[type=checkbox]').each(function() {
            if ($(this).is(":checked")) {
                selected.push($(this).attr('name'));
            }
        });

        Meteor.call('getResult', Router.current().params._id,
            selected,
            (err, note) => $('h1.note').text(note)
        );
    }
});