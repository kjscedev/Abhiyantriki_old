$("#sponsor_2020").click(function () {
  $("#sponsor_2019").removeClass("clicked-btn");
  $("#sponsor_2018").removeClass("clicked-btn");
  $("#sponsor_2017").removeClass("clicked-btn");
  $("#sponsor_2020").addClass("clicked-btn");
  // cards
  $(".sec2").addClass("hidden");
  $(".sec3").addClass("hidden");
  $(".sec4").addClass("hidden");
  $(".sec1").removeClass("hidden");
});

$("#sponsor_2019").click(function () {
  $("#sponsor_2020").removeClass("clicked-btn");
  $("#sponsor_2018").removeClass("clicked-btn");
  $("#sponsor_2017").removeClass("clicked-btn");
  $("#sponsor_2019").addClass("clicked-btn");
  // cards
  $(".sec1").addClass("hidden");
  $(".sec3").addClass("hidden");
  $(".sec4").addClass("hidden");
  $(".sec2").removeClass("hidden");
});

$("#sponsor_2018").click(function () {
  $("#sponsor_2020").removeClass("clicked-btn");
  $("#sponsor_2019").removeClass("clicked-btn");
  $("#sponsor_2017").removeClass("clicked-btn");
  $("#sponsor_2018").addClass("clicked-btn");
  // cards
  $(".sec1").addClass("hidden");
  $(".sec2").addClass("hidden");
  $(".sec4").addClass("hidden");
  $(".sec3").removeClass("hidden");
});

$("#sponsor_2017").click(function () {
  $("#sponsor_2020").removeClass("clicked-btn");
  $("#sponsor_2019").removeClass("clicked-btn");
  $("#sponsor_2018").removeClass("clicked-btn");
  $("#sponsor_2017").addClass("clicked-btn");
  // cards
  $(".sec1").addClass("hidden");
  $(".sec2").addClass("hidden");
  $(".sec3").addClass("hidden");
  $(".sec4").removeClass("hidden");
});

if (window.innerWidth < 768) {
  $(".sec1").addClass("hidden");
}

