import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
// import { CmsPageComponent } from './cmspage/cmspage.component';
// import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './cmspage/about/about.component';
import { ServiceComponent } from './service/service.component';

const routes: Routes = [
  {path: '', redirectTo: '', pathMatch: 'full'},
  {path: 'cmspage/about', component: AboutComponent},
  {path: 'service', component: ServiceComponent},
  {path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
