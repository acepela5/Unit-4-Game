$(document).ready(function(){


    // var declaration

    var winsCounter = 0;    // is global for all the games

    var lossesCounter = 0;  // is global for all the games

    var computerNumber = 0  // this is relate always with the current game

    var userCounter = 0;     // this is relate always with the current game

    /////////


function calculateComputer(){
    computerNumber=Math.floor(Math.random() * 101) + 19;
    $("#computerNumberBox").text(computerNumber);
}



    /////


    /// this is going to be values for the stones and 
    var image1 = "./assetts/images/madHatter.png"
    var image2 = "./assetts/images/queenOfHearts.png"
    var image3 = "./assetts/images/mouseTea.png"
    var image4 = "./assetts/images/whiteRabbit.png"
    var imageArray = [image1, image2, image3, image4]


    var imageValues = [Math.floor(Math.random() * 11) + 1, Math.floor(Math.random() * 11) + 1,Math.floor(Math.random() * 11) + 1, Math.floor(Math.random() * 11) + 1,];

    for (var i = 0; i < imageArray.length; i++) {

        var imagesWithNumbers = $("<img>");
        imagesWithNumbers.addClass("images-with-numbers");
        imagesWithNumbers.attr("src",  imageArray[i]);
        imagesWithNumbers.attr("data-value", imageValues[i] )
        $("#myImages").append(imagesWithNumbers)
    }
    $(".images-with-numbers").on("click", function() {
        var valueImageClicked = $(this).attr("data-value")
        console.log("valueImageClicked: ", valueImageClicked)

        console.log("urlimageclicked: ", $(this).attr("src"))

    })




//         $("#madHatter").on("click", function(){
//             alert(userPossibleNumbers)
//         });
    
//         $("#whiteRabbit").on("click", function(){
//             alert("This picture!")
//         });
    
//         $("#queenOfHearts").on("click", function(){
//             alert("This picture is!")
//         });
    
//         $("#mouseTea").on("click", function(){
//             alert("This picture is working!")
//         });

//         if (userCounter === computerNumber) {
//             alert("You win" + winsCounter ++);
//         }
//         else if (userCounter >= computerNumber) {
//             alert("You loose" + lossesCounter ++);
//         }
//     }

});


// var computerNumberDiv = document.getElementById("computerNumberBox");
// var computerNumberDiv = $("#computerNumberBox")


// var winsDiv = document.getElementById("scoreBoardBox");


// var lossesDiv = document.getElementById("scoreBoardBox");


// var userNumberDiv = document.getElementById("userScoreBox");