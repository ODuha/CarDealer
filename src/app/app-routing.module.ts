import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';
import { ServicesComponent } from './services/services.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { TestmonialsComponent } from './testmonials/testmonials.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'services', component: ServicesComponent },
  { path: 'products', component: ProductsComponent},
  { path: 'testimonials', component: TestmonialsComponent },
  { path: 'signup', component: SignUpComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
