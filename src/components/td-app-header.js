import { LitElement, html, css } from '@polymer/lit-element'
import {anchorRoute, gotoRoute} from '../Router'
import Auth from '../Auth'
import App from '../App'


customElements.define('td-app-header', class AppHeader extends LitElement {
  constructor(){
    super()    
  }

  static get properties(){
    return {
      title: {
        type: String
      },
      user: {
        type: Object
      }
    }
  }

  firstUpdated(){
    super.firstUpdated()
    this.navActiveLinks()    
  }

  navActiveLinks(){	
    const currentPath = window.location.pathname
    const navLinks = this.shadowRoot.querySelectorAll('.app-top-nav a, .app-side-menu-items a')
    navLinks.forEach(navLink => {
      if(navLink.href.slice(-1) == '#') return
      if(navLink.pathname === currentPath){			
        navLink.classList.add('active')
      }
    })
  }

  hamburgerClick(){  
    const appMenu = this.shadowRoot.querySelector('.app-side-menu')
    appMenu.show()
  }
  
  menuClick(e){
    e.preventDefault()
    const pathname = e.target.closest('a').pathname
    const appSideMenu = this.shadowRoot.querySelector('.app-side-menu')
    // hide appMenu
    appSideMenu.hide()
    appSideMenu.addEventListener('sl-after-hide', () => {
      // goto route after menu is hidden
      gotoRoute(pathname)
    })
  }

  logoClick(e){
    e.preventDefault()
    const pathname = e.target.closest('a').pathname
    const appSideMenu = this.shadowRoot.querySelector('.app-header-main')
    gotoRoute(pathname)
  }

  render(){    
    return html`
    <style>      
      * {
        box-sizing: border-box;
      }
      .app-header {
            /*adds blur*/
        backdrop-filter: blur(8px);
        background-color:rgba(255, 255, 255, 0.185);
        position: fixed;
        top: 0;
        right: 0;
        left: 0;
        height: var(--app-header-height);
        color: #000;
        display: flex;
        z-index: 9;
        box-shadow: 4px 0px 10px rgba(0,0,0,0.2);
        align-items: center;
        box-shadow: rgba(0, 0, 0, 0.05) 0px 1px 2px 0px;
      }


      

      .app-header-main {
        flex-grow: 1;
        display: flex;
        align-items: center;
      }

      .app-header-main::slotted(h1){
        color: #000;
      }

      .app-logo a {
        color: #fff;
        text-decoration: none;
        font-weight: bold;
        font-size: 1.2em;
        padding: .6em;
        display: inline-block;        
      }

      .app-logo img {
        width: 90px;
      }
      
      .hamburger-btn::part(base) {
        color: #fff;
      }

      .app-top-nav {
        display: flex;
        height: 100%;
        align-items: center;
      }

      .app-top-nav a {
        display: inline-block;
        padding: .8em 2em;
        text-decoration: none;
        color: #000;
      }
      
      .app-side-menu-items a {
        display: block;
        padding: .5em;
        text-decoration: none;
        font-size: 1.3em;
        color: #333;
        /*style for hover state beginning
        adapted from
        "Having Fun With Link Hover Effects | CSS-Tricks". 2021. CSS-Tricks. 
        https://css-tricks.com/having-fun-with-link-hover-effects/. */
        background:
        linear-gradient(
          to bottom, var(--brand-green) 0%,
          var(--brand-green) 100%
        );
        background-position: 0 100%;
        background-repeat: repeat-x;
        background-size: 0px 0px;
        text-decoration: none;
        transition: background-size .2s;
      }

        /* active nav links */
        .app-top-nav a.active,
      .app-side-menu-items a.active {
        font-weight: bold;
      }
      /* nav active menu items expand on hover state */
      .app-side-menu-items a:hover{
        background-size: 4px 50px;
      }

      .app-side-menu-logo {

        margin-bottom: 1em;
        position: absolute;
        top: 2em;
        left: 1.5em;
      }

      .page-title {
        color: var(--app-header-txt-color);
        margin-right: 0.5em;
        font-size: var(--app-header-title-font-size);
      }

      .hamburger-btn::part(base) {
        color: #000;
        padding: 0 1em 0 1.5em;
      }

      sl-button {
        padding: 0 20px;
      }

      .hi-user {
        font-size: 1.5em;
      }

      /* active nav links */
      .app-top-nav a.active,
      .app-side-menu-items a.active {
        font-weight: bold;
      }

      /* hover styles */

      /* header image */
      #header-td-img{
        transition: 0.3s ease;
      }

      #header-td-img:hover{
        transform:scale(1.1);
      }

      .login-btn {
        font-size: 1.3em;
        transition: 0.3s ease-out;
      }

      .login-btn:hover{
        color: var(--brand-red);
      }



      /* RESPONSIVE - MOBILE ------------------- */
      @media all and (max-width: 768px){       
        
        .app-top-nav {
          display: none;
        }
      }

    </style>

    <header class="app-header">
      <sl-icon-button class="hamburger-btn" name="list" @click="${this.hamburgerClick}" style="font-size: 3em;"></sl-icon-button>       
      
      <div class="app-header-main">
        <a href="/" @click="${this.logoClick}">
          <img src = "images/topdeck-black.png" alt = "top deck logo in black" height="50px" id = "header-td-img">
        </a>
      </div>

      <nav class="app-top-nav">

        ${localStorage.accessToken == null? html`
          <a href="/signin" class="anim-in login-btn" @click=${() => gotoRoute('/signin')}>Sign In</a>
        ` : html`

            ${this.user.accessLevel == 2 ? html`
              <a href="/newPackage" @click="${anchorRoute}">Add Package</a>  
            ` : html``}
            <p class="hi-user">Hi ${this.user && this.user.firstName}!</p>

            <sl-dropdown>
              
              <a slot="trigger" href="#" @click="${(e) => e.preventDefault()}">
              
              <sl-avatar style="--size: 50px;" image=${(this.user && this.user.avatar) ? `${App.apiBase}/images/${this.user.avatar}` : ''}></sl-avatar> 
                
              </a>
              <sl-menu>            
                <sl-menu-item @click="${() => gotoRoute('/userDashboard')}">Me & My Trips</sl-menu-item>
                <sl-menu-item @click="${() => gotoRoute('/editProfile')}">Edit Profile</sl-menu-item>
                <sl-menu-item @click="${() => Auth.signOut()}">Sign Out</sl-menu-item>
              </sl-menu>
            </sl-dropdown>
        `}
      </nav>
    </header>

    <sl-drawer class="app-side-menu" placement="left">
      <nav class="app-side-menu-items">
      <a href="/" @click="${this.logoClick}">
          <img class="app-side-menu-logo" src = "images/topdeck-black.png" alt = "top deck logo in black" height="70px">
        </a>
        <a href="/" @click="${this.menuClick}">Home</a>
        <a href="/packages" @click="${this.menuClick}">Find a Tour</a>
        ${this.user.accessLevel == 2 ? html`
          <a href="/newPackage" @click="${this.menuClick}">Add Package</a> 
          <a href="/admin" @click="${this.menuClick}">Admin</a>  
        ` : html``}

        ${localStorage.accessToken == null? html`
          <a href="/signin" @click="${this.menuClick}">Sign in to Dashboard</a>
        `: html `
          <a href="/userDashboard" @click="${this.menuClick}">My & My Trips</a>
        `}

        
        <a href="/travelTips" @click="${this.menuClick}">Travel Tips</a>
        <a href="/faqs" @click="${this.menuClick}">FAQs</a>
        <a href="/testimonies" @click="${this.menuClick}">Testimonies</a>
        <a href="/ourStory" @click="${this.menuClick}">Our Story</a>
        <a href="/findus" @click="${this.menuClick}">Find Us</a>
        <a href="/getPackageTest" @click="${this.menuClick}">Find a Tour TEST page</a>
      </nav>  
    </sl-drawer>
    `
  }
  
})

