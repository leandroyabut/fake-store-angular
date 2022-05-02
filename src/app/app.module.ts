import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HeaderComponent} from './header/header.component';
import {FooterComponent} from './footer/footer.component';
import {NotFoundComponent} from './pages/not-found/not-found.component';
import {LandingComponent} from './pages/landing/landing.component';
import {ProductsComponent} from './pages/products/products.component';
import {ProductListingComponent} from './product-listing/product-listing.component';
import {HttpClientModule} from "@angular/common/http";
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {ProductComponent} from './pages/product/product.component';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import {AppIconModule} from "./app-icon.module";
import {FormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NotFoundComponent,
    LandingComponent,
    ProductsComponent,
    ProductListingComponent,
    ProductComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        NgbModule,
        FontAwesomeModule,
        AppIconModule,
        FormsModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
