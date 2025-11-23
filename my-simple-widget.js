class MyWidget extends HTMLElement {
  connectedCallback() {
    // We simply inject HTML directly into the tag
    this.innerHTML = `
<style>   
   .widget-box {
          border: 2px solid #333;
          padding: 20px;
          background-color: #f4f4f4;
          width: 100%;
          border-radius: 10px;
          font-family: sans-serif;
        }
	
	.quotelink{ 
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
      
	  
	  <div class="widget-box">
        <h3>My Links</h3>
        
        <button class="quotelink"onclick="window.location.href='https://google.com'">Go to Google</button>
        
      
      </div>
    `;
  }
}

// Register the tag
customElements.define('my-simple-widget', MyWidget);
