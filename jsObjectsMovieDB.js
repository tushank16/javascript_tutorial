var movie = [
    {
        title : "Hera Pheri",
        hasWatched : true,
        rating : 4.5
    },
    {
        title : "Phir Hera Pheri",
        hasWatched : true,
        rating : 5
    },
    {
        title : "Joker",
        hasWatched : false,
        rating : 4.8
    },
]
function builtString(movie){
    var result = "You Have ";
    if(movie.hasWatched){
        result += "watched ";
    }else{
        result += "not watched ";
    }
    result += movie.title + " having rating ";
    result += movie.rating + " stars";
    return result;
}

movie.forEach(function(movie){
    console.log(builtString(movie));
})