Template.create.helpers({
    cartoon: function() {
        var id = Session.get('currentCartoon');
        return Cartoons.findOne({_id: id});
    }
});

buzz.defaults.preload = 'auto';
buzz.defaults.autoplay = false;
buzz.defaults.loop = false;
buzz.defaults.placeholder = '--';
buzz.defaults.duration = 5000;
buzz.defaults.formats = ['wav'];

var categories = new buzz.sound('/audio/category/'),
    insights = new buzz.sound('/audio/insight/'),
    closings = new buzz.sound('/audio/closing/'),
    compliments = new buzz.sound('/audio/compliment/'),
    intros = new buzz.sound('/audio/intro/'),
    laughs = new buzz.sound('/audio/laugh/'),
    setups = new buzz.sound('/audio/setup/'),
    zingers = new buzz.sound('/audio/zinger/');

categories.play();
