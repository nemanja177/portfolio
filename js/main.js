let subbmited = false;

function getCurrentWorkingDivIndex() {
  return $(".activeWorkDiv").data('index');
};

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
};

function divChanger(direction) {
  let divIndex = changeIndex(direction);
  let divList = $(".work-segment");
  let currentDiv = $('.activeWorkDiv').removeClass('activeWorkDiv');
  for ( let i = 0; i <= divList.length; i++) {
    if ( parseInt($(divList[i]).data('index')) == divIndex ) {
      $(divList[i]).addClass('activeWorkDiv');
    }
  }
};

function checkFields() {
  let errorName = checkName();
  let errorEmail = checkEmail();
  let errorMessage = checkMessage();
  if ( errorName !== false && errorEmail !== false && errorMessage !== false) {
    return true;
  } else {
    return false;
  }
};

function checkName() {
  let regex = /^[a-zA-Z]*$/;
  let formName = document.getElementById("entry.556195246");
  if( regex.test(formName.value) && formName.value !== "" && formName.value !== null) {
    return true;
  } else {
    formName.value = "";
    $(formName).css({"border-color": "red", "border-width": "2px"});
    $(formName).attr("placeholder", "Name is not valid!");
    return false;
  }
};
function checkEmail() {
  let regex = /^\S+@\S+$/;
  let formEmail = document.getElementById("entry.1808055942");
  console.log(formEmail.value);
  if( regex.test(formEmail.value) && formEmail.value !== "" && formEmail.value !== null) {
    return true;
  } else {
    formEmail.value = "";
    $(formEmail).css({"border-color": "red", "border-width": "2px"});
    $(formEmail).attr("placeholder", "Email is not valid!");
    return false;
  }
};
function checkMessage() {
  let formMessage = document.getElementById("entry.160402578");
  if( formMessage.value !== "" && formMessage.value !== null) {
    return true;
  }
  formMessage.value = "";
  $(formMessage).attr("placeholder", "Please enter a message!");
  $(formMessage).css({"border-color": "red", "border-width": "2px"});
  return false;
};

$("#gform").submit(function() {
  if(checkFields() === true ) {
    $(this).slideUp('slow');
    $(".contact-text").css("top", "50%");
    $(".contact-text").append("<h1>Message delivered!</h1>");
    return true;
  } else {
    // resetFields();
    $(".contact-text").append("Check your form!");
    return false;
  }
});

$(".nav-toggle").click(function() {
  $(".left-side-nav").toggleClass('active-navbar');
})

function resetFields() {
  $("#entry.556195246").val() = ""
  $("#entry.1808055942").val() = "";
  $("#entry.160402578").val() = "";
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
