import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
 
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { ProductDisplayComponent } from './product-display/product-display.component';
import { AddToCartComponent } from './add-to-cart/add-to-cart.component';
import { CartComponent } from './cart/cart.component';
import { SearchProductsComponent } from "./search-products/search-products.component";
 
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    ProductDisplayComponent,
    AddToCartComponent,
    CartComponent,
  ],
  imports: [
    BrowserModule,
    SearchProductsComponent
],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
 
 