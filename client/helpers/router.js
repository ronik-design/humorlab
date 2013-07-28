Meteor.Router.add({
    '/showdown' : 'showdown',
    '/browse' : 'browse',
    '/cartoon/:id': function(id) {
        Session.set('currentCartoon', id);
        Session.set('currentCaption', null);

        return 'cartoon';
    },
    '/caption/:id': function(id) {
        var caption = Captions.findOne({_id: id});

        Session.set('currentCartoon', caption.cartoon);
        Session.set('currentCaption', id);

        return 'cartoon';
    }
});