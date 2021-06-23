function readMoreOrLess() {
    var moreText = document.getElementById("more");
    var btnText = document.getElementById("myBtn");
  
    if (moreText.style.display === "inline") {
      btnText.innerHTML = "Read more";
      moreText.style.display = "none";
    } else {
      btnText.innerHTML = "Read less";
      moreText.style.display = "inline";
    }
}

function readMoreOrLess2() {
    var moreText2 = document.getElementById("more2");
    var btnText2 = document.getElementById("myBtn2");
  
    if (moreText2.style.display === "inline") {
      btnText2.innerHTML = "Read more";
      moreText2.style.display = "none";
    } else {
      btnText2.innerHTML = "Read less";
      moreText2.style.display = "inline";
    }
}


var acc = document.getElementsByClassName("accordion");
var i;
  
for (i = 0; i < acc.length; i++) {
acc[i].addEventListener("click", function() {
    /* Toggle between adding and removing the "active" class,
    to highlight the button that controls the panel */
    this.classList.toggle("active");

    /* Toggle between hiding and showing the active panel */
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
    panel.style.display = "none";
    } else {
    panel.style.display = "block";
    }
});
}


  