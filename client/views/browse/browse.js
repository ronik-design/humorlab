Template.browse.cartoons = function() {
    var cartoons  = Cartoons.find({});
    console.log(cartoons);
    return cartoons;
};

Template.browse.caption = function() {
    var caption  = Captions.findOne({cartoon: this._id});
    return caption ? caption.text : "";
};
