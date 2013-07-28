Meteor.startup(function () {

    var cartoons = [
        {
            src: "/img/cartoon_1_orig_cat-mouse-gun.png",
            categories: [],
            captions: [
                { text: "Six rounds. Nine lives. You do the math.", score: 4 },
                { text: "When did you start going all Looney Tunes on me here?", score: 3 },
                { text: "You will get your cheese when you return my catnip.", score: 2 },
                { text: "Hey, I got nine kids, a dental floss problem, and an owner with a laser pointer--you'd be doing me a favor.", score: 1 }
            ]
        },
        {
            src: "/img/cartoon_2_orig_doctor-coffin.png",
            categories: [],
            captions: [
                { text: "I recommend zombification.", score: 2 },
                { text: "This should help with the claustrophobia.", score: 3 },
                { text: "Any stiffness?", score: 4 },
                { text: "Deadness persists.", score: 1 }
            ]
        },
        {
            src: "/img/cartoon_3_orig_parked-chariot.png",
            categories: [],
            captions: [
                { text: "Where I come from, chivalry isn't dead; it just hasn't been invented yet.", score: 3 },
                { text: "You can tell the judge why you were doing CX in a XXV", score: 4 },
                { text: "Excuse me ma'am, my chariot needs a jumpstart. Would you happen to have any apples?", score: 2 },
                { text: "Look, if you left the bar with me you clearly shouldn't be driving.", score: 1 }
            ]
        },
        {
            src: "/img/cartoon_4_orig_snake-butt.png",
            categories: [],
            captions: [
                { text: "I don't like the way Adam looks at you.", score: 4 },
                { text: "told you silicone was non digestible.", score: 3 },
                { text: "Now you'll probably want a chair.", score: 2 },
                { text: "It’s not my fault that my brain is not evolutionary wired to like that.", score: 1 }
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
            captions: [
                { text: "Roger, everything reminds you of sex.", score: 4 },
                { text: "Last internship I was a coatrack.", score: 3 },
                { text: "Your mornings can't be any worse than my afternoons.", score: 2 },
                { text: "I'm a fan of your work.", score: 1 }
            ]
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
            captions: [
                { text: "We met at the mini bar.", score: 4 },
                { text: "Larry can't tell you about his current project--it's top secret.", score: 2 },
                { text: "Whatever you do, don't agree to play hide-and-seek with him.", score: 3 },
                { text: "The ad said, 'escort at half-price,' I figured how bad could he be?", score: 1 }
            ]
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
                    Captions.insert(_.extend({ cartoon: id, random: Math.random() }, caption));
                });
            }
        });
    }


});