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
            <!-- timeline one - start/ foundation -->
            <div class = "timeline-item">
              <div class = "content-timeline">
                <h1>1973</h1>
                <p>The first ever Top Deck tour happened when founder Skroo Turner and Friends bought 
                  a red double decker bus and travelled across Europe from London to Morocco!</p>
              </div>
            </div>

            <!-- timeline two - Bus img -->
            <div class = "timeline-item">
              <div class="line"></div> 
              <span class="dot"></span>  
              <!-- actual content-->
                <div class = "content-timeline" class = "img-timeline">
                  <img src = "images/OS-BUS.png" alt = "red double decker bus img">
                </div>
            </div>

            <!-- timeline three -->
            <div class = "timeline-item">
              <!-- actual content-->
              <div class = "content-timeline" class = "img-timeline">
                  <img src = "images/OS-FESTIVAL.png" alt = "festival img">
                </div>
            </div>
            
            <!-- timeline four -1974 -->
            <div class = "timeline-item">
            <div class="line"></div> 
            <span class="dot"></span> 
              <div class = "content-timeline">
                <h1>1974</h1>
                <p>After the success of the first trip, Skroo and friends hit the road traversing European festivals.</p>
              </div>
            </div>

             <!-- timeline FIVE - 1975 -->
             <div class = "timeline-item">
             <div class = "content-timeline">
                <h1>1975</h1>
                <p>Skroo and the gang continue the fun adding a trip from London to Sydney via Kathmandu.</p>
              </div>
             </div>
            
            <!-- timeline six -->
            <div class = "timeline-item">
            <div class="line"></div> 
            <span class="dot"></span>  
            </div>

            <!-- timeline seven -->
            <div class = "timeline-item">one</div>
            
            <!-- timeline eight -->
            <div class = "timeline-item">
            <div class="line"></div> 
            <span class="dot"></span>  
            </div>

             <!-- timeline nine -->
             <div class = "timeline-item">one</div>
            
            <!-- timeline ten -->
            <div class = "timeline-item">
            <div class="line"></div> 
            <span class="dot"></span>  
            </div>

             <!-- timeline eleven -->
             <div class = "timeline-item">one</div>
            
            <!-- timeline twelve -->
            <div class = "timeline-item">
            <div class="line"></div> 
            <span class="dot"></span>  
            </div>

             <!-- timeline thirteen -->
             <div class = "timeline-item">one</div>
            
            <!-- timeline fourteen -->
            <div class = "timeline-item">
            <div class="line"></div> 
            <span class="dot"></span>  
            </div>


          </div><!-- close timeline cols div-->
          </div>
    
        <td-site-footer></td-site-footer>
      </div>
      
    `

    render(template, App.rootEl)
  }
}

export default new OurStoryView()