import App from '../../App'
import {html, render } from 'lit-html'
import {gotoRoute, anchorRoute } from '../../Router'
import Utils from '../../Utils'
import Auth from './../../Auth'

class FaqsView {
  init(){    
    console.log('FaqsView.init')
    document.title = 'FAQs'    
    this.render()    
    Utils.pageIntroAnim()    
  }

  //Accordian style list by Shoelace https://shoelace.style/components/details
  faqClick (){
    const container = document.querySelector('.details-group-example');

    // Close all other details when one is shown
    container.addEventListener('sl-show', event => {
      [...container.querySelectorAll('sl-details')].map(details => (details.open = event.target === details));
    });
  }

  render(){
    const template = html`
    <style>
      .details-group-example sl-details:not(:last-of-type) {
        margin-bottom: var(--sl-spacing-xx-small);
      }
    </style>
     <td-app-header user=${JSON.stringify(Auth.currentUser)}></td-app-header>
      <div>

      <!-- section 1 - hero image -->
      <div id = "faqs-hero-section">
        <h1 class = "faqs-hero-h1">Frequently Asked Questions</h1>
        </div><!-- close home hero -->
      
        <div id = "section-contact-holder">

        <div class="details-group-example" >
          <sl-details summary="First FAQ" open>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
            aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </sl-details>

          <sl-details summary="Second FAQ">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
            aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </sl-details>

          <sl-details summary="Third FAQ">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
            aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </sl-details>
        </div>



        </div>


        <td-site-footer></td-site-footer>
      </div>
      
    `

    render(template, App.rootEl)
  }
}

export default new FaqsView()
