// Use this for reference: https://www.freecodecamp.org/news/reusable-html-components-how-to-reuse-a-header-and-footer-on-a-website/

class Header extends HTMLElement {
    constructor() {
      super();
    }
  
  
  connectedCallback(){
    this.innerHTML = `
    <!-- Navbar Start-->
    <header id="default_header">
      <div class="header_bottom">
          <nav class="nav-bar" id="navbar">
             <div class="brand-title">Geeked Out Tools</div>
                  <a href="#" class="toggle-button">
                    <span class="bar"></span>
                    <span class="bar"></span>
                    <span class="bar"></span>
                  </a>
                  <div class="nav-links">
                  <ul>
                    <li><a class="active" href="index.html">Home</a></li>
                  <!--  <li><a class="active" href="about.html">How It Works</a></li> -->
                    <li><a class="active" href="#">Calculators</a>
                      <ul>
                        <li><a class="active subnav-content" href="profitcalculator.html">Profit Calculator</a></li>
                        <li><a class="active subnav-content" href="bgscalc.html">BGS Calculator</a></li>
                      </ul>
                      </li>
                    <li><a class="active" href="https://www.geekedoutcollecting.com" target="_blank" style="background-color: #0088a9;border-radius: 5px;">More Resources</a></li>
                  </ul>
                </div>
          </nav>
        </div>
    </header>
  
    <!-- Navbar End-->`
    }
  }
  
  customElements.define('header-component', Header);
