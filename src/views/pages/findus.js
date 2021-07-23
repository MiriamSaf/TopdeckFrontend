import App from '../../App'
import {html, render } from 'lit-html'
import {gotoRoute, anchorRoute } from '../../Router'
import Utils from '../../Utils'
import Auth from '../../Auth'

class FindusView {
  init(){    
    console.log('FindusView.init')
    document.title = 'Find Us'    
    this.render()    
    Utils.FindUsAnim()    
  }

  render(){
    const template = html`
     <td-app-header user=${JSON.stringify(Auth.currentUser)}></td-app-header>
      <div id="findus-outer" class="view-screen"> <!-- remove page content class as did not show the photo beneath it-->
      
        <!-- section 1 - hero image -->
        <div id = "findus-hero-section">
        <h1 class = "findus-hero-h1">Find us</h1>
        </div><!-- close home hero -->
        <!-- CONTACT SECTION  -->
       
        <div id = "section-contact-holder">
          <div class = "contact-columns" id = "section-1-contact">
            <div>
            <div class = "contact-col-item" id = "emg-contact">
              <h1>Emergency Contact</h1>
                <div class = "findus-crcl" id = "find-us-emg-span">
                  <span>1300 886 332</span>
                </div>
                <p>If you have an emergency during your tour, please use this emergency number. For all booking enquiries, please use the relevant number for your country on this page.
                </p>
            </div>
            </div>
            <!-- div 2 -->
            <div>
            <div id = "social-links-contact">
            <h1>Socials</h1>

            <a href="https://www.facebook.com/TopdeckTravel/" target="_blank">
              <div class ="social-link-div">
                    <sl-icon name="facebook"></sl-icon>
                    <span>TopDeckTravel</span>
              </div><!-- close social link div -->
            </a> 

            <a href="https://www.instagram.com/topdecktravel/" target="_blank">
              <div class ="social-link-div">
                    <sl-icon name="instagram"></sl-icon>
                    <span>topdecktravel</span>
              </div><!-- close social link div -->
            </a> 

            <a href="https://twitter.com/TopdeckTravel/" target="_blank">
              <div class ="social-link-div">
                    <sl-icon name="twitter"></sl-icon>
                    <span>TopdeckTravel</span>
              </div><!-- close social link div -->
            </a>
            
            <a href="https://www.youtube.com/user/TopDeckTravel/" target="_blank">
              <div class ="social-link-div">
                    <sl-icon name="youtube"></sl-icon>
                    <span>TopDeckTravel</span>
              </div><!-- close social link div -->
            </a>
            
            <a href="https://www.snapchat.com/" target="_blank">
              <div class ="social-link-div">
                    <img src = "images/navy-snapchat.png" alt = "snapchat icon" class = "social-icon-img">
                    <span>#topdecktravel</span>
              </div><!-- close social link div -->
            </a>
            
            <a href="https://www.tiktok.com/" target="_blank">
              <div class ="social-link-div" id = "tiktok-social-div">
                    <img src = "images/navy-tiktok.png" alt = "tiktok icon" class = "social-icon-img">
                    <span>#topdecktravel</span>
              </div><!-- close social link div -->
            </a>
            
          </div><!-- close contact item dev -->
            </div>
          </div>
        
        <!-- COLUMN 2 -->
        <div class = "contact-columns" id = "section-2-contact">
          <!-- first div-->  
          <div>
            <div class = "contact-col-item">
            <h1>Australia</h1>
                <div class = "findus-crcl" id ="aus-num">
                  <span>1300 886 332</span>
                </div>
                <div class = "findus-crcl" id = "aus-num-2">
                  <span>+61 7 30634071</span>
                </div>
                <p>Monday to Friday: 5am-6pm AEST</p>
            </div>
          </div><!-- close first div -->
          
          
          <div> <!-- div 2 - UK -->
            <div class = "contact-col-item" id = "add-marg-col">
                <h1>United Kingdom</h1>
                <div class = "findus-crcl" id ="uk-num">
                  <span>0845 257 5212</span>
                </div>
                <div class = "findus-crcl" id = "uk-num-2">
                  <span>+44 (0)20 8987 3305</span>
                </div>
                <p>Monday to Friday: 12pm - 8pm. GMT</p>
            </div><!-- close contact col item div -->
          </div> <!-- close div num 2 - UK-->
          <!-- div 3 -->
          <div id = "add-marg-col" class = "smaller-contact">
                <h1>New Zealand</h1>
                <div class = "findus-crcl" id ="uk-num">
                  <span>0800 525 366</span>
                </div>
          </div><!-- close contact col item div -->
           <!-- div 4 -->
           <div id = "add-marg-col" class = "smaller-contact">
                <h1>North America</h1>
                <div class = "findus-crcl" id ="uk-num">
                  <span>1 800 607 1399</span>
                </div>
          </div><!-- close contact col item div -->
          <!-- div 5 -->
          <div id = "add-marg-col" class = "smaller-contact">
                <h1>South Africa</h1>
                <div class = "findus-crcl" id ="uk-num">
                  <span>0800 982 308</span>
                </div>
          </div><!-- close contact col item div -->
        </div><!-- close section 2 col -->
      </div>
        
        <td-site-footer></td-site-footer>
      </div>
      
    `

    render(template, App.rootEl)
  }
}

export default new FindusView()
