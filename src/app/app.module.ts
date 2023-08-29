import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ServicesComponent } from './services/services.component';
import { ProductsComponent } from './products/products.component';
import { TestmonialsComponent } from './testmonials/testmonials.component';
import { HomeComponent } from './home/home.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { AboutComponent } from './about/about.component';
import { CarouselModule } from 'ngx-bootstrap/carousel';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ServicesComponent,
    ProductsComponent,
    TestmonialsComponent,
    HomeComponent,
    SignUpComponent,
    AboutComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    CarouselModule.forRoot(),
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
