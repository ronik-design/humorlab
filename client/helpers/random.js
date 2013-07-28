randomRecord = function (collection, criteria) {
    var rand = Math.random(),
        result = collection.findOne(_.extend({ random : { $gte : rand } }, criteria), {sort: { random: 1 } });
    console.log(rand);
    console.log(result);
    if ( result == null ) {
        result = collection.findOne(_.extend({ random : { $lte : rand } }, criteria), {sort: { random: 1 } });
    }
    console.log(result);
    return result;
};

var previousCartoon;

randomCartoon = function () {
    var criteria = previousCartoon ? { _id: { $ne : previousCartoon } } : {},
        cartoon = randomRecord(Cartoons, criteria);

    previousCartoon = cartoon._id;

    return cartoon;
};