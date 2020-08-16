class Movie {
    title:string;
    studio:string;
    rating:string;


    constructor(movieData: addingMovie) {
        this.title=movieData.title;
        this.studio=movieData.studio;
        this.rating=movieData.rating;
    }
    getPG()
    {
        console.log(`Rating is ${this.rating}`);
        
    }
}
interface addingMovie 
{
    title:string;
    studio:string;
    rating:string;
}

let movie1= new Movie({
        "title":"Casino Royale",
        "studio":"Eon Productions",
        "rating":"PG­13"
});


console.log(movie1);
movie1.getPG();