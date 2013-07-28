Template.cartoon.helpers({
    cartoon: function() {
        var id = Session.get('currentCartoon');
        return Cartoons.findOne({_id: id});
    },
    captions: function() {
        var currentCaption = Session.get('currentCaption');

        if(currentCaption) {
            return Captions.find({_id: currentCaption});
        }

        return Captions.find({cartoon: Session.get('currentCartoon')});
    }
});

