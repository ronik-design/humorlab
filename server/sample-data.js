Meteor.startup(function () {


    var cartoons = [
        {
            src: "/img/cartoon_1_orig_cat-mouse-gun.png",
            insightAudio: '/audio/insight/catmouse.wav',
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
            insightAudio: '/audio/insight/doctor_casket.wav',
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
            insightAudio: '/audio/insight/chariot_roman.wav',
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
            insightAudio: '/audio/insight/snake_butt.wav',
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
            insightAudio: '/audio/insight/in_out_boxes.wav',
            categories: [
                { name: "Over-Educated/Qualified", audio: '/audio/category/overeducated.wav' },
                { name: "One Job Better than Other",audio: '/audio/category/onejobbetter.wav' },
                { name: "Sex", audio: '/audio/category/sex.wav' },
                { name: "Corporate Ladder/Internships", audio: '/audio/category/corporateladder.wav' },
                { name: "Quit Complaining", audio: '/audio/category/quitcomplaining.wav' },
                { name: "Layoffs", audio: '/audio/category/layoffs.wav' },
                { name: "Majors", audio: '/audio/category/majors.wav' }
            ],
            setups: [
                { text: "Wanna", audio: '/audio/category/wanna.wav' },
                { text: "On the bright side", audio: '/audio/category/on_the_brightside.wav' },
                { text: "Do you ever feel", audio: '/audio/category/do_you_ever_feel.wav' },
                { text: "This is not what I had in mind when", audio: '/audio/category/this_is_not_what_i_had_in_mind_when.wav' },
                { text: "Just be glad you didn’t get", audio: '/audio/category/just_be_glad_you_didnt_get.wav' }
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
            insightAudio: '/audio/insight/small_man.wav',
            categories: [
                { name: "Height", audio: '/audio/category/height.wav' },
                { name: "Sex", audio: '/audio/category/sex.wav' },
                { name: "Clothing", audio: '/audio/category/clothing.wav' },
                { name: "downsizing", audio: '/audio/category/downsizing.wav' },
                { name: "Games", audio: '/audio/category/games.wav' },
                { name: "Body Language", audio: '/audio/category/bodylanguage.wav' },
                { name: "Wordplay", audio: '/audio/category/wordplay.wav' },
                { name: "Smoking", audio: '/audio/category/smoking.wav' },
                { name: "Internet", audio: '/audio/category/internet.wav' },
                { name: "Pets", audio: '/audio/category/pets.wav' }
            ],
            setups: [
                { text: "The good news is", audio: "/audio/setup/the_good_news_is.wav" },
                { text: "We met at the", audio: "/audio/setup/we_met_at_he.wav" },
                { text: "You should see him", audio: "/audio/setup/you_should_see_him.wav" },
                { text: "He hates it when", audio: "/audio/setup/he_hates_it_when.wav" },
                { text: "I got him on", audio: "/audio/setup/i_got_him_on.wav" },
                { text: "I got him at", audio: "/audio/setup/i_got_him_at.wav" }
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