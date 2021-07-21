import App from '../../App'
import {html, render } from 'lit-html'
import {gotoRoute, anchorRoute } from '../../Router'
import Auth from '../../Auth'
import Utils from '../../Utils'

class OurStoryView {
  init(){    
    console.log('OurStoryView.init')
    document.title = 'Our Story'    
    this.render()    
    Utils.pageIntroAnim()    
  }

  render(){
    const template = html`
     <td-app-header user=${JSON.stringify(Auth.currentUser)}></td-app-header>
      <div>
        <!-- section 1 - hero image -->
        <div id = "ourstory-hero-section">
        <h1 class = "ourstory-hero-h1">Our Story</h1>
        </div><!-- close hero -->

        <!-- section 2 timeline -->
        <div class = "timeline-section">
          <div class = "timeline-cols">
            <!-- timeline one -->
            <div class = "timeline-item">
              <div class = "content-timeline">
                <h1>1973</h1>
                <p>The first ever Top Deck tour happened when founder Skroo Turner and Friends bought 
                  a red double decker bus and travelled across Europe from London to Morocco!</p>
              </div>
            </div>

            <!-- timeline two-->
            <div class = "timeline-item">
              <div class="line"></div> 
              <span class="dot"></span>  
              <!-- actual content-->
                <div class = "content-timeline" class = "img-timeline">
                  <img src = "images/OS-BUS.png" alt = "red double decker bus img">
                </div>
            </div>

            <!-- timeline three -->
            <div class = "timeline-item">one</div>
            <div class = "timeline-item">
            <span class="dot"></span>  
            two</div>
          </div><!-- close timeline cols div-->
          </div>
    
        <td-site-footer></td-site-footer>
      </div>
      
    `

    render(template, App.rootEl)
  }
}

export default new OurStoryView()