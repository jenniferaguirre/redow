$(document).ready(function () {
    var randomNumber = Math.floor(Math.random() * 101) + 19;
    randomNumber = parseInt(randomNumber);
    $("#randomNumber").append(randomNumber);

    var wins = 0
    var losses = 0
    var userScore = 0

    function winner() {
        wins++;
        alert("YOU WON! Press OK to play again!");
        $("#wins").text("Wins: " + wins);
        $("#scoretext").html(0);
    }
    function loser() {
        losses++;
        alert("You lose! Press OK to play again!");
        $("#losses").text("Losses: " + losses);
        $("#scoretext").html(0);
    }
    function restart() {
        userScore = 0
        randomNumber = Math.floor(Math.random() * 101) + 19;
        $("#randomNumber").html(randomNumber);
        crystal1Number = Math.floor(Math.random() * 12) + 1;
        crystal2Number = Math.floor(Math.random() * 12) + 1;
        crystal3Number = Math.floor(Math.random() * 12) + 1;
        crystal4Number = Math.floor(Math.random() * 12) + 1;
    }

    var crystal1 = $("#firstcrystal");
    var crystal1Number = Math.floor(Math.random() * 12) + 1;
    $(crystal1).on("click", function () {
        crystal1Number = parseInt(crystal1Number);
        userScore += crystal1Number;
        $("#scoretext").html(userScore);
        if (userScore === randomNumber) {
            winner()
            restart()
        }

        else if (userScore >= randomNumber) {
            loser()
            restart()
        }
    })

    var crystal2 = $("#secondcrystal");
    var crystal2Number = Math.floor(Math.random() * 12) + 1;
    $(crystal2).on("click", function () {
        crystal2Number = parseInt(crystal2Number);
        userScore += crystal2Number;
        $("#scoretext").html(userScore);
        if (userScore === randomNumber) {
            winner()
            restart()
        }

        else if (userScore >= randomNumber) {
            loser()
            restart()
        }
    })


    var crystal3 = $("#thirdcrystal");
    var crystal3Number = Math.floor(Math.random() * 12) + 1;
    $(crystal3).on("click", function () {
        crystal3Number = parseInt(crystal3Number);
        userScore += crystal3Number;
        $("#scoretext").html(userScore);
        if (userScore === randomNumber) {
            winner()
            restart()
        }

        else if (userScore >= randomNumber) {
            loser()
            restart()
        }
    })

    var crystal4 = $("#fourthcrystal");
    var crystal4Number = Math.floor(Math.random() * 12) + 1;
    $(crystal4).on("click", function () {
        crystal4Number = parseInt(crystal4Number);
        userScore += crystal4Number;
        $("#scoretext").html(userScore);
        if (userScore === randomNumber) {
            winner()
            restart()
        }

        else if (userScore >= randomNumber) {
            loser()
            restart()
        }
    })

});