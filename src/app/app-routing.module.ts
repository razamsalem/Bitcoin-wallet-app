import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ContactIndexComponent } from './pages/contact-index/contact-index.component';
import { ContactDetailsComponent } from './pages/contact-details/contact-details.component';
import { ContactEditComponent } from './pages/contact-edit/contact-edit.component';

const routes: Routes = [
  { path: 'contact/edit/:id', component: ContactEditComponent },
  { path: 'contact/edit', component: ContactEditComponent },
  { path: 'contact/:id', component: ContactDetailsComponent },
  { path: 'contact', component: ContactIndexComponent },
  { path: '', component: HomeComponent }
]

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
