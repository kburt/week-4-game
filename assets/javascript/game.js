window.onload = function() {
    // create variables for the user's score and win/loss count
    var userScore = 0;
    $(".whereYourScoreGoes").html(userScore);
    var wins = 0;
    var losses = 0;

    //assign a random number between 19 - 120 and display it on the page
    var random = Math.floor(Math.random()* 101 + 19);
    
    $(".whereRandomNumberGoes").html(random);
    console.log("Random number: " + random);
    
    //create variables for each crystal and assign them random values between 1 - 12
    var greenCrystal = Math.floor(Math.random()*11+1);
    console.log("Green: " + greenCrystal);
    var pinkCrystal = Math.floor(Math.random()*11+1);
    console.log("Pink: " + pinkCrystal);
    var purpleCrystal = Math.floor(Math.random()*11+1);
    console.log("Purple: " + purpleCrystal);
    var quartzCrystal = Math.floor(Math.random()*11+1);
    console.log("Quartz: " + quartzCrystal);
    
    //create win counter function
    function countWins() {
        alert("You won!");
        wins++;
        $("#wayToGo").append(" " + wins);
        reset();
    }
    
    //create loss counter function
    function countLosses() {
        alert("You lost!");
        losses++;
        $("#wayToLose").append(" " + losses);
        reset();
    }
    
    //create game reset function
    function reset(){
        var random = Math.floor(Math.random()* 101 + 19);
    
        $(".whereRandomNumberGoes").html(random);
        console.log("Random number: " + random);
        var greenCrystal = Math.floor(Math.random()*11+1);
        console.log("Green: " + greenCrystal);
        var pinkCrystal = Math.floor(Math.random()*11+1);
        console.log("Pink: " + pinkCrystal);
        var purpleCrystal = Math.floor(Math.random()*11+1);
        console.log("Purple: " + purpleCrystal);
        var quartzCrystal = Math.floor(Math.random()*11+1);
        console.log("Quartz: " + quartzCrystal);
        
        userScore = 0;
        $(".whereYourScoreGoes").html(userScore);
    }
    
    //click function for GREEN to add to userScore
    $(".clickGreenImage").on("click", function() {
        userScore = userScore + greenCrystal;
        $(".whereYourScoreGoes").html(userScore);
    //check if the userScore is equal to or over random
        if (userScore === random) {
          countWins();
        }
        else if (userScore > random) {
            countLosses();
        }
        })
    
     //click function for PINK to add to userScore
    $(".clickPinkImage").on("click", function() {
        userScore = userScore + pinkCrystal;
        $(".whereYourScoreGoes").html(userScore);
    //check if the userScore is equal to or over random
        if (userScore === random) {
          countWins();
        }
        else if (userScore > random) {
            countLosses();
        }
        })
    
     //click function for PURPLE to add to userScore
    $(".clickPurpleImage").on("click", function() {
        userScore = userScore + purpleCrystal;
        $(".whereYourScoreGoes").html(userScore);
    //check if the userScore is equal to or over random
        if (userScore === random) {
          countWins();
        }
        else if (userScore > random) {
            countLosses();
        }
        })
    
     //click function for QUARTZ to add to userScore
    $(".clickQuartzImage").on("click", function() {
        userScore = userScore + quartzCrystal;
        $(".whereYourScoreGoes").html(userScore);
    //check if the userScore is equal to or over random
        if (userScore === random) {
          countWins();
        }
        else if (userScore > random) {
            countLosses();
        }
        })
    
    
    
    
    
    
        
    } //ends function for window.onload
    
    
    
