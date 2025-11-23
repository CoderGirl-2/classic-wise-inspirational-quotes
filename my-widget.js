class my-widget extends HTMLElement {
  connectedCallback() {
    // We simply inject HTML directly into the tag
    this.innerHTML = `
      <div>
        <h3>My Links</h3>
        
        <button onclick="window.location.href='https://google.com'">Go to Google</button>
        
        <a href="https://youtube.com">
            <button>Go to YouTube</button>
        </a>
        
        <a href="/contact">Contact Us</a>
      </div>
    `;
  }
}

// Register the tag
customElements.define('my-widget', MyWidget);
