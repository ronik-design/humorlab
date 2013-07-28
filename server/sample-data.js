Meteor.startup(function () {

    var cartoons = [
        {
            src: "/img/cartoon_1_orig_cat-mouse-gun.png",
            categories: [],
            captions: [
                "Six rounds. Nine lives. You do the math.",
                "When did you start going all Looney Tunes on me here?",
                "You will get your cheese when you return my catnip.",
                "Hey, I got nine kids, a dental floss problem, and an owner with a laser pointer--you'd be doing me a favor."
            ]
        },
        {
            src: "/img/cartoon_2_orig_doctor-coffin.png",
            categories: [],
            captions: [
                "I recommend zombification.",
                "This should help with the claustrophobia.",
                "Any stiffness?",
                "Deadness persists."
            ]
        },
        {
            src: "/img/cartoon_3_orig_parked-chariot.png",
            categories: [],
            captions: [
                "Where I come from, chivalry isn't dead; it just hasn't been invented yet.",
                "You can tell the judge why you were doing CX in a XXV",
                "Excuse me ma'am, my chariot needs a jumpstart. Would you happen to have any apples?",
                "Look, if you left the bar with me you clearly shouldn't be driving."
            ]
        },
        {
            src: "/img/cartoon_4_orig_snake-butt.png",
            categories: [],
            captions: [
                "told you silicone was non digestible.",
                "It’s not my fault that my brain is not evolutionary wired to like that."
            ]
        },
        {
            src: "/img/cartoon_5_orig_in-out.png",
            categories: [
                "Over-Educated/Qualified",
                "One Job Better than Other",
                "Sex",
                "Corporate Ladder/Internships",
                "Quit Complaining",
                "Layoffs",
                "Majors"
            ],
            captions: []
        },
        {
            src: "/img/cartoon_6_orig_small-man.png",
            categories: [
                "Height",
                "Sex",
                "Clothing",
                "downsizing",
                "Games",
                "Body Language",
                "Wordplay",
                "Smoking",
                "Internet",
                "Pets"
            ],
            captions: []
        }
    ];


    if (Cartoons.find().count() === 0) {
        _.each(cartoons, function(cartoon) {
            var captions = cartoon.captions,
                filtered = _.omit(cartoon, "captions"),
                id;

            filtered.random = Math.random();

            id = Cartoons.insert(filtered);


            if(id) {
                _.each(captions, function(caption) {
                    Captions.insert({ cartoon: id, text: caption, random: Math.random() });
                });
            }
        });
    }


});