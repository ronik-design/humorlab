/* Cartoons
{
    credit: "Author Name",
    image: "",
    categories: ["aliens", "police", "abduction", "anal probing"],

 */
Cartoons = new Meteor.Collection('cartoons');

/* Captions
{
    cartoon: cartoon_id,
    user: user_id,
    text: "Blah Blah Blah"
    rating: 100
}
 */
Captions = new Meteor.Collection('captions');
