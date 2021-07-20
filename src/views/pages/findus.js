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
    <style>
      /* Create two equal columns that floats next to each other */
      .column {
        float: left;
        width: 50%;
        padding: 10px;
      }

      .row {
        margin: 2em;
      }

      /* Clear floats after the columns */
      .row:after {
        content: "";
        display: table;
        clear: both;
      }

    </style>
     <td-app-header user=${JSON.stringify(Auth.currentUser)}></td-app-header>
      <div> <!-- remove page content class as did not show the photo beneath it-->
      
        <!-- section 1 - hero image -->
        <div id = "findus-hero-section">
        <h1 class = "findus-hero-h1">Find us</h1>
        </div><!-- close home hero -->

        <!-- CONTACT SECTION  -->
       
        <div class="row">
          <div class="column" style="background-color:#aaa;">
            <div> <!-- div 1 emergency -->
              <div class = "contact-col-item">
                <h1>Emergency Contact</h1>
                  <div class = "findus-crcl" id = "find-us-emg-span">
                    <span>1300 886 332</span>
                  </div>
                  <p>If you have an emergency during your tour, please use this emergency number. For all booking enquiries, please use the relevant number for your country on this page.
                  </p>
              </div>
            </div>

            <div> <!-- div 2 - Aus -->
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
            </div> <!-- close div num 2 - UK-->

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
            
          </div> <!-- close col 1 -->


          <div class="column" style="background-color:#bbb;">
            <div id = "social-links-contact">
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

              <div class ="social-link-div" id = "tiktok-social-div">
                    <img src = "images/navy-tiktok.png" alt = "tiktok icon" class = "social-icon-img">
                    <span>#topdecktravel</span>
              </div><!-- close social link div -->
            </div><!-- close social contact -->

         
          </div> <!-- close col 2 -->


        </div><!-- close row-->

        <td-site-footer></td-site-footer>

        
        
      </div> <!-- close page -->
      
    `

    render(template, App.rootEl)
  }
}

export default new FindusView()