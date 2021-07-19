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
                <div class = "findus-crcl">
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
        </div> <!-- close find us info container -->
       
        <h3></h3>
        
        <td-site-footer></td-site-footer>
      </div>
      
    `

    render(template, App.rootEl)
  }
}

export default new FindusView()