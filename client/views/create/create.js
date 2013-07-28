Template.create.helpers({
    cartoon: function() {
        return Session.get('currentCartoon');
    }
});

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
    }
});

//buzz.defaults.preload = 'auto';
//buzz.defaults.autoplay = false;
//buzz.defaults.loop = false;
//buzz.defaults.placeholder = '--';
//buzz.defaults.duration = 5000;
//buzz.defaults.formats = ['wav'];

// CATEGORY
//var bodylangauge = new buzz.sound('/audio/category/bodylanguage.wav'),
//    categoriesare = new buzz.sound('/audio/category/categoriesare.wav'),
//    clothing = new buzz.sound('/audio/category/clothing.wav'),
//    corporateladder = new buzz.sound('/audio/category/corporateladder.wav'),
//    downsizing = new buzz.sound('/audio/category/downsizing.wav'),
//    games = new buzz.sound('/audio/category/games.wav'),
//    height = new buzz.sound('/audio/category/height.wav'),
//    internet = new buzz.sound('/audio/category/internet.wav'),
//    layoffs = new buzz.sound('/audio/category/layoffs.wav'),
//    majors = new buzz.sound('/audio/category/majors.wav'),
//    onejobbetter = new buzz.sound('/audio/category/onejobbetter.wav'),
//    overeducated = new buzz.sound('/audio/category/overeducated.wav'),
//    pets = new buzz.sound('/audio/category/pets.wav'),
//    quitcomplaining = new buzz.sound('/audio/category/quitcomplaining.wav'),
//    sex = new buzz.sound('/audio/category/sex.wav'),
//    smoking = new buzz.sound('/audio/category/smoking.wav'),
//    wordplay = new buzz.sound('/audio/category/wordplay.wav'),

// INSIGHT
//    catmouse = new buzz.sound('/audio/insight/catmouse.wav'),
//    chariot_roman = new buzz.sound('/audio/insight/chariot_roman.wav'),
//    doctor_casket = new buzz.sound('/audio/insight/doctor_casket.wav'),
//    general_encouragement = new buzz.sound('/audio/insight/general_encouragement.wav'),
//    howtobefunny = new buzz.sound('/audio/insight/howtobefunny.wav'),
//    in_out_boxes = new buzz.sound('/audio/insight/in_out_boxes.wav'),
//    small_main = new buzz.sound('/audio/insight/small_man.wav'),
//    snake_butt = new buzz.sound('/audio/insight/snake_butt.wav'),

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

var closings = new buzz.group([closing]);
var compliments = new buzz.group([compliment1, compliment2]);
var laughs = new buzz.group([laugh1, laugh2, laugh3]);
var zingers = new buzz.group([zinger1, zinger2, zinger3]);
