class MyWidget extends HTMLElement {
  connectedCallback() {
    // We simply inject HTML directly into the tag
    this.innerHTML = `
<style>   
   .widget-box {
          border: 2px solid #333;
          background-color: #dcdcdc;
          width: 100%;
          border-radius: 10px;
          font-family: sans-serif;
        }
	
	.quotelink{ 
   background-color:#6A4E20; 
  color: #000000;
  border: center;
  text-align: left;
  outline: none;
   width: 95%;
	height: 40%;
   margin-left: 1%;
	 margin-right: 1%;
	border: 5px outset #6A4E20;
  }
  </style>
      
	  
	  <div class="widget-box">
        <h3>My Links</h3>
        
        <button class="quotelink"onclick="window.location.href='https://google.com'"><b>Go to Google</b></button>
        
      
      </div>
    `;
  }
}

// Register the tag
customElements.define('my-simple-widget', MyWidget);
