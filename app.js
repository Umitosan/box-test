/* jshint esversion: 6 */

var bars = [];

function Bar(index, height, color) {
  this.index = index;
  this.baseColor = color;
  this.color = color;
  this.height = height;
}



function buildBars() {

  for (let i = 0; i < 100; i++) {
    let c;
    if ( (i % 2) === 0 ) {
      c = 'lightblue';
    } else {
      c = 'lightgrey';
    }
    bars.push( new Bar(i,30,c) );
  }

}

////////////////////////////////////
////////////////////////////////////
$(document).ready( function() {
  console.log('page loaded');

  buildBars();

  for (let i = 0; i < bars.length; i++) {
    let b = bars[i];
    let elem = " <div class='bar' style='background: "+b.color+"; height:"+b.height+"px;' ind='"+i+"'>  </div> ";
    $(".container-main").append( elem );
  }

  $('.bar').mouseenter(function(event1) {
    // console.log('this = ',this);
    $(this).css("background","pink");
  }).mouseleave(function(event2) {
    // console.log('$(this) = ',$(this));
    let ind = parseInt( $(this).attr("ind") );
    $(this).css("background",bars[ind].baseColor);
  });

});
