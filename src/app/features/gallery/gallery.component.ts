import { Component, OnInit } from '@angular/core';
import { Ng2SearchPipeModule } from 'ng2-search-filter';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

   searchText;
   modalBody = [];
   modalScrollDistance = 2;
   modalScrollThrottle = 50;
   

   imageSet = [
    { title: 'Esprit Ruffle Shirt', imgSrc: './assets/images/static/product-01.jpg', description: 'Esprit Ruffle Shirt for women' ,category:'Women'},
    { title: 'Herschel supply', imgSrc: './assets/images/static/product-02.jpg' , description: 'Herschel supply for women',category:'Women'},
    { title: 'Only Check Trouser', imgSrc: './assets/images/static/product-03.jpg' , description: 'Only Check Trouser for men',category:'Men'},
    { title: 'Classic Trench Coat', imgSrc: './assets/images/static/product-04.jpg' , description: 'Classic Trench Coat for women' ,category:'Women'},
    { title: 'Front Pocket Jumper', imgSrc: './assets/images/static/product-05.jpg' , description: 'Front Pocket Jumper for women' ,category:'Women'},
    { title: 'Vintage Inspired Classic', imgSrc: './assets/images/static/product-06.jpg' , description: 'Vintage Inspired Classic for men',category:'Men'},
    { title: 'Shirt in Stretch Cotton', imgSrc: './assets/images/static/product-07.jpg' , description: 'Shirt in Stretch Cotton for women',category:'Women'},
    { title: 'Pieces Metallic Printed', imgSrc: './assets/images/static/product-08.jpg' , description: 'Pieces Metallic Printed for women',category:'Women'},
    { title: 'Converse All Star Hi Plimsolls', imgSrc: './assets/images/static/product-09.jpg' , description: 'Converse All Star Hi Plimsolls for women',category:'Women'},
    { title: 'Femme T-Shirt In Stripe', imgSrc: './assets/images/static/product-10.jpg' , description: 'Femme T-Shirt In Stripe for women',category:'Women'},
    { title: 'Herschel supply', imgSrc: './assets/images/static/product-11.jpg' , description: 'Herschel supply for men',category:'Men'},
    { title: 'Herschel supply Belt', imgSrc: './assets/images/static/product-12.jpg' , description: 'Herschel supply Belt for men',category:'Men'},
    { title: 'T-Shirt with Sleeve', imgSrc: './assets/images/static/product-13.jpg' , description: 'T-Shirt with Sleeve for women',category:'Women'},
    { title: 'Pretty Little Thing', imgSrc: './assets/images/static/product-14.jpg' , description: 'Pretty Little Thing for women',category:'Women'},
    { title: 'Mini Silver Mesh Watch', imgSrc: './assets/images/static/product-15.jpg' , description: 'Mini Silver Mesh Watch for men',category:'Men'},
    { title: 'Square Neck Back', imgSrc: './assets/images/static/product-16.jpg' , description: 'Square Neck Back for women',category:'Women'},
  ];


  onModalScrollDown () {
     this.imageSet.forEach(hero => {
      this.imageSet.push(hero)
   });
  }


}
