function copyText() {
  const textToCopy = document.getElementById("myText").innerText;
  navigator.clipboard.writeText(textToCopy)
}
