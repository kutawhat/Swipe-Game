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
        const term = this.getAttribute('term');
        const text = this.getAttribute('text');
        const link = this.getAttribute('link');

        // Set content
        if (term && link) {
            this.textEl.innerHTML = `<a href="${link}" class="term-link" target="_blank">${term}</a> ${text}`;
        } else {
            this.textEl.textContent = text;
        }
    }
}

// Define custom element
customElements.define('topic-content', TopicContent);