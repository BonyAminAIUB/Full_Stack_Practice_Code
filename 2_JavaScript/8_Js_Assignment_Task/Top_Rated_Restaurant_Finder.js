function topRatedRestaurant(restaurants) {
    if(Array.isArray(restaurants) !== true || restaurants.length === 0){
        return "Invalid";
    }
    else{
        let maxRating = 0;
        let name;
        for(let i = 0; i<restaurants.length; i++){
            if(restaurants[i].rating > maxRating){
                maxRating = restaurants[i].rating;
                name = restaurants[i].name;
                name = name.toUpperCase();
            }
        }
        return name;
    }
}