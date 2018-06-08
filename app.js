/* jshint esversion: 6 */

// let winHeight = $(window).height();
// let winWidth = $(window).width();

let winHeight = window.innerHeight;
let winWidth = window.innerWidth;
let grid = [];
let boxSize = 40;
let rowSize = Math.floor( (winWidth) / boxSize);
let rowTotal = Math.floor( (winHeight-10) / boxSize);

function Row(index, size, color) {
  this.boxes = [];
  this.index = index;
  this.size = size;
  this.color = color;
}

function Box(index,size,color) {
  this.index = index;
  this.size = size;
  this.baseColor = color;
  this.color = color;
}


function buildRows() {
  for (let i = 0; i < rowTotal; i++) {
    let c;
    if ( (i % 2) === 0 ) {
      c = 'lightblue';
    } else {
      c = 'grey';
    }
    grid.push( new Row(i,boxSize,c) );
  }

  for (let i = 0; i < grid.length; i++) {
    let elem = " <div class='row' ind='"+i+"'></div> ";
    $(".container-main").append( elem );
  }

  $(".row").each(function(index) {
    let ind = parseInt( $(this).attr('ind') );
    let r = grid[ind];
    $(this).css({
      height: boxSize,
      width: boxSize*grid[0].length
    });
  });
}


function buildBoxes() {
  let tRow = [];
  let c;

  for (let r = 0; r < grid.length; r++) {

    for (let j = 0; j < rowSize; j++) {
      let boxColor;
      if ( ((r+j) % 2) === 0 ) {
        boxColor = 'lightblue';
      } else {
        boxColor = 'grey';
      }
      grid[r].boxes.push( new Box(j,boxSize,boxColor) );
    }

  }

  $('.row').each(function(rIndex) {
    for (var i = 0; i < rowSize; i++) {
      let elem = " <div class='box' ind='"+i+"'></div> ";
      $(this).append( elem );
    }
  });

  $(".box").each(function(index) {
      let rInd = parseInt( $(this).parent().attr('ind') );
      let bInd = parseInt( $(this).attr('ind') );
      let curBox = grid[rInd].boxes[bInd];
      $(this).css({
        "height": curBox.size+'px',
        "width": curBox.size+'px',
        "background-color": curBox.color,
        float: 'left',
        // "border-radius": "3px",
        // "border-width": "0px",
        // "border-color": "none"
      });
  });

  // events
  $('.box').mouseenter(function(event1) {
    $(this).css("background","pink");
  }).mouseleave(function(event2) {
    let rInd = parseInt( $(this).parent().attr('ind') );
    let bInd = parseInt( $(this).attr('ind') );
    $(this).css("background",grid[rInd].boxes[bInd].baseColor);
  });

}








function buildGrid() {
  buildRows();
  buildBoxes();
}

////////////////////////////////////
////////////////////////////////////
$(document).ready( function() {
  console.log('page loaded');

  $(".container-main").css("width", rowSize*boxSize); // prevents the rows from colapsing on window resize
  $(".container-main").css("margin-left", ((winWidth-(boxSize*rowSize) )/2) ); // makes gaps same on both sides of the main container
  $(".container-main").css("margin-top", ((winHeight-(boxSize*rowTotal) )/2) ); // makes gaps same on top and bottom

  buildGrid();

});
