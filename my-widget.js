class MySimpleWidget extends HTMLElement {
    constructor() {
        super();
        // Attach Shadow DOM for encapsulation
        this.attachShadow({ mode: 'open' }); 
    }

    connectedCallback() {
        // Define the widget's internal HTML and CSS here
        this.shadowRoot.innerHTML = `
            <style>
                /* Styles are contained to the widget */
                .widget-container {
                    border: 2px solid #a23992;
                    padding: 12px;
                    border-radius: 8px;
                    background-color: #fce4ec;
                    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
                    max-width: 300px;
                }
                h4 {
                    color: #a23992;
                    margin-top: 0;
                    border-bottom: 1px solid #a23992;
                    padding-bottom: 5px;
                }
            </style>
            <div class="widget-container">
                <h4>Quick Info Widget</h4>
                <p>This widget content is defined in one file and updates everywhere!</p>
                <slot></slot> </div>
        `;
    }
}

// Register the custom HTML tag you will use
customElements.define('my-simple-widget', MySimpleWidget);
