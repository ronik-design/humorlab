Template.showdown.helpers({
    cartoon: function() {
        var cartoon  = Session.get("currentCartoon"), captionA, captionB;

        if(cartoon && Captions.find({cartoon: cartoon._id}).count() > 0) {
            captionA = randomRecord(Captions, { cartoon: cartoon._id });

            if(captionA) {
                captionB = randomRecord(Captions, { cartoon: cartoon._id, _id: { $ne : captionA._id } });

                cartoon.optionA = _.extend({src: cartoon.src}, captionA);
                cartoon.optionB = _.extend({src: cartoon.src}, captionB);
            }
        }

        return cartoon;
    }
});

Template.showdown.events({
    'click a.skip': function (e) {
        e.preventDefault();

        Session.set("currentCartoon", randomCartoon());
    }
});

Template.option.events({
    'click .cartoon-block': function (e) {
        e.preventDefault();

        console.log(this);
    }
});