function getCurrentWorkingDivIndex() {
  return $(".activeWorkDiv").data('index');
}

function changeIndex(direction) {
  let currentDivIndex = getCurrentWorkingDivIndex();
  if ( direction == "left" ) {
    currentDivIndex -= 1;
    if (currentDivIndex == 0) {
      currentDivIndex = 3;
    }
  } else {
    currentDivIndex += 1;
    if ( currentDivIndex > 3 ) {
      currentDivIndex = 1;
    }
  }
  return currentDivIndex;
}

function divChanger(direction) {
  let divIndex = changeIndex(direction);
  let divList = $(".work-segment");
  let currentDiv = $('.activeWorkDiv').removeClass('activeWorkDiv');
  for ( let i = 0; i <= divList.length; i++) {
    if ( parseInt($(divList[i]).data('index')) == divIndex ) {
      $(divList[i]).addClass('activeWorkDiv');
    }
  }
}

$(".page-total").fullpage({
  sectionSelector: '.vertical-scrolling',
  navigation: true,
  slidesNavigation: true,
  controlArrows: false,
  anchors: ["firstsection", "secondsection", "thirdsection", "forthsection"],
  menu: "#menu",

  //afterLoad: function(anchorLink, index) {
    //$header_top.css('background', 'rgba(0, 47, 77, .3)');
    //$nav.css('background', 'rgba(0, 47, 77, .25)');
   //  if (index == 5) {
   //    $('#fp-nav').hide();
   //  }
   // },

   // onLeave: function(index, nextIndex, direction) {
   //   if(index == 5) {
   //     $('#fp-nav').show();
   //   }
   // },
});
