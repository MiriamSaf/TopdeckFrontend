import { LitElement, html, css } from '@polymer/lit-element'
import { render } from 'lit-html'
import {anchorRoute, gotoRoute} from '../Router'
import Auth from '../Auth'
import App from '../App'



customElements.define('td-packages', class Package extends LitElement {
  constructor(){
    super()    
  }

  static get properties(){
    return {
      title: { type: String },
      description: { type: String },
      longDescription: { type: String },
      date: { type: Date },
      duration: { type: Number },
      vibe: { type: String },
      country: { type: String },
      region: { type: String },
      type: { type: String },
      depatureLocation: { type: String },
      endLocation: { type: String },
      price: { type: Number },
      image: { type: String }
    }
  }

  firstUpdated(){
    super.firstUpdated()
  }
//if inside a method of event handler add the bind(this) as below
moreInfoHandler(){
    //- create sl-dialog
    console.log('more info handler')
    const dialogEL = document.createElement('sl-dialog')

    // add class name
    dialogEL.className = 'package-dialog'

    //- sl-dialog content (Paste #2)
    const dialogContent = html`
        <style>
            .wrap {
                display: flex;
            }
            .image {
                width: 50%;
            }
            .image img {
                width: 100%;
            }
            .content {
                padding-left: 1em;
            }
            .gender span,
            .length span {
                text-transform: uppercase;
                font-weight: bold;
            }
            .price {
                font-size: 1.5em;
                color: var(--brand-color);
            }
        </style>
        <div class="wrap">

            <div class="content">
                <h1>${this.title}</h1>
                <p>${this.description}</p>
                <p class="price">$${this.price}</p>

                <sl-button @click=${this.addFavHandler.bind(this)}>
                  <sl-icon slot="prefix" name="cart3"></sl-icon>
                  Add to Cart
                </sl-button>
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

  addFavHandler(){
    alert("Add to Favourites")
  }

  render(){    
    return html`
    <style>
      .packages-display{
          display: flex;
          flex-direction: row;
          padding-bottom: 5vh;
        }

      .pckg-span{
          border-radius: 8px;
          text-align: center;
          width: 20vh;
          padding-top: 1vh;
          padding-bottom: 1vh;
          top: 1vh;
          position: relative;
          color: #FFF;
          background-color: #C9E2D1;
          margin-top: 20vh;
        }



      .pckg-img {
          background-image: url("${App.apiBase}/images/${this.image}");
        display: flex;
          justify-content: center;
          align-items: center;    
        background-position: center; 
        background-repeat: no-repeat;
        background-size: cover;
        height: 32vh;
        width: 48vh;
        border-radius: 10px;
        margin-right: 4vh;
        }


      .pckg-disp-txt{
          margin-top: 2vh;
        }

        .pckg-disp-txt h1{
          color: var( --base-txt-color);
          text-align: left;
        }

        .pckg-disp-txt h2{
          font-size: 3vh;
          margin-top: -2vh;
        }

        .pckg-disp-txt p{
          font-size: 2vh;
          margin-top: -1vh;
  }

        
    </style>

    

      <div class = "packages-display">

        <div class = "pckg-img">
          <div class = "pckg-span" @click=${this.moreInfoHandler.bind(this)}>
            <span>${this.vibe}</span>
          </div>
        </div>

        <div class = "pckg-disp-txt">
          <h1><strong>${this.title}</strong></h1>
          <h2><i>${this.country}</i></h2>
          <h1>${this.duration} Nights | ${this.depatureLocation}</h1>
          <p>${this.description}</p>
          <sl-icon-button name="heart-fill" label="Add to Favourites" @click=${this.addFavHandler}></sl-icon-button> 
        </div>

      </div>

    
   `
  }
  
})
