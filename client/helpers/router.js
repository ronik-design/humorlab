Meteor.Router.add({
    '/showdown' : 'showdown',
    '/browse' : 'browse',
    '/cartoon/:id': function(id) {
        Session.set('currentCartoon', id);
        return 'cartoon';
    }
});