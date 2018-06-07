/* jshint esversion: 6 */

let grid = [];
let winHeight = $(window).height();
let winWidth = $(window).width();
let boxSize = 20;
let rowSize = Math.floor( (winWidth-20) / (boxSize) );
let rowTotal = Math.floor( (winHeight-10) / (boxSize) );

function Row(index, size, color) {
  this.index = index;
  this.baseColor = color;
  this.color = color;
  this.size = size;
}

function Box() {

}

function buildGrid() {

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
      background: r.color,
      height: r.size+'px',
    });
  });

  // events
  $('.row').mouseenter(function(event1) {
    // console.log('this = ',this);
    $(this).css("background","pink");
  }).mouseleave(function(event2) {
    // console.log('$(this) = ',$(this));
    let ind = parseInt( $(this).attr("ind") );
    $(this).css("background",grid[ind].baseColor);
  });

  // for (let j = 0; j < rowSize-1; j++) {
  //   let tmpBox;
  //
  //   tmpRow.push(tmpBox)
  // }
  console.log('buildGrid run');
}




// function buildBars() {
//
//   for (let i = 0; i < 100; i++) {
//     let c;
//     if ( (i % 2) === 0 ) {
//       c = 'lightblue';
//     } else {
//       c = 'grey';
//     }
//     bars.push( new Bar(i,barSize,c) );
//   }
//
//   for (let i = 0; i < bars.length; i++) {
//     let b = bars[i];
//     let elem = " <div class='bar' ind='"+i+"'></div> ";
//     $(".container-main").append( elem );
//   }
//
//   $(".bar").each(function(index) {
//     let ind = parseInt( $(this).attr('ind') );
//     let b = bars[ind];
//     $(this).css({
//       background: b.color,
//       height: b.size+'px',
//     });
//   });
//
//   // events
//   $('.bar').mouseenter(function(event1) {
//     // console.log('this = ',this);
//     $(this).css("background","pink");
//   }).mouseleave(function(event2) {
//     // console.log('$(this) = ',$(this));
//     let ind = parseInt( $(this).attr("ind") );
//     $(this).css("background",bars[ind].baseColor);
//   });
//
// }



////////////////////////////////////
////////////////////////////////////
$(document).ready( function() {
  console.log('page loaded');

  buildGrid();

});
