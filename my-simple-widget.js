class MyWidget extends HTMLElement {
  connectedCallback() {
    // We simply inject HTML directly into the tag
    this.innerHTML = `
<style>   
    quotelink{ 
       background-color: #dcdcdc;
  color: #444;
  cursor: pointer;
  padding: 2px;
  border: none;
  text-align: left;
  outline: none;
   width: 100%;
	height: 20%;
   margin-left: 1%;
	 margin-right: 1%;
	border: 5px outset #6A4E20;
  }
  </style>
      <div>
        <h3>My Links</h3>
        
        <button class="quotelink"onclick="window.location.href='https://google.com'">Go to Google</button>
        
      
      </div>
    `;
  }
}

// Register the tag
customElements.define('my-simple-widget', MyWidget);
