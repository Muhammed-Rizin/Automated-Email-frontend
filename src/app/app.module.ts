import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import {MatProgressBarModule} from '@angular/material/progress-bar';
import { Title } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomeComponent } from './page/home/home.component';
import { TemplateComponent } from './page/template/template.component';
import { NewTemplateComponent } from './page/new-template/new-template.component';
import { AppRoutingModule } from './app-routing.module';
import { SideBarComponent } from './page/side-bar/side-bar.component';
import { ViewTemplateComponent } from './page/view-template/view-template.component';
import { TrashComponent } from './page/trash/trash.component';
import { HistoryComponent } from './page/history/history.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TemplateComponent,
    NewTemplateComponent,
    SideBarComponent,
    ViewTemplateComponent,
    TrashComponent,
    HistoryComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    BrowserAnimationsModule,
    MatProgressBarModule
  ],
  providers: [Title],
  bootstrap: [AppComponent]
})
export class AppModule { }
