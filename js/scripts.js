$(document).ready(function() {
  const animal = prompt("Kangaroo, pug, or baboon?");

  if (animal === "kangaroo") {
    $("#roos").show();
  } else if (animal === "pug") {
    $("#pugs").show(); 
  } else if (animal === "baboon") {
    $("#babs").show();
  } 

$("#kangaroo").click(function() {
    $("#roos").slideToggle();
    $("#pugs").hide();
    $("#babs").hide();
  });
  $("#puggy").click(function() {
    $("#pugs").slideToggle();
    $("#roos").hide();
    $("#babs").hide();
  });
  $("#baboon").click(function() {
    $("#babs").slideToggle();
    $("#roos").hide();
    $("#pugs").hide();
  });
});