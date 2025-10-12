
import { Analytics } from '@vercel/analytics/react';

export default function MyComponent() {
  const beforeSend = (event) => {
    // Check if a specific value is set in localStorage
    if (localStorage.getItem('va-disable') === 'true') {
      // Return null to ignore this event
      return null;
    }
    return event;
  };

  return (
    <>
      {/* Your page content */}
      <Analytics beforeSend={beforeSend} />
    </>
  );
}


function copyText() {
  const textToCopy = document.getElementById("myText").innerText;
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
