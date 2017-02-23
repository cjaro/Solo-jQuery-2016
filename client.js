//jQuery code challenge attempt #2 Feb 23
// deleted unecessary variable declarations
// throughout, deleted extra logs
// on line 19 fixed the way I was designating/identifying the color of the newly added block
//this fixed errors I was having with colorless boxes being added
// on line 21 fixed appending by giving div a class and appending to that new div
// I didn't quite have the syntax right first time around
// on line 22 I defined a variable to pick the right color
// line 23 I made a way to change the number of blocks that had been added
// increased the numberofBlocks every time another of like color was added
// singled out the text in the body and their span ids/colors to change
// moved all old comments down to the bottom of the document
//thank you for giving me a second chance.

$(document).ready(function(){
  console.log('Ready to start');

  $('.color-button').on('click',function(){
    var newColorBlock = $(this).data().color;
    console.log($(this).attr('data-color') + ' was clicked');
    $('.container').append('<div class="color-cube' +newColorBlock+ '"></div>');
      var pickColor = '#' + newColorBlock;
      var numberofBlocks = $(pickColor).text();
      numberofBlocks++;
      $(pickColor).text(numberofBlocks);


      });
});












    // $('<p>').text(numberOfClicks); //get to span element with specific color ID




    // if (buttonClicked == red) {
    //   $('.container').append('<div style="color:red"></div>');
    // } else if (buttonClicked == yellow) {
    //   $('.container').append('<div style="color:yellow"></div>');
    // } else if (buttonClicked == green) {
    //   $('.container').append('<div style="color:green"></div>');
    // } else if (buttonClicked == blue) {
    //   $('.container').append('<div style="color:blue"></div>');
    // }



  // $('#container').append(newColorBlock);



// $('.container').append('<div style="color-cube"></div>');



// function addNewBlock(){
//   if(randomColor == )
// }

// newNumberofColors(){
//
// }


// I need to have variables and functions that say:
// If the red button is clicked, append a red block.
// If the yellow button is clicked, append a yellow block.
// How do I say if THIS button is clicked, append a block of THIS SAME color?
// Red button, yellow button, green button, blue button
// $(this).data("id")
//
//Also need to change the "total color" to things with .text(newNumberofColors) or something
// document.getElementById('.container').appendChild('div');
//
//
//
//
//
