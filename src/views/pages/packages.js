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
    Utils.AddTourAnim()
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

          </div><!-- close pckg display -->

          <div class = "packages-display">
            <div id = "pckg-img-3">
              <div class = "pckg-span" id = "america-span">
                <span>#Party</span>
              </div>
            </div>
            <div class = "pckg-disp-txt">
              <h1><strong>American Dream</strong></h1>
              <h2><i>North America</i></h2>
              <h1>5 Nights | Departs New York</h1>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, <br>sed do eiusmod tempor incididunt ut labore et dolore <br>magna aliqua. Ut enim ad minim veniam</p>
            </div>

          </div><!-- close pckg display -->

          <div class = "packages-display">
            <div id = "pckg-img-4">
              <div class = "pckg-span" id = "az-span">
                <span>#Chill</span>
              </div>
            </div>
            <div class = "pckg-disp-txt">
              <h1><strong>Aztec Immersion</strong></h1>
              <h2><i>South America</i></h2>
              <h1>10 Nights | Departs Lima</h1>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, <br>sed do eiusmod tempor incididunt ut labore et dolore <br>magna aliqua. Ut enim ad minim veniam</p>
            </div>

          </div><!-- close pckg display -->
        
        


        </div>

        <!-- left find by col -->
        <div id = "left-container-pckg">
          <div>
          <h1 id = "pckg-findby-h1">Find By:</h1>
          </div>

          <div>
            <sl-input  id = "search-input" placeholder = "Search" pill>
              <sl-icon name="search" slot="prefix"></sl-icon>
            </sl-input>
          </div>

          <div class = "left-col-item">
            <sl-dropdown>
            <sl-button id = "dropdown-vibe" slot="trigger" caret>Select your vibe</sl-button>
              <sl-menu>
                <sl-menu-item>#adventure</sl-menu-item>
                <sl-menu-item>#chill</sl-menu-item>
                <sl-menu-item>#party</sl-menu-item>
                <sl-menu-item>#culture</sl-menu-item>
              </sl-menu>
            </sl-dropdown>
          </div>

          <div class = "left-col-item">
            <sl-dropdown>
            <sl-button id = "dropdown-vibe" slot="trigger" caret>Select Region</sl-button>
              <sl-menu>
                <sl-menu-item>Asia</sl-menu-item>
                <sl-menu-item>Europe</sl-menu-item>
                <sl-menu-item>North America</sl-menu-item>
                <sl-menu-item>South America</sl-menu-item>
              </sl-menu>
            </sl-dropdown>
          </div>

          <div class = "left-col-item">
          <h1 id = "pckg-launch-h1">Launch Map</h1>
          </div>

          <div class = "left-col-item">
            <img id = "coloured-map-col" src = "images/map-coloured.png" alt = "world map coloured">
          </div>
          
          <div class = "left-col-item">
            <h1 id = "pckg-sort-h1">Sort By:</h1>
          </div>

          <div class = "left-col-item">
            <span class = "pckg-yellow-left-crcl" id = "top-rated-btn">Top Rated</span>
          </div>

          <div class = "left-col-item" id = "most-pop-btn">
            <span class = "pckg-yellow-left-crcl"  >Most Popular</span>
          </div>

          
        </div><!-- close left col -->

      </div><!-- close pckg flex div-->

      </div>
  </div>


        
        <td-site-footer></td-site-footer>
      </div>      
    `
    render(template, App.rootEl)
  }
}

export default new packagesView()