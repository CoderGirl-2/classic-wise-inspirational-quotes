
function copyText() {
  const textToCopy = document.getElementById("myText").innerText;
  navigator.clipboard.writeText(textToCopy)
}

function copyText() {
  const textToCopy = document.getElementById("myText2").innerText;
  navigator.clipboard.writeText(textToCopy)
}



var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
  });
}

var coll = document.getElementsByClassName("minicollapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var minicontent = this.nextElementSibling;
    if (minicontent.style.display === "block") {
      minicontent.style.display = "none";
    } else {
      minicontent.style.display = "block";
    }
  });
}
