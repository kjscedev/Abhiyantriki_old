document.querySelectorAll(".exit-btn").forEach((btn) => {
  btn.onclick = function () {
    element = document.querySelector("#topScreen");
    element.scrollIntoView({
      top: 0,
      behavior: "smooth",
    });
  };
});
