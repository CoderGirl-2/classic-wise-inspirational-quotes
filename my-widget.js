class MySimpleWidget extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' }); 
    }

    connectedCallback() {
        // 1. Define the internal HTML and CSS here
        this.shadowRoot.innerHTML = `
            <style>
                /* Initial state: all content is hidden */
                .minicontent {
                    display: none;
                    padding: 0 18px; /* Add padding for content */
                }
                .minicollapsible {
                    /* Styles for the button/header */
                    cursor: pointer;
                    width: 100%;
                    border: none;
                    text-align: left;
                    outline: none;
                    padding: 8px;
                    background-color: #f1f1f1;
                    margin-top: 5px;
                }
                .minicollapsible.active {
                    /* Style change when the collapsible is open */
                    background-color: #ccc;
                }
            </style>
            
           

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
                </div>
                
                <slot></slot> 
            </div>
        `;
        
        // 2. Add the Event Listeners to ALL collapsible buttons
        const coll = this.shadowRoot.querySelectorAll(".minicollapsible");
        
        // Loop through all found elements inside this component's Shadow DOM
        coll.forEach(button => {
            button.addEventListener("click", this.toggleContent);
        });
    }

    // 3. Move the toggleContent method out of connectedCallback
    // Use an arrow function here to automatically bind 'this' to the component instance
    toggleContent = (event) => {
        const header = event.currentTarget; // The button that was clicked
        
        // Toggle the 'active' class on the header
        header.classList.toggle("active");
        
        // Get the immediately following sibling (the content div)
        var minicontent = header.nextElementSibling;
        
        // Toggle display property on the content
        if (minicontent.style.display === "block") {
            minicontent.style.display = "none";
            header.setAttribute('aria-expanded', 'false');
        } else {
            minicontent.style.display = "block";
            header.setAttribute('aria-expanded', 'true');
        }
    }
}

// Register the custom HTML tag you will use
customElements.define('my-simple-widget', MySimpleWidget);


// Register the custom HTML tag you will use
customElements.define('my-simple-widget', MySimpleWidget);
