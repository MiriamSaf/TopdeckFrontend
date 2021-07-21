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

            .row {
              display: flex;
              width: 100%;
            }

            .qcol{
              display: flex;
              flex-direction: column;
              width: 45%;
              align-items: stretch;
            }

            .qvibe {
              color: var(--brand-pink);
              font-size: 2em;
            }

            .qbutton {
              border-radius: 10px;
              text-align: center;
              width: 100%;
              padding-top: 2vh;
              padding-bottom: 2vh;
              left: 2.5vh;
            }

            .button-go {
              background-color: #C9E2D1;
              color: #fff;
            }

            .button-tours {
              background-color: #222C39;
              color: #fff;
            }

            .button-next {
              background-color: #F9DE7E;
              color: #fff;
            }

            .hidden {
              display: none;
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
                  <div id="q1" class="question-box ">
                    <div class="row">Do you enjoy slow paced, relaxing tours? </div>
                    <div class="qcol">
                      <a href="#" class="qbutton button-go" @click=${this.yesOneHandler}>Yes, this is me</a>
                    </div>
                    <div class="qcol">
                      <a href="#" class="qbutton button-next" @click=${this.nextOneHandler}>Not me</a>
                    </div>
                  </div>
                  <div id="a1" class="response-box hidden">
                    Your vibe is <span class="qvibe">#chill</span>
                    <a href="/packages" class="qbutton button-tours" @click="${this.checkClick}">Check out #chill tours</h3></a>
                  </div>
                </div>


                <div class="qset">
                  <div id="q2" class="question-box hidden">
                    Do you enjoy experiences with people from different backgrounds?
                    <div class="qcol">
                      <a href="#" class="qbutton button-go" @click=${this.yesTwoHandler}>Yes, this is me</a>
                    </div>
                    <div class="qcol">
                      <a href="#" class="qbutton button-next" @click=${this.nextTwoHandler}>Not me</a>
                    </div>
                  </div>
                  <div id="a2" class="response-box hidden">
                    Your vibe is <span class="qvibe">#culture</span>
                    <a href="/packages" class="qbutton button-tours" @click="${this.checkClick}">Check out #culture tours</a>
                  </div>
                </div>


                <div class="qset">
                  <div id="q3" class="question-box hidden">
                    <div class="qcol">
                      Do you enjoy having a fun time socializing with others?
                      <a href="#" class="qbutton button-go" @click=${this.yesThreeHandler}>Yes, this is me</a>

                    </div>
                    <div class="qcol">
                      Do you love living on the edge, exploring everything?
                      <a href="#" class="qbutton button-go" @click=${this.yesFourHandler}>Yes, this is me</a>

                    </div>
                  </div>
                  <div  id="a3" class="response-box hidden">
                    Your vibe is <span class="qvibe">#party</span>
                    <a href="/packages" class="qbutton button-tours" @click="${this.checkClick}">Check out #party tours</a>
                  </div>
                  <div  id="a4"class="response-box hidden">
                    Your vibe is <span class="qvibe">#adventure </span>
                    <a href="/packages" class="qbutton button-tours" @click="${this.checkClick}">Check out #adventure  tours</a>
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

  yesOneHandler(e){
    e.preventDefault()
    const questionOne = document.getElementById('q1')
    const answerOne = document.getElementById('a1')
    // add class name
    questionOne.classList.add('hidden')
    // remove class name = removeClass()
    answerOne.classList.remove('hidden')
  }

  nextOneHandler(e){
    e.preventDefault()
    const questionOne = document.getElementById('q1')
    const questionTwo = document.getElementById('q2')
    questionOne.classList.add('hidden')
    questionTwo.classList.remove('hidden')
  }

  yesTwoHandler(e){
    e.preventDefault()
    const questionTwo = document.getElementById('q2')
    const answerTwo = document.getElementById('a2')
    questionTwo.classList.add('hidden')
    answerTwo.classList.remove('hidden')
  }

  nextTwoHandler(e){
    e.preventDefault()
    const questionTwo = document.getElementById('q2')
    const questionThree = document.getElementById('q3')
    questionTwo.classList.add('hidden')
    questionThree.classList.remove('hidden')
  }

  yesThreeHandler(e){
    e.preventDefault()
    const questionThree = document.getElementById('q3')
    const answerThree = document.getElementById('a3')
    questionThree.classList.add('hidden')
    answerThree.classList.remove('hidden')
  }

  yesFourHandler(e){
    e.preventDefault()
    const questionThree = document.getElementById('q3')
    const answerFour = document.getElementById('a4')
    questionThree.classList.add('hidden')
    answerFour.classList.remove('hidden')
  }

  // not working when I tried to hide/remove the dialog
  checkClick(e){
    e.preventDefault()
    const pathname = e.target.closest('a').pathname
    // goto route  
    gotoRoute(pathname)

  }






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