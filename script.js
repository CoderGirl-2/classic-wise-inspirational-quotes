
function copyText() {
  const textToCopy = document.getElementById("myText").innerText;
  navigator.clipboard.writeText(textToCopy)
}


var coll = document.getElementsByClassName("collapsiblehome");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var contenthome = this.nextElementSibling;
    if (contenthome.style.display === "block") {
      contenthome.style.display = "none";
    } else {
      contenthome.style.display = "block";
    }
  });
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
