import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './components/cart/cart.component';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { LoginComponent } from './components/login/login.component';
import { PlaceOrderComponent } from './components/place-order/place-order.component';
import { ResetPasswordComponent } from './components/reset-password/reset-password.component';

const routes: Routes = [
  {path:'', component : LoginComponent},
  {path:'homePage', component : HomePageComponent},
  {path:'cart', component : CartComponent},
  {path:'placeOrder', component : PlaceOrderComponent},
  {path:'login', component : LoginComponent},
  {path:'forgotPassword', component : ForgotPasswordComponent},
  {path:'resetPassword', component : ResetPasswordComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


