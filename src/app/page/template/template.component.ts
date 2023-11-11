import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { EmailService } from 'src/app/service/email.service';
import { TemplateDto } from 'src/app/types/template.type';

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styleUrls: ['./template.component.css']
})
export class TemplateComponent {
  templates : TemplateDto[] = []
  loading = true
  constructor(
    private _emailService : EmailService,
    private _router : Router
  ){}
  ngOnInit() {
    this._emailService.getTemplate().subscribe(
      (data) => {this.templates = data, this.loading = false},
      () => {}
    )
  }

  viewTemplate(id: string){
    this._router.navigate([`/view/${id}`])
  }
}
