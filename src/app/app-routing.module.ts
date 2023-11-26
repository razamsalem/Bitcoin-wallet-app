import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ContactIndexComponent } from './pages/contact-index/contact-index.component';
import { ContactDetailsComponent } from './pages/contact-details/contact-details.component';
import { ContactEditComponent } from './pages/contact-edit/contact-edit.component';
import { contactResolver } from './resolvers/contact.resolver';
import { StatsComponent } from './pages/stats/stats.component';
import { TransfersComponent } from './pages/transfers/transfers.component';

const routes: Routes = [
  { path: 'contact/edit/:id', component: ContactEditComponent, resolve: { contact: contactResolver } },
  { path: 'contact/edit', component: ContactEditComponent },
  {
    path: 'contact/:id',
    component: ContactDetailsComponent,
    resolve: { contact: contactResolver }
  },
  { path: 'contact', component: ContactIndexComponent },
  { path: 'stats', component: StatsComponent },
  { path: 'transfers', component: TransfersComponent },
  { path: '', component: HomeComponent }
]

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
