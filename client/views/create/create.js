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


            var compliment = getRandom(compliments);
            compliment.bind("ended", function() {
                Meteor.Router.to("/caption/" + id);
            });

            compliment.play();


        }
    },

    'click .difficulty': function (e) {
        var difficulty = $(e.target).val();


        $('.caption-enter').removeClass('easy, medium, hard').addClass(difficulty);

        if (difficulty == 'easy') {

        } else if(difficulty == 'medium') {

            bob("/audio/category/categoriesare.wav");
        }

    },

    'click #bob': function(e) {
        var insightAudio = Session.get('currentCartoon').insightAudio;

        if(insightAudio){
            bob(insightAudio);
        }

    }

});

function getRandom(arr){
    return arr[Math.floor(Math.random() * (arr.length - 1))];
}

function bob(url) {
    buzz.all().stop();

    var $bob = $("#bob"),
        sound = new buzz.sound(url);

    sound.bind("ended", function() {
        $bob.removeClass("speaking");
    });
    $bob.addClass("speaking");
    sound.play();
}

    // CLOSING
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

var closings = [closing],
    compliments = [compliment1, compliment2],
    laughs = [laugh1, laugh2, laugh3],
    zingers = [zinger1, zinger2, zinger3];




