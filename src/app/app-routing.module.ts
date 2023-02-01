import { NgModule } from '@angular/core';
import { HomeComponent } from './home/home.component';
import { RouterModule, Routes } from '@angular/router';
import { NgbPaginationModule, NgbAlertModule } from '@ng-bootstrap/ng-bootstrap';
import { AllItemsComponent } from './all-items/all-items.component';
import { CartComponent } from './cart/cart.component';
import { ItemComponent } from './item/item.component';
import { LoginComponent } from './login/login.component';
import { OneItemComponent } from './one-item/one-item.component';
import { SellerComponent } from './seller/seller.component';
import { SignupComponent } from './signup/signup.component';
import { UserComponent } from './user/user.component';
import { OrderComponent } from './order/order.component';
import { SellerLoginComponent } from './seller-login/seller-login.component';

const routes: Routes = [
  { path:'', redirectTo:'home' , pathMatch:'full' },
  { path:'home', component:HomeComponent},
  { path:'login', component:LoginComponent },
  { path:'signup', component:SignupComponent },
  { path:'item', component:ItemComponent },
  { path:'seller', component:SellerComponent },
  { path:'user', component:UserComponent },
  { path:'all_item', component:AllItemsComponent },
  { path:'one_item/:id', component:OneItemComponent },
  { path:'cart', component:CartComponent },
  { path:'order', component:OrderComponent },
  { path:'sellerlogin', component:SellerLoginComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes),NgbPaginationModule, NgbAlertModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
