Template.showdown.helpers({
    cartoon: function() {
        var cartoon  = Cartoons.findOne(),
            captions = Captions.find({cartoon: cartoon._id}, {limit: 2}).fetch();

        return {
            src:  cartoon.src,
            captionA: captions[0].text,
            captionB: captions[1].text
        }
    }
});