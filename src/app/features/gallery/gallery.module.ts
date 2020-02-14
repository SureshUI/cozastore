import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { GalleryRoutingModule, GalleryRoutingComponents } from './gallery-routing.module';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { FormsModule } from '@angular/forms';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';



@NgModule({
  declarations: [GalleryRoutingComponents],
  imports: [
    CommonModule,
    HttpClientModule,
    GalleryRoutingModule,
    Ng2SearchPipeModule,
    FormsModule,
    InfiniteScrollModule
  ]
})
export class GalleryModule { }
