$(document).ready(function(event) {
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