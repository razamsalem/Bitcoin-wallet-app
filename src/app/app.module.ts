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
import { FormsModule } from '@angular/forms';
import { StatsComponent } from './pages/stats/stats.component';
import { NgChartsModule } from 'ng2-charts';
import { LineComponent } from './cmps/line/line.component';
import { BarComponent } from './cmps/bar/bar.component';
import { RadarComponent } from './cmps/radar/radar.component';
import { HeaderComponent } from './cmps/header/header.component';
import { ProfileHeaderComponent } from './cmps/profile-header/profile-header.component';
import { LoginComponent } from './pages/login/login.component';
import { BarComponent2 } from './cmps/bar2/bar2.component';

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
    ContactDetailsComponent,
    StatsComponent,
    LineComponent,
    BarComponent,
    BarComponent2,
    RadarComponent,
    HeaderComponent,
    ProfileHeaderComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgChartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
