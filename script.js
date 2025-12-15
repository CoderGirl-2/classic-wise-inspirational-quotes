


function copyText(buttonElement) {
    var quotebox = buttonElement.closest('.quotebox');
    
    var textElement = quotebox.querySelector('.content-to-copy h3');
    
    if (textElement) {
        var textToCopy = textElement.innerText;
        
        navigator.clipboard.writeText(textToCopy)
            
    }
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

