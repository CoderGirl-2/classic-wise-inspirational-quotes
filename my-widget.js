class LinkWidget extends HTMLElement {
  constructor() {
    super();
    // This ensures the widget styles don't clash with the rest of your site
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    // CONFIGURATION: Edit your links here
    const links = [
      { name: "Google", url: "https://google.com", color: "#4285F4" },
      { name: "YouTube", url: "https://youtube.com", color: "#FF0000" },
      { name: "My Blog", url: "/blog", color: "#2ecc71" }
    ];

    this.render(links);
  }

  render(links) {
    // 1. Define the CSS for the widget
    const style = `
      <style>
        .widget-container {
          position: fixed;
          bottom: 20px;
          right: 20px;
          z-index: 9999;
          font-family: sans-serif;
          display: flex;
          flex-direction: column-reverse; /* Expands upwards */
          align-items: flex-end;
          gap: 10px;
        }

        /* The Main Toggle Button */
        .toggle-btn {
          width: 60px;
          height: 60px;
          border-radius: 50%;
          background-color: #333;
          color: white;
          border: none;
          font-size: 24px;
          cursor: pointer;
          box-shadow: 0 4px 8px rgba(0,0,0,0.2);
          transition: transform 0.3s ease;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .toggle-btn:hover {
          transform: scale(1.1);
        }

        .toggle-btn.open {
          transform: rotate(45deg);
          background-color: #555;
        }

        /* The Link Buttons Container */
        .links-list {
          display: none; /* Hidden by default */
          flex-direction: column;
          gap: 10px;
          align-items: flex-end;
        }

        .links-list.visible {
          display: flex;
        }

        /* Individual Link Buttons */
        .link-btn {
          text-decoration: none;
          color: white;
          padding: 10px 20px;
          border-radius: 25px;
          box-shadow: 0 2px 5px rgba(0,0,0,0.2);
          transition: transform 0.2s;
          opacity: 0;
          transform: translateY(10px);
          animation: slideIn 0.3s forwards;
        }

        .link-btn:hover {
          transform: translateX(-5px);
        }

        /* Animation for buttons appearing */
        @keyframes slideIn {
          to { opacity: 1; transform: translateY(0); }
        }
      </style>
    `;

    // 2. Create the HTML structure
    const linkButtons = links.map(link => 
      `<a href="${link.url}" class="link-btn" style="background-color: ${link.color}" target="_blank">
        ${link.name}
      </a>`
    ).join('');

    // 3. Inject HTML and CSS into the Shadow DOM
    this.shadowRoot.innerHTML = `
      ${style}
      <div class="widget-container">
        <button class="toggle-btn" id="toggle">+</button>
        <div class="links-list" id="list">
          ${linkButtons}
        </div>
      </div>
    `;

    // 4. Add Event Listener (Click logic)
    this.addInteractions();
  }

  addInteractions() {
    const toggleBtn = this.shadowRoot.getElementById('toggle');
    const list = this.shadowRoot.getElementById('list');

    toggleBtn.addEventListener('click', () => {
      const isVisible = list.classList.contains('visible');
      
      if (isVisible) {
        list.classList.remove('visible');
        toggleBtn.classList.remove('open');
      } else {
        list.classList.add('visible');
        toggleBtn.classList.add('open');
      }
    });
  }
}

// Define the custom element
customElements.define('link-widget', LinkWidget);
