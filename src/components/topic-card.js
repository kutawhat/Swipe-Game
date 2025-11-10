class TopicContent extends HTMLElement {
    constructor() {
        super();

        // Create template
        const template = document.createElement('template');
        template.innerHTML = `
      <div class="topic-content">
        <p class="text-content"></p>
      </div>
    `;

        // Add content
        this.appendChild(template.content.cloneNode(true));

        // Get elements
        this.textEl = this.querySelector('.text-content');
    }

    connectedCallback() {
        // Get attributes
        const termin = this.getAttribute('termin');
        const text = this.getAttribute('text');
        const link = this.getAttribute('link');

        // Set content
        if (termin && link) {
            this.textEl.innerHTML = `<a href="${link}" class="termin-link" target="_blank">${termin}</a> ${text}`;
        } else {
            this.textEl.textContent = text;
        }
    }
}

// Define custom element
customElements.define('topic-content', TopicContent);