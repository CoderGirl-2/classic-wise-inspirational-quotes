class MyWidget extends HTMLElement {
  connectedCallback() {
    // We simply inject HTML directly into the tag
    this.innerHTML = `
<style>   
   .widget-box {
           border: 5px solid #6A4E20;
          background-color: #dcdcdc;
          width: 100%;
          border-radius: 10px;
          font-family: sans-serif;
		  
        }
	
	.quotelink{ 
   background-color:#c19f5c; 
  color: #000000;
  text-align: center;
  outline: none;
   width: 95%;
	height: 40%;
   margin-left: 1%;
	 margin-right: 1%;
	 border: 5px solid #6A4E20;
  }
  </style>
      
	  
	  <div class="widget-box">
        <h3>My Links</h3>
        
        <button class="quotelink"onclick="window.location.href='https://classic-wisdom-and-inspiration-quotes.vercel.app/Brave%20New%20World'"><b>Brave New World</b></button>
         <button class="quotelink"onclick="window.location.href='https://classic-wisdom-and-inspiration-quotes.vercel.app/Fahrenheit 451'"><b>Fahrenheit 451</b></button>
		<button class="quotelink"onclick="window.location.href='https://classic-wisdom-and-inspiration-quotes.vercel.app/Heart of Darkness'"><b>Heart of Darkness</b></button>
      
	
      </div>
    `;
  }
}

// Register the tag
customElements.define('my-simple-widget', MyWidget);
