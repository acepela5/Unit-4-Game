$(document).ready(function() {
    $('[data-toggle="popover"]').popover();
  // variable declaration

  var winsCounter = 0; // is global for all the games

  var lossesCounter = 0; // is global for all the games

  var computerNumber = 0; // this is relate always with the current game

  var userCounter = 0; // this is relate always with the current game

  /////////image array
  var image1 = "./assetts/images/madHattersmall.png";
  var image2 = "./assetts/images/queenOfHeartssmall.png";
  var image3 = "./assetts/images/mouseTeasmall.png";
  var image4 = "./assetts/images/whiteRabbitleftsmall.png";
  var imageArray = [image1, image2, image3, image4];

//   creates random number for the computer
  function calculateComputer() {
    computerNumber = Math.floor(Math.random() * 101) + 19;
    $("#computerNumberBox").text(computerNumber);
    console.log(computerNumber);
  }

//   creates a random number and attaches it to an image in the array
  function prepareMyImages() {
    var imageValues = [
      Math.floor(Math.random() * 11) + 1,
      Math.floor(Math.random() * 11) + 1,
      Math.floor(Math.random() * 11) + 1,
      Math.floor(Math.random() * 11) + 1
    ];
    console.log(imageValues);
        

    for (var i = 0; i < imageArray.length; i++) {
      var imagesWithNumbers = $("<img>");
      imagesWithNumbers.addClass("images-with-numbers");
      imagesWithNumbers.attr("src", imageArray[i]);
      imagesWithNumbers.attr("data-value", imageValues [i] );
      $("#myImages").append(imagesWithNumbers);
    }
  
    // when images are clicked they send a random number   the console log
    $(".images-with-numbers").on("click", function() {
      var valueImageClicked = $(this).attr("data-value");
      valueImageClicked = parseInt(valueImageClicked);

      console.log("valueImageClicked: ", valueImageClicked);

      console.log("urlimageclicked: ", $(this).attr("src"));
// the counter increase based on the value of the picture clicked

      $("#userScoreBox").text(userCounter += valueImageClicked);


      if (userCounter === computerNumber) {
        alert("You win" + " " + winsCounter++);
        $("#scoreBoardBox").html(`<p>Losses: ${lossesCounter}<p><p>Wins: ${winsCounter}<p>`);
        game();
    } 
      else if (userCounter > computerNumber) {
        alert("You lost" + " " + lossesCounter++);
        $("#scoreBoardBox").html(`<p>Losses: ${lossesCounter}<p><p>Wins: ${winsCounter}<p>`);
        game();
      }
    })
 
    
    }
        function game(){
        // reset the counters
        computerNumber = Math.floor(Math.random() * 101) + 19;
    $("#computerNumberBox").text(computerNumber);
        //call my functions
        userCounter = 0;
        imageValues = [
            Math.floor(Math.random() * 11) + 1,
            Math.floor(Math.random() * 11) + 1,
            Math.floor(Math.random() * 11) + 1,
            Math.floor(Math.random() * 11) + 1
          ];
        };
    
  
  calculateComputer ();
  prepareMyImages();
  game();

  
});