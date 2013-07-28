Template.showdown.helpers({
    cartoon: function() {
        var cartoon  = Session.get("currentCartoon"), captionA, captionB;

        if(cartoon && Captions.find({cartoon: cartoon._id}).count() > 0) {
            captionA = randomRecord(Captions, { cartoon: cartoon._id });

            if(captionA) {
                captionB = randomRecord(Captions, { cartoon: cartoon._id, _id: { $ne : captionA._id } });

                cartoon.captionA = captionA.text;
                cartoon.captionB = captionB.text;
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