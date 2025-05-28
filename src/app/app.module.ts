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
import { DirectiveExamplesComponent } from "./directive-examples/directive-examples.component";
import { BgColorDirective } from './bg-color.directive';
import { SearchArrPipe } from "./search-arr.pipe";
import { TwoWayDataBindingComponent } from './two-way-data-binding/two-way-data-binding.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EditProductComponent } from './edit-product/edit-product.component';
import { RegisterTemplateComponent } from './register-template/register-template.component';
import { RegisterModelComponent } from './register-model/register-model.component';
import { CheckEmailPatternDirective } from './check-email-pattern.directive';
 
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    ProductDisplayComponent,
    AddToCartComponent,
    CartComponent,
    BgColorDirective,
    DirectiveExamplesComponent,
    SearchProductsComponent,
    SearchArrPipe,
    TwoWayDataBindingComponent,
    EditProductComponent,
    RegisterTemplateComponent,
    RegisterModelComponent,
    CheckEmailPatternDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
 
 