function matchimage() {
  var targetposition = Math.abs($(".slider-target").position().left);
  var matchthis = targetposition;
  var visible = $(".slider-target li")
    .filter(function () {
      return $(this).position().left == matchthis;
    })
    .index();
  var total = $(".slider img").length;
  $("#count").html(visible + 1 + " of " + total);
}
