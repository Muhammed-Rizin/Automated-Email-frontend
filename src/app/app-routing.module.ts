import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './page/home/home.component';
import { TemplateComponent } from './page/template/template.component';
import { NewTemplateComponent } from './page/new-template/new-template.component';
import { ViewTemplateComponent } from './page/view-template/view-template.component';
import { TrashComponent } from './page/trash/trash.component';
import { HistoryComponent } from './page/history/history.component';

const routes: Routes = [
  {path : '', component : HomeComponent, title :'Dashboard'},
  {path : 'template', component : TemplateComponent, title :'Templates'},
  {path : 'new', component : NewTemplateComponent, title :'New template'},
  {path : 'view/:id', component : ViewTemplateComponent, title : 'Template'},
  {path : 'trash', component : TrashComponent, title : 'Trash'},
  {path : 'history', component : HistoryComponent, title : 'Application history'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }