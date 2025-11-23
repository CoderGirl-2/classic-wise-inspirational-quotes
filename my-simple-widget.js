class MyWidget extends HTMLElement {
  connectedCallback() {
    // We simply inject HTML directly into the tag
    this.innerHTML = `
<style>   
   .widget-box {
          border: 2px solid #333;
          background-color: #f4f4f4;
          width: 90%;
          border-radius: 10px;
          font-family: sans-serif;
        }
	
	.quotelink{ 
       background-color: #dcdcdc;
  color: #444;
  border: none;
  text-align: left;
  outline: none;
   width: 85%;
	height: 40%;
   margin-left: 1%;
	 margin-right: 1%;
	border: 5px outset #6A4E20;
  }
  </style>
      
	  
	  <div class="widget-box">
        <h3>My Links</h3>
        
        <button class="quotelink"onclick="window.location.href='https://google.com'">Go to Google</button>
        
      
      </div>
    `;
  }
}

// Register the tag
customElements.define('my-simple-widget', MyWidget);
