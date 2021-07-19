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
    Utils.pageIntroAnim()    
  }

  render(){
    const template = html`
     <td-app-header title="Find Us" user=${JSON.stringify(Auth.currentUser)}></td-app-header>
      <div> <!-- remove page content class as did not show the photo beneath it-->
      
        <!-- section 1 - hero image -->
        <div id = "findus-hero-section">
        <h1 class = "findus-hero-h1">Find us</h1>
        </div><!-- close home hero -->

        <!-- section 2 - info -->
        <div id = "findus-info-container">
          <div id = "contact-contain">
            <div class = "contact-item" id = "emg-info-item">
              <h1>Emergency Contact</h1>
                <div class = "findus-crcl" id = "find-us-emg-span">
                  <span>1300 886 332</span>
                </div>
                <p>If you have an emergency during your tour, please use this emergency number. For all booking enquiries, please use the relevant number for your country on this page.
                </p>
            </div>
            
            <div class = "contact-item">
            <h1>Australia</h1>
                <div class = "findus-crcl" id ="aus-num">
                  <span>1300 886 332</span>
                </div>
                <div class = "findus-crcl" id = "aus-num-2">
                  <span>+61 7 30634071</span>
                </div>
                <p>Monday to Friday: 5am-6pm AEST</p>
            </div>
          </div><!-- close contact contain-->

          <div id = "second-contact-flex">
          <div class = "contact-item" id = "social-links-contact">
            <h1>Socials</h1>
            <div class ="social-link-div">
                  <sl-icon name="facebook"></sl-icon>
                  <span>TopDeckTravel</span>
            </div><!-- close social link div -->

            <div class ="social-link-div">
                  <sl-icon name="instagram"></sl-icon>
                  <span>topdecktravel</span>
            </div><!-- close social link div -->

            <div class ="social-link-div">
                  <sl-icon name="twitter"></sl-icon>
                  <span>TopdeckTravel</span>
            </div><!-- close social link div -->

            <div class ="social-link-div">
                  <sl-icon name="youtube"></sl-icon>
                  <span>TopDeckTravel</span>
            </div><!-- close social link div -->

            <div class ="social-link-div">
                  <img src = "images/navy-snapchat.png" alt = "snapchat icon" class = "social-icon-img">
                  <span>#topdecktravel</span>
            </div><!-- close social link div -->

            <div class ="social-link-div">
                  <img src = "images/navy-tiktok.png" alt = "tiktok icon" class = "social-icon-img">
                  <span>#topdecktravel</span>
            </div><!-- close social link div -->

          </div><!-- close contact item dev -->
          
          <div class = "contact-item">
          <h1>United Kingdom</h1>
                <div class = "findus-crcl" id ="uk-num">
                  <span>0845 257 5212</span>
                </div>
                <div class = "findus-crcl" id = "uk-num-2">
                  <span>+44 (0)20 8987 3305</span>
                </div>
                <p>Monday to Friday: 12pm - 8pm. GMT</p>
            </div>
            
          </div> <!-- close contact item div -->
         
        </div> <!-- close find us info container -->
        
        <!-- TESTING opt 2 -->
       
        <div id = "section-contact-holder">
          <div class = "contact-columns" id = "section-1-contact">
            <div>

            <div class = "contact-col-item">
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

            <div class = "contact-col-item" id = "social-links-contact">
            <h1>Socials</h1>
            <div class ="social-link-div">
                  <sl-icon name="facebook"></sl-icon>
                  <span>TopDeckTravel</span>
            </div><!-- close social link div -->

            <div class ="social-link-div">
                  <sl-icon name="instagram"></sl-icon>
                  <span>topdecktravel</span>
            </div><!-- close social link div -->

            <div class ="social-link-div">
                  <sl-icon name="twitter"></sl-icon>
                  <span>TopdeckTravel</span>
            </div><!-- close social link div -->

            <div class ="social-link-div">
                  <sl-icon name="youtube"></sl-icon>
                  <span>TopDeckTravel</span>
            </div><!-- close social link div -->

            <div class ="social-link-div">
                  <img src = "images/navy-snapchat.png" alt = "snapchat icon" class = "social-icon-img">
                  <span>#topdecktravel</span>
            </div><!-- close social link div -->

            <div class ="social-link-div">
                  <img src = "images/navy-tiktok.png" alt = "tiktok icon" class = "social-icon-img">
                  <span>#topdecktravel</span>
            </div><!-- close social link div -->

          </div><!-- close contact item dev -->


            </div>
          </div>
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

            </div>
            <div>

            <div class = "contact-col-item" id = "add-marg-col">
          <h1>United Kingdom</h1>
                <div class = "findus-crcl" id ="uk-num">
                  <span>0845 257 5212</span>
                </div>
                <div class = "findus-crcl" id = "uk-num-2">
                  <span>+44 (0)20 8987 3305</span>
                </div>
                <p>Monday to Friday: 12pm - 8pm. GMT</p>
            </div>

            </div>
          </div>
        </div>
        
        <td-site-footer></td-site-footer>
      </div>
      
    `

    render(template, App.rootEl)
  }
}

export default new FindusView()