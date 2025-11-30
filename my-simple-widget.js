class MyWidget extends HTMLElement {
  connectedCallback() {
    // We simply inject HTML directly into the tag
    this.innerHTML = `
<style>   
   .widget-box {
           border: 5px solid #6A4E20;
          background-color: #dcdcdc;
          width: 110%;
          border-radius: 10px;
          font-family: sans-serif;
		  margin-right: 3%;
		  
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
        <h3>Directory of Quotes</h3>
        <button class="quotelink"onclick="window.location.href='https://classic-wisdom-and-inspiration-quotes.vercel.app/A Grief Observed'"><b>A Grief Observed, by C.S Lewis</b></button>
        <button class="quotelink"onclick="window.location.href='https://classic-wisdom-and-inspiration-quotes.vercel.app/Brave%20New%20World'"><b>Brave New World, by Aldous Huxley</b></button>
        <button class="quotelink"onclick="window.location.href='https://classic-wisdom-and-inspiration-quotes.vercel.app/Crime and Punishment'"><b>Crime and Punishment, by Fyodor Dostoevsky</b></button>
		 <button class="quotelink"onclick="window.location.href='https://classic-wisdom-and-inspiration-quotes.vercel.app/Fahrenheit 451'"><b>Fahrenheit 451, by Ray Bradbury</b></button>
		<button class="quotelink"onclick="window.location.href='https://classic-wisdom-and-inspiration-quotes.vercel.app/Heart of Darkness'"><b>Heart of Darkness, by Joseph Conrad</b></button>
		<button class="quotelink"onclick="window.location.href='https://classic-wisdom-and-inspiration-quotes.vercel.app/Screwtape Letters'"><b>Screwtape Letters, by C.S Lewis</b></button>
		<button class="quotelink"onclick="window.location.href='https://classic-wisdom-and-inspiration-quotes.vercel.app/Screwtape Proposes a Toast'"><b>Screwtape Proposes a Toast, by C.S 
	Lewis</b></button>
     	<button class="quotelink"onclick="window.location.href='https://classic-wisdom-and-inspiration-quotes.vercel.app/The Abolition of Man'"><b>The Abolition of Man, by C.S Lewis</b></button>
		<button class="quotelink"onclick="window.location.href='https://classic-wisdom-and-inspiration-quotes.vercel.app/The Great Divorce'"><b>The Great Divorce, by C.S Lewis</b></button>
		<button class="quotelink"onclick="window.location.href='https://classic-wisdom-and-inspiration-quotes.vercel.app/The Gulag Archipelago'"><b>The Gulag Archipelago, by Alexander Solzhenitsyn</b></button>
		<button class="quotelink"onclick="window.location.href='https://classic-wisdom-and-inspiration-quotes.vercel.app/The Republic'"><b>The Republic, by Plato</b></button>
		<button class="quotelink"onclick="window.location.href='https://classic-wisdom-and-inspiration-quotes.vercel.app/Works and Days'"><b>Works and Days, by Hesiod</b></button>
		
      </div>
    `;
  }
}

// Register the tag
customElements.define('my-simple-widget', MyWidget);
