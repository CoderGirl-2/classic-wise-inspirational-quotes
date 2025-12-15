


function copyText(buttonElement, type) {
    let parentSelector;
    let contentSelector;

    // 1. Determine the appropriate selectors based on the 'type' argument
    if (type === 'quotebox') {
        parentSelector = '.quotebox';
        contentSelector = '.content-to-copy h3'; // Targets <h3> inside .content-to-copy
    } else if (type === 'basic-box') {
        parentSelector = '.basic-box1';
        contentSelector = '.content-to-copy p';  // Targets <p> inside .content-to-copy
    } else {
        // If an invalid type is passed, the function stops.
        return; 
    }

    // 2. Find the closest parent element (quotebox or basic-box1)
    var container = buttonElement.closest(parentSelector);
    
    if (!container) {
        return; // Stop if the parent container is not found
    }

    // 3. Find the specific text element (h3 or p) within the container
    var textElement = container.querySelector(contentSelector);
    
    if (textElement) {
        var textToCopy = textElement.innerText;
        
        // 4. Use the Clipboard API to copy the text
        // (Note: This is an asynchronous operation)
        navigator.clipboard.writeText(textToCopy); 
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

