import App from '../../App'
import {html, render } from 'lit-html'
import {gotoRoute, anchorRoute } from '../../Router'
import Utils from '../../Utils'
import Auth from '../../Auth'

class GetPackageTestView {
  init(){    
    console.log('GetPackageTestView.init')
    document.title = 'Find a Tour TEST'    
    this.render()    
    Utils.pageIntroAnim()    
  }

  render(){
    const template = html`
     <td-app-header title="FAQs" user=${JSON.stringify(Auth.currentUser)}></td-app-header>
      <div class="page-content">
      
        <h3>Find a Tour TEST page</h3>
        <p class="para"> And the Tours should appear below </p>

       <div class="packages-grid">
             ${this.tours == null ? html`
             Waiting for data to test here
              <sl-spinner></sl-spinner>
            ` : html`
              ${this.tours.map(tour => html `
              <td-packages class="package-card"
                  title="${tour.name}"
                  description="${tour.description}"
                  price=${tour.price}
                  image="${tour.image}"
                  date="${tour.date}"
                > 
            </td-packages>
              `)}
            `}
            </div>

            
        <td-site-footer></td-site-footer>
      </div>
      
    `

    render(template, App.rootEl)
  }
}

export default new GetPackageTestView()