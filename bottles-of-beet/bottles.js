function bottlesOfBeer(number) {

    while(number !== 0) {
        if (number === 1) {
            console.log("Time to order more beer!");;
            break;
        }
        console.log(number +" bottle of beer on the wall, " +number+" bottles of beer. Take one down, pass it around " + --number +" bottles of beer!");
    } 
}

bottlesOfBeer(99);