$(document).ready(function () {

    var randomNum = Math.floor(Math.random() * (120 - 19 + 1)) + 19; // <--- between 19-120

    $("#randomNum").text(randomNum);

    var userScore = 0;
    var wins = 0;


    function makeCrystals() {

        var images = ["assets/images/aqua-crystal.png", "assets/images/blue-crystal.png", "assets/images/clear-crystal.png", "assets/images/purple-crystal.png"];

        for (var i = 0; i < images.length; i++) {
            var div = $("<img>");
            div.addClass("crystal");
            div.attr("src", images[i]); 0 -
                div.attr("crystalVal", Math.floor(Math.random() * 12) + 1);
            $(".crystalContainer").append(div);
            var userScore = 0;
            $("#userScore").text(userScore);
            $("#wins").text("Wins: " + wins);

        }
    }

    makeCrystals();

    $(".crystal").on("click", function () {

        var crystalVal = ($(this).attr("crystalVal"));
        console.log(crystalVal);

        // crystalVal = parseInt(crystalVal);
        userScore += parseInt(crystalVal);
        $("#userScore").text(userScore);

        // var totalScore;

        // for (var i = randomNum; i >= totalScore; i++) {

        //     // var totalScore = userScore + counter;

        //     totalScore = 
        //     console.log(totalScore);

        if (userScore > randomNum) {
            alert("Game over!");
            $(".crystalContainer").empty();
            wins = 0;
            makeCrystals();
        } else if (userScore === randomNum) {
            wins++;
            $("#wins").text(wins);
            alert("You win!");
        } else {
            totalScore =
                $("#userScore").text(userScore);
        }
    });

});

// PSEUDO-CODE
// =========================================================

// wins, losses, randomNum, userScore
// also: array of image sources (to create four diff crystals; do it in a loop; can attach img src to crystal when created and simulate having loop; var images = ["assets/crystal1", "assets/crystal2"]); loop thru array.... create four divs and set bg img or set source to be index of array)
// //if userscore exceeds or is equal to, call this function again, which restarts the game

// FUNCTION 1 -- we make one so we only have one function to recall when we restart the game
// set randomNum between 19-120 with Math.random
// loop through images array
// for every index, create image on screen
// add class
// add src
// add crystal value as attribute
// append image to screen

// // create click event on crystals (sim to calculator; create it on .crystal)
// // use $(this)   .attr to capture value attribute; this hooks onto specific value per crystal
// // add clicked value to userScore
// // make conditions to check for win/loss; can do function or if/then; write if/then then abstract into a function is a good way to do it
//     // if userScore === randomNum; ++ win/loss (can also start over upon win)
//     // if userScore > randomNum; 
// // recall makeDiv which will recreate page elements, reset values

// //process: start with variables, then figure out what to do with them; any process you wanna do mroe than once, use function, anything you wanna use more than once, use variable