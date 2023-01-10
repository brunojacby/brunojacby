var backToTopButton = document.getElementById("back");

window.onscroll = function() {
  var scrollPosition = window.pageYOffset;
  
  if (scrollPosition > screen.height) {
    backToTopButton.style.display = "block";
  } else {
    backToTopButton.style.display = "none";
  }
};
