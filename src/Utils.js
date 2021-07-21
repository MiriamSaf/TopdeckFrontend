import gsap from 'gsap'

class Utils {

  isMobile(){
    let viewportWidth = window.innerWidth
    if(viewportWidth <= 768){
      return true
    }else{
      return false
    }
  }


  pageIntroAnim(){
    const pageContent = document.querySelector('.page-content')
    if(!pageContent) return
    gsap.fromTo(pageContent, {opacity: 0, y: -12}, {opacity: 1, y: 0, ease: 'power2.out', duration: 0.3})
  }

  //x - L
  OurStoryAnim(){
    const heroImg = document.querySelector('#ourstory-hero-section')
    const ourstoryh1 = document.querySelector('.ourstory-hero-h1')
    gsap.fromTo(heroImg, {opacity: 0, x: -12}, {opacity: 1, x: 1, ease: 'power2.out', duration: 2.0})
    gsap.fromTo(ourstoryh1, {opacity: 0, y:-10}, {opacity: 1, y: 1, ease: 'powerin', duration: 1},"-=1.0")
  }

  FindUsAnim(){
    const heroImg = document.querySelector('#findus-hero-section')
    const heroh1 = document.querySelector('.findus-hero-h1')
    gsap.fromTo(heroImg, {opacity: 0, x: -12}, {opacity: 1, x: 1, ease: 'power2.out', duration: 2.0})
    gsap.fromTo(heroh1, {opacity: 0, y:-10}, {opacity: 1, y: 1, ease: 'powerin', duration: 1},"-=1.0")
  }

  AddTourAnim(){
    const heroImg = document.querySelector('#packg-hero-section')
    const heroh1 = document.querySelector('.pckg-hero-h1')
    gsap.fromTo(heroImg, {opacity: 0, x: -12}, {opacity: 1, x: 1, ease: 'power2.out', duration: 2.0})
    gsap.fromTo(heroh1, {opacity: 0, y:-10}, {opacity: 1, y: 1, ease: 'powerin', duration: 1},"-=1.0")
  }

  HomePageAnim(){
    const heroImg = document.querySelector('#home-hero-section')
    const heroh3 = document.querySelector('#home-hero-text h3')
    const heroh1 = document.querySelector('#home-hero-text h1')
    gsap.fromTo(heroImg, {opacity: 0, x: -1}, {opacity: 1, x: 1, ease: 'power2.out', duration: 2.0})
    gsap.fromTo(heroh1, {opacity: 0, y:-15}, {opacity: 1, y: 0, ease: 'powerin', duration: 1},"-=1.0")
    gsap.fromTo(heroh3, {opacity: 0, y:-20}, {opacity: 1, y: 1, ease: 'powerin', duration: 1},"-=1.8")
    
  }
}

export default new Utils()