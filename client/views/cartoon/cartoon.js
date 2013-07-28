Template.cartoon.helpers({
    cartoon: function() {
        var id = Session.get('currentCartoon');
        return Cartoons.findOne({_id: id});
    },
    captions: function() {
        var id = Session.get('currentCartoon');
        return Captions.find({cartoon: id});
    }
});

