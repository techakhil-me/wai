$('.email').on("change keyup paste",
  function(){
    if($(this).val()){
      $('.icon-paper-plane').addClass("next");
    } else {
      $('.icon-paper-plane').removeClass("next");
    }
  }
);

$('.next-button').hover(
  function(){
    $(this).css('cursor', 'pointer');
  }
);$(".email").on("change keyup paste", function() {
  if ($(this).val()) {
    $(".icon-paper-plane").addClass("next");
  } else {
    $(".icon-paper-plane").removeClass("next");
  }
});

$(".next-button").hover(function() {
  $(this).css("cursor", "pointer");
});

$(".next-button.email").click(function() {
  console.log("Something");
  $(".email-section").addClass("fold-up");
  $(".success").css("marginTop", 0);
});

function myFunction() {
  var x = document.getElementById("myText").value;
  document.getElementById("demo").innerHTML = x;
}


$('.next-button.email').click(
  function(){
    console.log("Something");
    $('.email-section').addClass("fold-up");
    $('.success').css("marginTop", 0);
  }
);

function myFunction() {
  var x = document.getElementById("myText").value;
  var y = x * 500 * 365
  var z =0.4 * y
  document.getElementById("demo").innerHTML = z + ' Litres of water saved';
}
