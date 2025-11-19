

class MySimpleWidget extends HTMLElement {
    constructor() {
        super();
        // Attach Shadow DOM for encapsulation
        this.attachShadow({ mode: 'open' }); 
    }

    connectedCallback() {
        // Define the widget's internal HTML and CSS here
        this.shadowRoot.innerHTML = `

		toggleContent() {
    const header = this.shadowRoot.querySelector('.header');
    const content = this.shadowRoot.querySelector('.content');

    // Toggle a class on the header (similar to your "active")
    header.classList.toggle("active");

    // Toggle display property on the content
    if (content.style.display === "block") {
        content.style.display = "none";
        header.setAttribute('aria-expanded', 'false');
    } else {
        content.style.display = "block";
        header.setAttribute('aria-expanded', 'true');
    }
}

		
            <div class="widget-container">
                  <h3>Quote Directory</h3>

	


	<button type="button" class="minicollapsible"><h3>Fahrenheit 451- Ray Bradbury▼</h3></button>
<div class="minicontent">
	<ul>
		<li><a target='_top'  href="https://classic-wisdom-and-inspiration-quotes.vercel.app/Fahrenheit 451-Building and Burning">Building and Burning</a></li>
		<li><a target='_top'  href="https://classic-wisdom-and-inspiration-quotes.vercel.app/Fahrenheit 451-Leaving a Legacy">Leaving a Legacy</a></li>
		<li><a target='_top'  href="https://classic-wisdom-and-inspiration-quotes.vercel.app/Fahrenheit 451-Literary Quality">Literary Quality</a></li>
		<li><a target='_top'  href="https://classic-wisdom-and-inspiration-quotes.vercel.app/Fahrenheit 451-Man doesn't give up">Man doesn't give up</a></li>
	</ul>
</div>
	
<button type="button" class="minicollapsible"><h3>The Great Divorce- C.S Lewis▼</h3></button>
<div class="minicontent">
	<ul>
		<li><a target='_top'  href="https://classic-wisdom-and-inspiration-quotes.vercel.app/The%20Great%20Divorce-God%20doesn't%20need%20you">God doesn't need you</a></li>
		<li><a target='_top'  href="https://classic-wisdom-and-inspiration-quotes.vercel.app/The Great Divorce-Leaning on God">Leaning on God</a></li>
		<li><a target='_top'  href="https://classic-wisdom-and-inspiration-quotes.vercel.app/The Great Divorce-The Size of Bad vs Good">The Size of Bad vs Good</a></li>
		<li><a target='_top'  href="https://classic-wisdom-and-inspiration-quotes.vercel.app/The Great Divorce-Temporal Suffering">Temporal Suffering</a></li>
		<li><a target='_top'  href="https://classic-wisdom-and-inspiration-quotes.vercel.app/The Great Divorce-Thy will be done">Thy Will be done</a></li>
	</ul>
</div>

<button type="button" class="minicollapsible"><h3>Heart of Darkness- Joseph Conrad▼</h3></button>
<div class="minicontent">
	<ul>
		<li><a target='_top'  href="https://classic-wisdom-and-inspiration-quotes.vercel.app/Heart of Darkness-Idealism">Idealism</a></li>
		<li><a target='_top'  href="https://classic-wisdom-and-inspiration-quotes.vercel.app/Heart of Darkness-Reading as a Friend">Reading as a Friend</a></li>
	</ul>
</div>
	
		<button type="button" class="minicollapsible"><h3>Screwtape Letters- C.S Lewis▼</h3></button>
<div class="minicontent">
	<ul>
		<li><a target='_top'  href="https://classic-wisdom-and-inspiration-quotes.vercel.app/Screwtape Letters-Difficulty of Perseverence">Difficulty of Perseverence</a></li>
		<li><a target='_top'  href="https://classic-wisdom-and-inspiration-quotes.vercel.app/Screwtape Letters-Historical Point of View">Historical Point of View</a></li>
	</ul>
</div>


		<button type="button" class="minicollapsible"><h3>Screwtape Proposes a Toast- C.S Lewis▼</h3></button>
<div class="minicontent">
	<ul>
		<li><a target='_top'  href="https://classic-wisdom-and-inspiration-quotes.vercel.app/Screwtape Proposes a Toast-Mediocratization of Education">Mediocratization of Education</a></li>
		<li><a target='_top'  href="https://classic-wisdom-and-inspiration-quotes.vercel.app/Screwtape Proposes a Toast-Mediocratization of Excellence">Mediocratization of Excellence</a></li>
	</ul>
</div>

	

	
		<script src="script.js"></script>

                <slot></slot> </div>
        `;
    }
}

// Register the custom HTML tag you will use
customElements.define('my-simple-widget', MySimpleWidget);
