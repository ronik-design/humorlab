Template.showdown.helpers({
    cartoon: function() {
        var cartoon  = Session.get("currentCartoon"), captionA, captionB;

        if(cartoon && Captions.find({cartoon: cartoon._id}, {reactive: false}).count() > 0) {
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

        if($(".cartoon-block.reveal-data").length === 0) {
            var $clicked = $(e.target).closest(".cartoon-block"),
                $score = getScoreElement($clicked),
                score = parseInt($score.text());

            $score.text(score + 1);

            var $options = $(".cartoon-block").addClass("reveal-data"),
                $a = $($options[0]),
                $b = $($options[1]);

            if(getScore($a) > getScore($b)) {
                $a.addClass("winner");
                $b.addClass("loser");
            } else {
                $a.addClass("loser");
                $b.addClass("winner");
            }

            Captions.update(this._id, {$inc: {score: 1}});
        }
    }
});

function getScore($option){
    return parseInt(getScoreElement($option).text());
}

function getScoreElement($option) {
    return $option.find("figcaption p");
}