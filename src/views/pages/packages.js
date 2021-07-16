import App from '../../App'
import {html, render } from 'lit-html'
import {gotoRoute, anchorRoute} from '../../Router'
import Auth from '../../Auth'
import Utils from '../../Utils'
import PackageAPI from '../../PackageAPI'


class packagesView {
  init(){
    document.title = 'Packages'
    this.tours = null
    this.render()    
    Utils.pageIntroAnim()
    this.getPackages()
  }

  async getPackages(){
    try{
      this.tours = await PackageAPI.getPackages()
      console.log(this.packages)
      this.render()
    }catch(err){
      Toast.show(err, 'error')
    }
  }

  render(){
    const template = html`
      <td-app-header user="${JSON.stringify(Auth.currentUser)}"></td-app-header>
      <div>  <!-- remove page content as did not show the photo beneath it-->

      <!-- section 1 - hero image -->
      <div id = "packg-hero-section">
        <h1 class = "pckg-hero-h1">Find a trip</h1>
      </div><!-- close home hero -->

      <!-- section 2 - packages and find by -->
      <div id = "packg-pckg-flex">
        <div id = "right-container-pckg">
          <div class = "packages-display">
            <div id = "pckg-img-1">
              <div class = pckg-span id = "adv-span">
                <span>#Adventure</span>
              </div>
            </div>
            <div class = "pckg-disp-txt">
              <h1><strong>Bali Adventurer</strong></h1>
              <h2><i>South East Asia</i></h2>
              <h1>9 Nights | Departs Denpaser</h1>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, <br>sed do eiusmod tempor incididunt ut labore et dolore <br>magna aliqua. Ut enim ad minim veniam</p>
            </div>
          </div>

          <div class = "packages-display">
            <div id = "pckg-img-2">
              <div class = "pckg-span" id = "med-span">
                <span>#Chill</span>
              </div>
            </div>
            <div class = "pckg-disp-txt">
              <h1><strong>Mediterranean Reset</strong></h1>
              <h2><i>Europe</i></h2>
              <h1>5 Nights | Departs Athens</h1>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, <br>sed do eiusmod tempor incididunt ut labore et dolore <br>magna aliqua. Ut enim ad minim veniam</p>
            </div>
          </div>
        </div>

        <div id = "left-container-pckg">
        left col
        </div>
      </div><!-- close pckg flex div-->

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




         </td-packages>
        </div>
        
      </div>      
    `
    render(template, App.rootEl)
  }
}

export default new packagesView()