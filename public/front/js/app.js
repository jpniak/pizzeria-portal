import { Product } from './components/Product.js';
import { Cart } from './components/Cart.js';
import { Booking } from './components/Booking.js';
import { select, settings, classNames } from './settings.js';

const app = {
  initMenu: function () {
    const thisApp = this;

    //console.log('thisApp.data:', thisApp.data);

    for (let productData in thisApp.data.products) {
      new Product(thisApp.data.products[productData].id, thisApp.data.products[productData]);
    }
  },

  initData: function () {
    const thisApp = this;

    thisApp.data = {};

    const url = settings.db.url + '/' + settings.db.product;

    fetch(url)
      .then(function (rawResponse) {
        return rawResponse.json();
      })
      .then(function (parsedResponse) {
        console.log('parsed response: ', parsedResponse);
        /* save parsedResponse as thisApp.data.products */
        thisApp.data.products = parsedResponse;
        /* execute initMenu method*/
        thisApp.initMenu();
      });

    console.log('thisApp.data: ', JSON.stringify(thisApp.data));


  },

  init: function () {
    const thisApp = this;
    console.log('*** App starting ***');
    console.log('thisApp:', thisApp);
    // console.log('classNames:', classNames);
    console.log('settings:', settings);
    //console.log('templates:', templates);
    
    //thisApp.initPages();
    //thisApp.initData();
    //thisApp.initCart();
    //thisApp.initMenu();
  },

  initCart: function () {
    const thisApp = this;

    const cartElem = document.querySelector(select.containerOf.cart);
    thisApp.cart = new Cart(cartElem);

    thisApp.productList = document.querySelector(select.containerOf.menu);

    thisApp.productList.addEventListener('add-to-cart', function (event) {
      app.cart.add(event.detail.product);

    });
  },
  
  initPages: function(){
    const thisApp = this;
    thisApp.pages = Array.from(document.querySelector(select.containerOf.pages).children);
    thisApp.navLinks = Array.from(document.querySelectorAll(select.nav.links));
    
    /* */
    let pagesMatchingHash = [];

    if(window.location.hash.length > 2) {
      const idFromHash = window.location.hash.replace('#/', '');

      pagesMatchingHash = thisApp.pages.filter(function(page) {
        return page.id == idFromHash;
      });
    }
    
    thisApp.activatePage(pagesMatchingHash.length ? pagesMatchingHash[0].id : thisApp.pages[0].id);
    

    
    /* poniższy wariant nie działa, szukam błędu
    
    if (window.location.hash.length > 2){
      const idFromHash = window.location.hash.replace('#/', '');
      
      for(let page of thisApp.pages){
        if(page.id == idFromHash){
          pagesMatchingHash.push(page);
        }
      }
      
    } 
    
    if (pagesMatchingHash){
      thisApp.activatePage(pagesMatchingHash[0].id);
    } else {
      thisApp.activatePage(thisApp.pages[0].id);
    }; */
    
    for(let link of thisApp.navLinks){
      link.addEventListener('click', function(event){
        const clickedElement = this;
        event.preventDefault();
        
        /* get page id from href and replace # to empty string */
        const id = clickedElement.getAttribute('href').replace('#','');
        
        /* activate page */
        thisApp.activatePage(id);        
      });
    }
  },
  
  activatePage: function(pageId) {
    const thisApp = this;
    
    for (let navLink of thisApp.navLinks){
      navLink.classList.toggle(classNames.nav.active, navLink.getAttribute('href') == '#' + pageId);
    }
    
    for (let page of thisApp.pages){
      page.classList.toggle(classNames.pages.active, page.id == pageId);
    }
    
    window.location.hash = '#/' + pageId;
    
  },
  
  initBooking: function() {
    const thisApp = this;

    const booking = document.querySelector(select.containerOf.booking);
    thisApp.booking = new Booking(booking);
  },
  
  

};
app.init();
app.initPages();
app.initData();
app.initCart();
app.initBooking();


