var Movie = /** @class */ (function () {
    function Movie(movieData) {
        this.title = movieData.title;
        this.studio = movieData.studio;
        this.rating = movieData.rating;
    }
    Movie.prototype.getPG = function () {
        console.log("Rating is " + this.rating);
    };
    return Movie;
}());
var movie1 = new Movie({
    "title": "Casino Royale",
    "studio": "Eon Productions",
    "rating": "PG­13"
});
console.log(movie1);
movie1.getPG();
