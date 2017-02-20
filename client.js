// var randomColor;
// var colorArray = ['red', 'yellow','green','blue'];

var buttonClicked;
var numberOfClicks;

$(document).ready(function(){
  console.log('Ready to start, captain');

  // for (var i = 0; i < colorArray.length; i++) {
  //   colorArray[i]
  // }


  $('.color-button').on('click',function(){
    var newColorBlock = $('<div style="color-cube">');
    console.log($(this).attr('data-color') + ' was clicked!');  // attr() not data() logged a color instead of 'undefined'
    newColorBlock.addClass('color-cube');
    buttonClicked = $(this).data('data-color');
    $('.container').append(newColorBlock);
    
    // $('div').append(this).data('data-color');
    // console.log('divs are being added but I can not see them on the DOM');
    console.log('divs are added but are colorless');

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

  });

  // $('#container').append(newColorBlock);
  });


  $('.container').append('<div style="color-cube"></div>');



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
