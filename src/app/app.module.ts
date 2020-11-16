import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
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


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomepageComponent,
    BannerComponent,
    PageNotFoundComponent,
    ServiceComponent
  ],
  imports: [
    BrowserModule,
    CmspageModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    NgxIntlTelInputModule,
    // Ng2TelInputModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
