var previousShowdown;

Meteor.Router.add({
    '/showdown' : function() {
        Session.set('currentCartoon', randomCartoon());
        return 'showdown';
    },
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
    },
    '/create': handleCreate,
    '/create/:id': handleCreate
});

function handleCreate(id) {
    if(id) {
        var cartoon = Cartoons.findOne({_id: id});
    }

    Session.set('currentCartoon', cartoon ? cartoon : randomCartoon());

    return 'create';
}

Meteor.Transitioner.setOptions({
    'after': function(){
        var pathname = window.location.pathname;

        $('#nav a').removeClass('current');
        $('#nav a[href="' + pathname + '"]').addClass('current');
        $('#bob').removeClass('peek');
    }
});