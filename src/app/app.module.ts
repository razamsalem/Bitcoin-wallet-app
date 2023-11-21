import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app-root/app.component';
import { ContactFilterComponent } from './cmps/contact-filter/contact-filter.component';
import { ContactListComponent } from './cmps/contact-list/contact-list.component';
import { ContactPreviewComponent } from './cmps/contact-preview/contact-preview.component';
import { InputComponent } from './cmps/input/input.component';
import { HomeComponent } from './pages/home/home.component';
import { ContactIndexComponent } from './pages/contact-index/contact-index.component';
import { ContactEditComponent } from './pages/contact-edit/contact-edit.component';
import { ContactDetailsComponent } from './pages/contact-details/contact-details.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    ContactFilterComponent,
    ContactListComponent,
    ContactPreviewComponent,
    InputComponent,
    HomeComponent,
    ContactIndexComponent,
    ContactEditComponent,
    ContactDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
