
var joke = "JavaScript walked into a bar....";
var toldJoke = "false";
var $punchline = "Better watch out for those semi-colons.";


if (toldJoke == true) {
    console.log($punchline);
} else {
    console.log(joke);
}


var joesFavoriteMovie = "Forbidden Planet";
var movieTicket$ = 9;
//
if (movieTicket$ >= 9) {
    console.log("Too much!");
    if (joesFavoriteMovie !== 'Forbidden Planet' ){
        console.log('Not bad Bob ( ͡° ͜ʖ ͡°) ');
        if (joesFavoriteMovie == 'Forbidden Planet' )
            console.log('Not bad Bob ( ͡° ͜ʖ ͡°) ');
} else {
    console.log('We\'re going to see'  + joesFavoriteMovie  | "Bug feature");
}

var a = 5;
var b = '5';
var equal;

if (a == + b) {
    equal = true;
} else {
    equal = false;
}
