import { Component, OnInit } from '@angular/core';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
// const nisPackage = require('../../../../package.json');


@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {

  //nisVersion = nisPackage.dependencies['ngx-infinite-scroll'];
  constructor() { }

  ngOnInit() {
  }

  
  public galleryList  =[
    {
      galid: 'gal01',
      galname: 'Esprit Ruffle Shirt',
      description: 'Bootstrap depends on jQuery and Popper.js libraries, and if you dont .'
    },
    {
      galid: 'gal02',
      galname: 'Herschel supply',
      description: 'Bootstrap depends on jQuery and Popper.js libraries, and if you dont .'
    },
    {
      galid: 'gal03',
      galname: 'Only Check Trouser',
      description: 'Bootstrap depends on jQuery and Popper.js libraries, and if you dont .'
    },
    {
      galid: 'gal04',
      galname: 'Classic Trench Coat',
      description: 'Bootstrap depends on jQuery and Popper.js libraries, and if you dont .'
    },
    {
      galid: 'gal05',
      galname: 'Front Pocket Jumper',
      description: 'Bootstrap depends on jQuery and Popper.js libraries, and if you dont .'
    }
  ]

   searchText;
   modalBody = [];
   modalScrollDistance = 2;
   modalScrollThrottle = 50;

   heroes = [
    { title: 11, imgSrc: './assets/images/static/product-01.jpg', description: 'India' ,category:'Women'},
    { title: 12, imgSrc: './assets/images/static/product-02.jpg' , description: 'USA',category:'Women'},
    { title: 13, imgSrc: './assets/images/static/product-03.jpg' , description: 'UK',category:'Men'},
    { title: 14, imgSrc: './assets/images/static/product-04.jpg' , description: 'Canada' ,category:'Women'},
    { title: 15, imgSrc: './assets/images/static/product-05.jpg' , description: 'Russia' ,category:'Women'},
    { title: 16, imgSrc: './assets/images/static/product-06.jpg' , description: 'China',category:'Men'},
    { title: 17, imgSrc: './assets/images/static/product-07.jpg' , description: 'Germany',category:'Women'},
    { title: 18, imgSrc: './assets/images/static/product-08.jpg' , description: 'Hong Kong',category:'Women'},
    { title: 19, imgSrc: './assets/images/static/product-09.jpg' , description: 'South Africa',category:'Women'},
    { title: 20, imgSrc: './assets/images/static/product-10.jpg' , description: 'Sri Lanka',category:'Women'},
    { title: 20, imgSrc: './assets/images/static/product-11.jpg' , description: 'Sri Lanka',category:'Men'},
    { title: 20, imgSrc: './assets/images/static/product-12.jpg' , description: 'Sri Lanka',category:'Men'},
    { title: 20, imgSrc: './assets/images/static/product-13.jpg' , description: 'Sri Lanka',category:'Women'},
    { title: 20, imgSrc: './assets/images/static/product-14.jpg' , description: 'Sri Lanka',category:'Women'},
    { title: 20, imgSrc: './assets/images/static/product-15.jpg' , description: 'Sri Lanka',category:'Men'},
    { title: 20, imgSrc: './assets/images/static/product-16.jpg' , description: 'Sri Lanka',category:'Women'},


    { title: 11, imgSrc: './assets/images/static/product-01.jpg', description: 'India' ,category:'Women'},
    { title: 12, imgSrc: './assets/images/static/product-02.jpg' , description: 'USA',category:'Women'},
    { title: 13, imgSrc: './assets/images/static/product-03.jpg' , description: 'UK',category:'Men'},
    { title: 14, imgSrc: './assets/images/static/product-04.jpg' , description: 'Canada' ,category:'Women'},
    { title: 15, imgSrc: './assets/images/static/product-05.jpg' , description: 'Russia' ,category:'Women'},
    { title: 16, imgSrc: './assets/images/static/product-06.jpg' , description: 'China',category:'Men'},
    { title: 17, imgSrc: './assets/images/static/product-07.jpg' , description: 'Germany',category:'Women'},
    { title: 18, imgSrc: './assets/images/static/product-08.jpg' , description: 'Hong Kong',category:'Women'},
    { title: 19, imgSrc: './assets/images/static/product-09.jpg' , description: 'South Africa',category:'Women'},
    { title: 20, imgSrc: './assets/images/static/product-10.jpg' , description: 'Sri Lanka',category:'Women'},
    { title: 20, imgSrc: './assets/images/static/product-11.jpg' , description: 'Sri Lanka',category:'Men'},
    { title: 20, imgSrc: './assets/images/static/product-12.jpg' , description: 'Sri Lanka',category:'Men'},
    { title: 20, imgSrc: './assets/images/static/product-13.jpg' , description: 'Sri Lanka',category:'Women'},
    { title: 20, imgSrc: './assets/images/static/product-14.jpg' , description: 'Sri Lanka',category:'Women'},
    { title: 20, imgSrc: './assets/images/static/product-15.jpg' , description: 'Sri Lanka',category:'Men'},
    { title: 20, imgSrc: './assets/images/static/product-16.jpg' , description: 'Sri Lanka',category:'Women'}

    // { title: 11, imgSrc: './assets/images/static/product-01.jpg', description: 'India' ,category:'Women'},
    // { title: 12, imgSrc: './assets/images/static/product-02.jpg' , description: 'USA',category:'Women'},
    // { title: 13, imgSrc: './assets/images/static/product-03.jpg' , description: 'UK',category:'Men'},
    // { title: 14, imgSrc: './assets/images/static/product-04.jpg' , description: 'Canada' ,category:'Women'},
    // { title: 15, imgSrc: './assets/images/static/product-05.jpg' , description: 'Russia' ,category:'Women'},
    // { title: 16, imgSrc: './assets/images/static/product-06.jpg' , description: 'China',category:'Men'},
    // { title: 17, imgSrc: './assets/images/static/product-07.jpg' , description: 'Germany',category:'Women'},
    // { title: 18, imgSrc: './assets/images/static/product-08.jpg' , description: 'Hong Kong',category:'Women'},
    // { title: 19, imgSrc: './assets/images/static/product-09.jpg' , description: 'South Africa',category:'Women'},
    // { title: 20, imgSrc: './assets/images/static/product-10.jpg' , description: 'Sri Lanka',category:'Women'},
    // { title: 20, imgSrc: './assets/images/static/product-11.jpg' , description: 'Sri Lanka',category:'Men'},
    // { title: 20, imgSrc: './assets/images/static/product-12.jpg' , description: 'Sri Lanka',category:'Men'},
    // { title: 20, imgSrc: './assets/images/static/product-13.jpg' , description: 'Sri Lanka',category:'Women'},
    // { title: 20, imgSrc: './assets/images/static/product-14.jpg' , description: 'Sri Lanka',category:'Women'},
    // { title: 20, imgSrc: './assets/images/static/product-15.jpg' , description: 'Sri Lanka',category:'Men'},
    // { title: 20, imgSrc: './assets/images/static/product-16.jpg' , description: 'Sri Lanka',category:'Women'}


  ];

  array = [];
  sum = 100;

  onModalScrollDown () {
    //this.modalTitle = 'updated on ' + (new Date()).toString();
    //this.modalBody += modalText;
    this.heroes.splice(this.heroes.length - 1,0,this.heroes);
    //this.heroes.splice(0,30)
    console.log(this.heroes);
  }


  onScrollDown () {
    console.log('scrolled!!');

    // add another 20 items
    const start = this.sum;
    this.sum += 20;
    for (let i = start; i < this.sum; ++i) {
      this.array.push(i);
    }
  }
  
  
  
  


}
