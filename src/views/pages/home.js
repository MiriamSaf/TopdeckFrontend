import App from './../../App'
import {html, render } from 'lit-html'
import {gotoRoute, anchorRoute } from './../../Router'
import Auth from './../../Auth'
import Utils from './../../Utils'

class HomeView {
  init(){    
    console.log('HomeView.init')
    document.title = 'Home'    
    this.render()    
    Utils.pageIntroAnim()    
  }

  // Quiz dialog begins here
  quizHandler(e){
    e.preventDefault()
    console.log('quiz handler')
    const dialogEL = document.createElement('sl-dialog')

    // add class name
    dialogEL.className = 'quiz-dialog'

    //- sl-dialog content 
    const dialogContent = html`
        <style>
            .wrap {
                display: flex;
                width: 100%;
            }

            .content {
                float: left;
                padding-left: 1em;
            }
            h1 {
                  color: black;
                }

            .quiz-dialog::part(body){
              margin-top: -3em;
            }


            @media all and (max-width: 768px){

              .wrap {
                display: inline-block;
              }

            }

        </style>
        <div class="wrap">

            <div class="content">

                <h1>Topdeck <strong>#vibe</strong> Quiz</h1>
                
                <div class="qset">
                  <div class="question-box q1">
                    Do you enjoy slow paced, relaxing tours?
                    <div class="qcol go">
                      <div class="button r1">Yes, this is me</div>
                    </div>
                    <div class="qcol next">
                      <div class="button">Not me</div>
                    </div>
                  </div>
                  <div class="response-box a1">
                    Your vibe is <span class="qvibe">#chill</span>
                    <div class="button">Check out #chill tours</div>
                  </div>
                </div>


                <div class="qset">
                  <div class="question-box q2">
                    Do you enjoy experiences with people from different backgrounds?
                    <div class="qcol go">
                      <div class="button r2">Yes, this is me</div>
                    </div>
                    <div class="qcol next">
                      <div class="button">Not me</div>
                    </div>
                  </div>
                  <div class="response-box a2">
                    Your vibe is <span class="qvibe">#culture</span>
                    <div class="button">Check out #culture tours</div>
                  </div>
                </div>


                <div class="qset">
                  <div class="question-box q2">
                    <div class="qcol go">
                      Do you enjoy having a fun time socializing with others?
                      <div class="button r3">Yes, this is me</div>
                    </div>
                    <div class="qcol go">
                      Do you love living on the edge, exploring everything?
                      <div class="button r4">Yes, this is me</div>
                    </div>
                  </div>
                  <div class="response-box a3">
                    Your vibe is <span class="qvibe">#party</span>
                    <div class="button">Check out #party tours</div>
                  </div>
                  <div class="response-box a4">
                    Your vibe is <span class="qvibe">#adventure </span>
                    <div class="button">Check out #adventure  tours</div>
                  </div>
                </div>
            
            </div> 
        </div>
      `
    render(dialogContent, dialogEL)

    //- append to document.body
    document.body.append(dialogEL)

    //- show sl-dialog
    dialogEL.show()

    //- on hide delete sl-dialog
    dialogEL.addEventListener('sl-after-hide', () => {
        dialogEL.remove()
    })
  }
  //End of Quiz Dialog

  render(){
    const template = html`
      <td-app-header user=${JSON.stringify(Auth.currentUser)}></td-app-header>
      <div class="view-screen">
        <div id = "home-container">
          <!-- section 1 Hero image -->
          <div id = "home-hero-section">
            <div id = "home-hero-text">
              <h3>Group Tours for 18 - 30 Somethings</h3>
              <h1>Good Vibes & Safe Travels</h1>
            </div>
          </div>


          <!-- section 2 popular tours -->
          <div id = "home-poptour-section">
            <h1 id ="pop-h1">Popular Top Deck Tours:</h1>

            <div class ="glider-contain multiple">
            <!--slide in and out element-->
              <div class = "glider">
                <figure>
                  <div id = "bali-adventure" class = "slide">
                    <div class = "slider-txt">
                    <h3>Bali Adventurer</h3>
                      <h4>9 Nights | Departs Denpaser</h4>
                      <div class = "slider-item"  id = "adv-slide">
                      <span >#Adventure</span>
                    </div>
                    </div>
                  </div>
                </figure>

            
                <figure>
                  <div id = "med-reset" class = "slide">
                    <div class = "slider-txt">
                    <h3>Mediterranean Reset</h3>
                      <h4>5 Nights | Departs Athens</h4>
                      <div class = "slider-item" id = "chill-slide">
                      <span>#Chill</span>
                      </div>
                    </div>   
                  </div>
                </figure>   
              </div> <!-- close glider-->
            </div>  <!-- glider-contain multiple-->

            <!-- placeholder dots for now-->
            <div id = "dots">
              <sl-icon name = "circle"></sl-icon>
              <sl-icon name = "circle"></sl-icon>
              <sl-icon name = "circle"></sl-icon>
              <sl-icon name = "circle"></sl-icon>
              <sl-icon name = "circle"></sl-icon>
            </div>
            <!-- other slider divs go below -->
          </div>   <!-- home-poptour-section -->

          <!-- Section 3 travellers feedback-->
          <div id = "home-feedback-section">
            <div id = "feedback-sm-container">
              <div id = "feedback-box">
                  <h1>What are our <span class = "highlight">travellers</span> saying?</h1>
              </div>
              <!--vertical line-->
              <div id="vert-line"></div>
                <div id = "feedback-box">
                  <h2><i>"I had the time of my life on the Eastern Europe Party Tour."</i></h2>
                  <img src = "images/5-stars.png" alt = "5 stars filled in yellow">
                </div>
              </div>
            </div> <!--close feedback-sm-container -->
          </div><!--close feedback div -->

          <!-- section 4 quiz section -->
          <div id = "home-quiz-section">
            <div id = "quiz-h1-box">
              <h1>Find out your travel style</h1>
              <a href="#" id = "btn-outline" @click=${this.quizHandler.bind(this)}>Take the Quiz</a>
            </div>
          </div><!--close home quiz section div-->

              
          <!-- section 5 - instagram grid of pictures -->
          <div id = "home-grid-section">
            <h2>#topdecktravel</h2>
            <!-- image grid below-->
            <div id = "home-grid">
              <!-- include instagram images below -->
              <div class="img-gallery">
                <img src = "images/instagram/IG-1.jpg" alt = "topdeck instagram trip photo">
                <img src = "images/instagram/IG-2.jpg" alt = "topdeck instagram trip photo">
                <img src = "images/instagram/IG-3.jpg" alt = "topdeck instagram trip photo">
                <img src = "images/instagram/IG-4.jpg" alt = "topdeck instagram trip photo">
                <img src = "images/instagram/IG-5.jpg" alt = "topdeck instagram trip photo">
                <img src = "images/instagram/IG-6.jpg" alt = "topdeck instagram trip photo">
                <img src = "images/instagram/IG-7.jpg" alt = "topdeck instagram trip photo">
                <img src = "images/instagram/IG-8.jpg" alt = "topdeck instagram trip photo">
                <img src = "images/instagram/IG-9.jpg" alt = "topdeck instagram trip photo">
                <img src = "images/instagram/IG-10.jpg" alt = "topdeck instagram trip photo">
                <img src = "images/instagram/IG-11.jpg" alt = "topdeck instagram trip photo">
                <img src = "images/instagram/IG-12.jpg" alt = "topdeck instagram trip photo">
              </div>
            </div>

          </div><!-- close home grid section-->



          <td-site-footer></td-site-footer>    
        </div>  <!-- close home-container-->
        
      </div>



      
    `
    render(template, App.rootEl)
  }
}

export default new HomeView()