randomRecord = function (collection, criteria) {
    var rand = Math.random(),
        options = {sort: { random: 1 }, reactive: false },
        result = collection.findOne(_.extend({ random : { $gte : rand } }, criteria), options);

    if ( result == null ) {
        result = collection.findOne(_.extend({ random : { $lte : rand } }, criteria), options);
    }

    console.log(result);

    return result;
};

var previousCartoon;

randomCartoon = function () {

    var criteria = previousCartoon ? { _id: { $ne : previousCartoon } } : {},
        cartoon = randomRecord(Cartoons, criteria);

    if (cartoon){
        previousCartoon = cartoon._id;
    }


    return cartoon;
};