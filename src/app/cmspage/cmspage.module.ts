import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// import { AgmCoreModule } from '@agm/core';
import { GoogleMapsModule } from '@angular/google-maps';
import { CmspageRoutingModule } from './cmspage-routing.module';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';


@NgModule({
  declarations: [AboutComponent, ContactComponent],
  imports: [
    CommonModule,
    CmspageRoutingModule,
    // AgmCoreModule,
    GoogleMapsModule
  ]
})
export class CmspageModule { }
