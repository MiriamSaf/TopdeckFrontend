import App from '../../App'
import {html, render } from 'lit-html'
import {gotoRoute, anchorRoute } from '../../Router'
import Utils from '../../Utils'
import Auth from '../../Auth'
import PackageAPI from '../../PackageAPI'
import Toast from '../../Toast'

class BookTourView {
  init(){    
    console.log('BookTour.init')
    document.title = 'Book Tour'    
    this.render()    
    Utils.pageIntroAnim()    
  }

  async getPackage (){
    // get id param from URL
    const urlParams = new URLSearchParams(location.search)
    const id = urlParams.get('id')
    // get the tour (API request)
    this.package = await PackageAPI.getPackage(id)
    console.log(this.package)
    this.render()
  }

  render(){
    const template = html`
     <td-app-header user=${JSON.stringify(Auth.currentUser)}></td-app-header>
      <div class="page-content">
      
       
        <h3>Book tour Contents here</h3>
        
        <td-site-footer></td-site-footer>
      </div>
      
    `

    render(template, App.rootEl)
  }
}

export default new BookTourView()