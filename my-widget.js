class MyWidget extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    // CONFIGURATION: Edit your links here
    const links = [
      { name: "Home", url: "/", color: "#333" },
      { name: "Contact", url: "/contact", color: "#007bff" },
      { name: "External Site", url: "https://example.com", color: "#e74c3c" }
    ];

    this.render(links);
  }

  render(links) {
    // 1. Define CSS
    const style = `
      <style>
        .widget-container {
          position: fixed;
          bottom: 20px;
          right: 20px;
          z-index: 9999;
          display: flex;
          flex-direction: column-reverse;
          align-items: flex-end;
          gap: 10px;
          font-family: sans-serif;
        }

        .toggle-btn {
          width: 50px;
          height: 50px;
          border-radius: 50%;
          background-color: #222;
          color: white;
          border: none;
          font-size: 24px;
          cursor: pointer;
          box-shadow: 0 4px 6px rgba(0,0,0,0.3);
          transition: transform 0.3s;
        }

        .toggle-btn:hover { transform: scale(1.1); }
        .toggle-btn.open { transform: rotate(45deg); background-color: #444; }

        .links-list {
          display: none;
          flex-direction: column;
          gap: 8px;
          align-items: flex-end;
        }
        
        .links-list.visible { display: flex; }

        .link-btn {
          text-decoration: none;
          color: white;
          padding: 8px 16px;
          border-radius: 20px;
          font-size: 14px;
          box-shadow: 0 2px 4px rgba(0,0,0,0.2);
          transition: transform 0.2s;
          white-space: nowrap;
        }

        .link-btn:hover { transform: translateX(-3px); }
      </style>
    `;

    // 2. Create HTML
    const linkButtons = links.map(link => 
      `<a href="${link.url}" class="link-btn" style="background-color: ${link.color}">
        ${link.name}
      </a>`
    ).join('');

    // 3. Inject into Shadow DOM
    this.shadowRoot.innerHTML = `
      ${style}
      <div class="widget-container">
        <button class="toggle-btn" id="toggle">+</button>
        <div class="links-list" id="list">
          ${linkButtons}
        </div>
      </div>
    `;

    // 4. Add Click Logic
    this.addInteractions();
  }

  addInteractions() {
    const toggleBtn = this.shadowRoot.getElementById('toggle');
    const list = this.shadowRoot.getElementById('list');

    toggleBtn.addEventListener('click', () => {
      list.classList.toggle('visible');
      toggleBtn.classList.toggle('open');
    });
  }
}

// REGISTER THE WIDGET NAME HERE
customElements.define('my-widget', MyWidget);
