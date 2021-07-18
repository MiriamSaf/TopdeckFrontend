import App from '../../App'
import {html, render } from 'lit-html'
import {gotoRoute, anchorRoute } from '../../Router'
import Utils from '../../Utils'
import Toast from '../../Toast'
import Auth from '../../Auth'
import PackageAPI from './../../PackageAPI'

class GetPackageTestView {
  init(){    
    console.log('GetPackageTestView.init')
    document.title = 'Find a Tour TEST' 
    this.tours = null   
    this.render()    
    Utils.pageIntroAnim()    
    this.getPackages()
  }

  async getPackages(){
    try{
      this.tours = await PackageAPI.getPackages()
      console.log(this.tours)
      this.render()
    }catch(err){
      Toast.show(err, 'error')
    }
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
              <sl-spinner style="font-size: 2em;" ></sl-spinner>
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

              <p>this is after the tour list</p> 

              <td-packages class="package-card"
                title="Test 2"
                description="Test 2 Description"
                price=$35
                image="topdeck-black.png"
                date="31st August"
              > 
              </td-packages>
              <p>And this is after a test 2 item</p> 
            </div>

            
        <td-site-footer></td-site-footer>
      </div>
      
    `

    render(template, App.rootEl)
  }
}

export default new GetPackageTestView()