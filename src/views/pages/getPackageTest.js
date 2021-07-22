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
      <td-app-header user=${JSON.stringify(Auth.currentUser)}></td-app-header>
      <div class="page-content">
      
        <div class="mobile-filters">
          This div will only show in the mobile view and contain the filter component
        </div>

        <div class="main-row">
          This div contains the two columns - 

          <div id="left-column" class="tour-column">
            This is the left column with the package cards

            <div class="packages-grid">
                ${this.tours == null ? html`
                  <sl-spinner style="font-size: 2em;" ></sl-spinner>
                  ` : html`
                    ${this.tours.map(tour => html `
                      <td-packages class="package-card"
                          title="${tour.title}"
                          description="${tour.description}"
                          longDescription="${tour.longDescription}"
                          date="${tour.date}"
                          duration="${tour.duration}"
                          vibe="${tour.vibe}"
                          country="${tour.country}"
                          region="${tour.region}"
                          type="${tour.type}"
                          depatureLocation="${tour.depatureLocation}"
                          endLocation="${tour.endLocation}"
                          price=${tour.price}
                          image="${tour.image}"
                        > 
                      </td-packages>


                    `)}
                  `}
            </div>

            <div id="right-column" class="tour-column">
              This is the right column for the filter component
              - set to width 0 and hidden in mobile view

            </div>

          </div>


        </div>
        <td-site-footer></td-site-footer>
      </div> 
      
    `

    render(template, App.rootEl)
  }
}

export default new GetPackageTestView()