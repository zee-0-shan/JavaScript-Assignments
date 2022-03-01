const movies = [];

function favouriteMovie(operation, movie) {
    // Write your code here
    if(operation=='add'){
       movies.push(movie)
       return movies
    }
    else if(operation==='remove' && movies.length>0){
       movies.pop();
       return movies
    }
    else{
        return []
    }

    }
    

module.exports = favouriteMovie;
