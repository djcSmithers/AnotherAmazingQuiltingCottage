import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LayoutModule } from '@angular/cdk/layout';
import { Routes, RouterModule } from '@angular/router';
import {AngularMaterialModule} from './angular-material.module';
import { HttpClientModule  } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CottageHomeComponent } from './cottage-home/cottage-home.component';
import { CottageOrderComponent } from './cottage-order/cottage-order.component';
import { CottagePriceComponent } from './cottage-price/cottage-price.component';
import { CottageGalleryComponent } from './cottage-gallery/cottage-gallery.component';
import { CottageAboutComponent } from './cottage-about/cottage-about.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { MainNavComponent } from './main-nav/main-nav.component';
import { CottageEmailComponent } from './cottage-email/cottage-email.component';
import { QuiltLoginComponent } from './quilt-login/quilt-login.component';
import { AdminUploadComponent } from './admin-upload/admin-upload.component';



// import { Instafeed } from '../../node_modules/angular-instafeed';


const appRoutes: Routes = [
  { path: '', component: CottageHomeComponent },
  { path: 'home', component: CottageHomeComponent },
  { path: 'order', component: CottageEmailComponent },
  { path: 'pricing', component: CottagePriceComponent },
  { path: 'gallery', component: CottageGalleryComponent },
  { path: 'about', component:  CottageAboutComponent },
  { path: 'upload', component:  AdminUploadComponent },
  { path: 'login', component:  QuiltLoginComponent }
];


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainNavComponent,
    CottageOrderComponent,
    CottagePriceComponent,
    CottageGalleryComponent,
    CottageAboutComponent,
    FooterComponent,
    CottageEmailComponent,
    CottageHomeComponent,
    QuiltLoginComponent,
    AdminUploadComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,LayoutModule,
    RouterModule.forRoot(appRoutes),
    AngularMaterialModule,
    HttpClientModule
    // Instafeed
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
