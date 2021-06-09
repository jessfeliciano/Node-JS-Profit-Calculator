// Use this for reference: https://www.freecodecamp.org/news/reusable-html-components-how-to-reuse-a-header-and-footer-on-a-website/

class Footer extends HTMLElement {
    constructor() {
      super();
    }
  
  
  connectedCallback(){
    this.innerHTML =
    `<footer>
      <div class="row">
        <p class="footer" style="padding:2rem"><a href="index.html">Home</a> -
  <!--        <a href="./about.html">How It Works</a> - -->
          <a href="https://www.geekedoutcollecting.com" target="_blank">More Resources</a> -
          <a href="privacy.html">Privacy Policy</a> -
          <a href="./sitemap.xml">Sitemap XML</a>
      <br>
      <a href='https://www.geekedoutcollecting.com' target='_blank'>Geeked Out Collecting, Copyright </a>&copy; 2020
      <br>
      <strong>Developed by Geeked Out Studios</strong>
    </p>
    <br>
      </div>
    </footer>`
    }
  }
  
  customElements.define('footer-component', Footer);
  