import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// import { AgmCoreModule } from '@agm/core';
import { CmspageModule } from './cmspage/cmspage.module';
import { AppRoutingModule } from './app-routing.module';
// import {Ng2TelInputModule} from 'ng2-tel-input';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomepageComponent } from './homepage/homepage.component';
import { BannerComponent } from './banner/banner.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ServiceComponent } from './service/service.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxIntlTelInputModule } from 'ngx-intl-tel-input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ContactusComponent } from './contactus/contactus.component';
import { GoogleMapsModule } from '@angular/google-maps';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomepageComponent,
    BannerComponent,
    PageNotFoundComponent,
    ServiceComponent,
    ContactusComponent
  ],
  imports: [
    BrowserModule,
    // AgmCoreModule.forRoot({
    //   apiKey: 'AIzaSyBQ1A0VGQKW73vUVXDlX_eIXrzo-t-eGDY'
    // }),
    CmspageModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    NgxIntlTelInputModule,
    // Ng2TelInputModule,
    BrowserAnimationsModule,
    GoogleMapsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
