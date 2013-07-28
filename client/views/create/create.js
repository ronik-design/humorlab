Template.create.helpers({
    cartoon: function() {
        return Session.get('currentCartoon');
    }
});

//buzz.defaults.preload = 'auto';
//buzz.defaults.autoplay = false;
//buzz.defaults.loop = false;
//buzz.defaults.placeholder = '--';
//buzz.defaults.duration = 5000;
//buzz.defaults.formats = ['wav'];

// INSIGHT
//    general_encouragement = new buzz.sound('/audio/insight/general_encouragement.wav'),
//    howtobefunny = new buzz.sound('/audio/insight/howtobefunny.wav'),

// CLOSING

Template.create.events({
    'click .submit': function () {
        var text = $(".caption-entry").val(),
            cartoonId = Session.get('currentCartoon')._id;

        if(text && cartoonId) {
            var id = Captions.insert({
                cartoon: cartoonId,
                text: text,
                score: 0
            });

            Meteor.Router.to("/caption/" + id);
        }
    },

    'click .difficulty': function (e) {
        console.log($(e.target).val());
    }
});
var closing = new buzz.sound('/audio/closing/closing.wav'),

// COMPLIMENT
    compliment1 = new buzz.sound('/audio/compliment/compliment1.wav'),
    compliment2 = new buzz.sound('/audio/compliment/compliment2.wav'),



// LAUGH
    laugh1 = new buzz.sound('/audio/laugh/laugh_track1.wav'),
    laugh2 = new buzz.sound('/audio/laugh/laugh_track2.wav'),
    laugh3 = new buzz.sound('/audio/laugh/laugh_track3.wav'),

// ZINGER
    zinger1 = new buzz.sound('/audio/zinger/zinger1.wav'),
    zinger2 = new buzz.sound('/audio/zinger/zinger2.wav'),
    zinger3 = new buzz.sound('/audio/zinger/zinger3.wav');

var closings = new buzz.group([closing]);
var compliments = new buzz.group([compliment1, compliment2]);
var laughs = new buzz.group([laugh1, laugh2, laugh3]);
var zingers = new buzz.group([zinger1, zinger2, zinger3]);
