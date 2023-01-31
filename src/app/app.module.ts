import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { SellerComponent } from './seller/seller.component';
import { UserComponent } from './user/user.component';
import { ItemComponent } from './item/item.component';
import { FilterPipe } from './Pipes/filter.pipe';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AllItemsComponent } from './all-items/all-items.component';
import { OneItemComponent } from './one-item/one-item.component';
import { CartComponent } from './cart/cart.component';
import { HomeComponent } from './home/home.component';
import { NavComponent } from './nav/nav.component';
import { OrderComponent } from './order/order.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    SellerComponent,
    UserComponent,
    ItemComponent,
    FilterPipe,
    AllItemsComponent,
    OneItemComponent,
    CartComponent,
    HomeComponent,
    NavComponent,
    OrderComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgbModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
