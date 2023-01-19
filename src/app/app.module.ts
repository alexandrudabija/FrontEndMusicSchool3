import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IndexComponent } from './pages/index/index.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { ShopComponent } from './pages/shop/shop.component';
import { CampusComponent } from './pages/campus/campus.component';
import { UserComponent } from './pages/user/user.component';
import { AcademyComponent } from './pages/academy/academy.component';
import { CoursesComponent } from './pages/courses/courses.component';
import { StudioComponent } from './pages/studio/studio.component';
import { arrayObject } from './app-routing.module';
import { Navbar2Component } from './components/navbar2/navbar2.component';
import {SwiperModule } from 'swiper/angular';
import { CartComponent } from './components/cart/cart.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatListModule } from '@angular/material/list';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTableModule } from '@angular/material/table';
import { MatBadgeModule } from '@angular/material/badge';
import {MatSidenavModule} from '@angular/material/sidenav';
import { CartService } from './services/cart.service';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CheckoutComponent } from './pages/checkout/checkout.component';
import { FormsModule } from '@angular/forms';
import { SignUpComponent } from './pages/sign-up/sign-up.component';
import { SignInComponent } from './pages/sign-in/sign-in.component';
import { MatCommonModule } from '@angular/material/core';
import { ProductService } from './services/product.service';
import { UserService } from './services/user.service';
import { OrderService } from './services/order.service';
import {MatSliderModule} from '@angular/material/slider';
import {MatFormFieldModule }from '@angular/material/form-field';
@NgModule({
  declarations: [

    arrayObject,
    AppComponent,
    NavbarComponent,
    FooterComponent,
    ShopComponent,
    CampusComponent,
    UserComponent,
    AcademyComponent,
    CoursesComponent,
    IndexComponent,
    StudioComponent,
    Navbar2Component,
    CartComponent,
    CheckoutComponent,
    SignUpComponent,
    SignInComponent,
    
    
  ],
  imports: [
   BrowserModule,
   AppRoutingModule,
   SwiperModule,
   BrowserAnimationsModule,
   MatSnackBarModule,
   MatSidenavModule,
   MatGridListModule,
   MatMenuModule,
   MatButtonModule,
   MatCardModule,
   MatIconModule,
   MatExpansionModule,
   MatListModule,
   MatToolbarModule,
   MatTableModule, 
   MatBadgeModule,
   HttpClientModule,
   ReactiveFormsModule,
   FormsModule,
   MatCommonModule,
   MatSliderModule,
   MatFormFieldModule
  ],
  providers: [CartService,ProductService,UserService,OrderService,],
  bootstrap: [AppComponent]
})
export class AppModule { }
