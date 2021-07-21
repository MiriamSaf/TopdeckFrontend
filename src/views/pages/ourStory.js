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
    Utils.OurStoryAnim()   
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

            <!-- timeline three -festival img -->
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
            
            <!-- timeline six - sydney opera img -->
            <div class = "timeline-item">
            <div class="line"></div> 
            <span class="dot"></span>  
              <!-- actual content-->
              <div class = "content-timeline" class = "img-timeline">
                  <img src = "images/OS-SYDNEY.png" alt = "sydney opera img">
              </div>
            </div>

            <!-- timeline seven -egypt img -->
            <div class = "timeline-item">
              <!-- actual content-->
              <div class = "content-timeline" class = "img-timeline">
                  <img src = "images/OS-EGYPT.png" alt = "egypt pyramids img">
              </div>
            </div>
            
            <!-- timeline eight - 1980s -->
            <div class = "timeline-item">
            <div class="line"></div> 
            <span class="dot"></span>  
            <div class = "content-timeline">
                <h1>1980'S</h1>
                <p>As Top Deck expands, Egypt, Israel and Jordan are added to the list!</p>
              </div>
            </div>

             <!-- timeline nine - USA -->
             <div class = "timeline-item">
             <div class = "content-timeline">
                <h1>2013</h1>
                <p>After 30 years tourin', Top Deck starts touring the USA!</p>
              </div>
             </div>
            
            <!-- timeline ten - USA img -->
            <div class = "timeline-item">
            <div class="line"></div> 
            <span class="dot"></span>  
             <!-- actual content-->
             <div class = "content-timeline" class = "img-timeline">
                  <img src = "images/OS-USA.png" alt = "statue of liberty img">
              </div>
            </div>

             <!-- timeline eleven - Asia -->
             <div class = "timeline-item">
              <!-- actual content-->
              <div class = "content-timeline" class = "img-timeline">
                  <img src = "images/OS-ASIA.png" alt = "Asian person and building img">
              </div>
             </div>
            
            <!-- timeline twelve - 2015-->
            <div class = "timeline-item">
            <div class="line"></div> 
            <span class="dot"></span>  
            <div class = "content-timeline">
                <h1>2015</h1>
                <p>With total world domination in sight, the lush Asian continent is added to the tour list!</p>
              </div>
            </div>

             <!-- timeline thirteen -2020-->
             <div class = "timeline-item">
             <div class = "content-timeline">
                <h1>2020</h1>
                <p>Top Deck introduces South American tours.  Unfortunately March 2020 sees the global COVID pandemic take off stopping international travel.</p>
              </div>
             </div>
            
            <!-- timeline fourteen -south america -->
            <div class = "timeline-item">
            <div class="line" id = "last-line"></div> 
            <span class="dot"></span>  
              <!-- actual content-->
              <div class = "content-timeline" class = "img-timeline">
                  <img src = "images/OS-SOUTHAMERICA.png" alt = "South America img">
              </div>
            </div>

               <!-- timeline fifteen -->
               <div class = "timeline-item">
             <div class = "content-timeline">
               
              </div>
             </div>

             <!-- timeline sixteen -->
             <div class = "timeline-item" id = "last-tl-item">
           
            <span class="tl-bottom-square">
              <h1>And now in 2021</h1>
            </span>  
                <div class = "timeline-extra-content">
                  <p>
                  Top Deck remains committed to providing exciting travel experiences and with the COVID pandemic still affecting the world, your safety and wellbeing is our highest priority. With new flexible booking options and COVID safe itineraries, we are ready to come through the darkness and show you the world once again.
                  </p>

                  <span class="tl-bottom-y-sq">
                    <h3>Find a Tour</h3>
                  </span>
                </div>
                
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