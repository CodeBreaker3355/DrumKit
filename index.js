var noOfdrums = document.querySelectorAll(".drum").length; //length of elements having drum class

for (var i = 0; i < noOfdrums; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function() { //Click Support

    var carryInnerHTML = this.innerHTML;
    Checking(carryInnerHTML);
    playvideo(carryInnerHTML);
  });


  // Keyboard Support

  document.addEventListener("keypress", function(event) {
    Checking(event.key);
    playvideo(event.key);
  });


  // creating A Function which can check for both buttons clicks and keypress

  function Checking(key) {
    switch (key) {
      case "w":
        var audio = new Audio('sounds/tom-1.mp3');
        audio.play();
        break;
      case "a":
        var audio = new Audio('sounds/tom-2.mp3');
        audio.play();

        break;
      case "s":
        var audio = new Audio('sounds/tom-3.mp3');
        audio.play();

        break;
      case "d":
        var audio = new Audio('sounds/tom-4.mp3');
        audio.play();

        break;
      case "j":
        var audio = new Audio('sounds/snare.mp3');
        audio.play();

        break;
      case "k":
        var audio = new Audio('sounds/crash.mp3');
        audio.play();

        break;
      case "l":
        var audio = new Audio('sounds/kick-bass.mp3');
        audio.play();

        break;
    }
  }
}


// adding animation to the buttons
function playvideo(event){
      var addanimation=document.querySelector("."+event);
      addanimation.classList.add("pressed");
      setTimeout(function(){
        addanimation.classList.remove("pressed")
      },100);

}
