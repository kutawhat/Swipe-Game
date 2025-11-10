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
        const person = this.getAttribute('person');
        const text = this.getAttribute('text');
        const link = this.getAttribute('link');

        // Set content
        if (person && link) {
            this.textEl.innerHTML = `<a href="${link}" class="person-link" target="_blank">${person}</a> ${text}`;
        } else {
            this.textEl.textContent = text;
        }
    }
}

// Define custom element
customElements.define('topic-content', TopicContent);