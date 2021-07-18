import { LitElement, html, css } from '@polymer/lit-element'
import {anchorRoute, gotoRoute} from '../Router'



customElements.define('td-site-footer', class SiteFooter extends LitElement {
  constructor(){
    super()    
  }

  firstUpdated(){
    super.firstUpdated()
   
  }

  iconClick(e){
    e.preventDefault()
    const pathname = e.target.closest('a').pathname
    gotoRoute(pathname)
  }

  render(){    
    return html`
    <style>      
      * {
        box-sizing: border-box;
      }

      
/*section - footer
--------------------------*/
footer{
  width: 100%;
  bottom: 0;
  font-family: 'Roboto Condensed', 'Open Sans';   
  display: inline-block;
}

#home-footer{
    background-color: #222C39;
    height: 70vh;
    display: flex;
    justify-content: space-around;
}

#footer-column-left,
#footer-column-mid{
    padding-top: 14vh;
}

#footer-column-left,
#footer-column-left h1,
#footer-column-mid,
#footer-column-right{
    text-align: left !important;
    color: #FFF;
    /*space btwn text lines*/
    line-height: 4vh;
}

/*style of text in footer*/
.footer-items h1{
    font-weight:bold;
    font-size: 6vh; 
}

.footer-items h2 {
    font-size: 5vh;
    font-weight: lighter;
}

#footer-column-right{
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
}

#topdeck-logo-white{
    width: 40vh;
    padding-top: 9vh;
}

#footer-column-right sl-icon{
    font-size: 10vh;
    margin: 1vh;
}

#footer-icon-holder{
    margin-left: 4vh;
}

.footer-icon-img{
  width: 10vh;
  margin: 1vh;
}

a {
  text-decoration: none;
  color: white;
}

/* hover effecs */

#footer-column-left a,
#footer-column-mid a {
  transition: all ease .4s;
}

#footer-column-left a:hover, 
#footer-column-mid a:hover{
  /* shadow style adapted from 
  https://www.sitepoint.com/quick-tip-fixing-font-weight-problem-hover-states/ */
  text-shadow: 0 0 1px var(--brand-red), 0 0 1px var(--brand-red), 0 0 1px var(--brand-red);
  color: var(--brand-red);
}

.footer-right-item sl-icon, 
.footer-icon-img
{
  transition: 0.3s ease-out;
}

.footer-right-item sl-icon:hover,
.footer-icon-img:hover{
  transform:scale(1.1) rotate(3deg);
}


 
      /* RESPONSIVE - MOBILE ------------------- */
      @media all and (max-width: 768px){       
        
        .footer-sections {
          display: inline-block;
        }
      }

    </style>

      <footer>
        <div id = "home-footer">
          <div id = "footer-column-left" class = "footer-items">
            <h1>About</h1>
            <a href="/findus" @click="${this.iconClick}"><h2>What we are about</h2></a>
            <a href="/packages" @click="${this.iconClick}"><h2>Where we travel to</h2></a>
            <a href="/ourStory" @click="${this.iconClick}"><h2>How we travel</h2></a>
            <a href="/faqs" @click="${this.iconClick}"><h2>FAQ's</h2></a>
          </div>


        <div id = "footer-column-mid" class = "footer-items">
          <h1>Find a trip</h1>
          <a href="/packages" @click="${this.iconClick}"><h2>#party</h2></a>
          <a href="/packages" @click="${this.iconClick}"><h2>#chill</h2></a>
          <a href="/packages" @click="${this.iconClick}"><h2>#adventure</h2></a>
          <a href="/packages" @click="${this.iconClick}"><h2>#culture</h2></a>
        </div>

        <div id = "footer-column-right" class = "footer-item">
          <!-- Topdeck logo -->
          <div class = "footer-right-item">
            <img src = "images/topdeck-white.png" alt = "top deck logo in white" id = "topdeck-logo-white">
          </div>

          <div class = "footer-right-item" id = "footer-icon-holder">
          <!-- Topdeck icons -->
            <a href="https://www.facebook.com/TopdeckTravel/" target="_blank">
              <sl-icon name="facebook"></sl-icon>
            </a>  
            <a href="https://www.youtube.com/user/TopDeckTravel/" target="_blank">
              <sl-icon name="youtube"></sl-icon>
            </a>
            <a href="https://www.instagram.com/topdecktravel/" target="_blank">
              <sl-icon name="instagram"></sl-icon>
            </a> 
 

            
          <br>
            <a href="https://www.tiktok.com/" target="_blank">
              <img src = "images/white-tiktok.png" alt = "tiktok icon"  class = "footer-icon-img">
            </a>
            <a href="https://www.snapchat.com/" target="_blank">
              <img src = "images/white-snapchat.png" alt = "snapchat icon" class = "footer-icon-img">
            </a>
            <a href="https://twitter.com/TopdeckTravel/" target="_blank">
              <sl-icon name="twitter"></sl-icon>
            </a>
            
          </div>

          
          </div>
        </div><!-- close footer div-->


      </footer>
    `
  }
  
})

