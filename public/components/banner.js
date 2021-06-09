// Use this for reference: https://www.freecodecamp.org/news/reusable-html-components-how-to-reuse-a-header-and-footer-on-a-website/

class Banner extends HTMLElement {
    constructor() {
      super();
    }
  
  
  connectedCallback(){
    this.innerHTML =
    `<banner>
        <div class="hero-banner">
            <h3>WELCOME TO</h3>
            <h1>GEEKED OUT COLLECTING TOOLS</h1>
        </div>
    </banner>`
    }
  }
  
  customElements.define('banner-component', Banner);
  