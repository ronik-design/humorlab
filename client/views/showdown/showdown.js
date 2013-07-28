var previousCartoon;

function randomRecord(collection, criteria) {
    var rand = Math.random(),
        result = collection.findOne(_.extend({ random : { $gte : rand } }, criteria), {sort: { random: 1 } });

    if ( result == null ) {
        result = collection.findOne(_.extend({ random : { $lte : rand } }, criteria), {sort: { random: 1 } });
    }

    console.log(rand);
    console.log(result);

    return result;
}


Template.showdown.helpers({
    cartoon: function() {
        var criteria = previousCartoon ? { _id: { $ne : previousCartoon } } : {},
            cartoon  = randomRecord(Cartoons, criteria), captionA, captionB;


        if(Captions.find().count() > 0) {
            captionA = randomRecord(Captions, { cartoon: cartoon._id });

            if(captionA) {
                captionB = randomRecord(Captions, { cartoon: cartoon._id, _id: { $ne : captionA._id } });

                cartoon.captionA = captionA.text;
                cartoon.captionB = captionB.text;
            }
        }

        previousCartoon = cartoon._id;

        return cartoon;
    }
});