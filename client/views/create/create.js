Template.create.helpers({
    cartoon: function() {
        var id = Session.get('currentCartoon');
        return Cartoons.findOne({_id: id});
    }
});
