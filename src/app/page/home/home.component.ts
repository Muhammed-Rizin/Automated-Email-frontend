import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { EmailService } from 'src/app/service/email.service';
import { Email } from 'src/app/types/email.type';
import { TemplateDto } from 'src/app/types/template.type';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  templates : TemplateDto[] = []
  emails : Email[] = []
  loading = true
  constructor(
    private _emailService : EmailService,
    private _router : Router
  ){}
  ngOnInit() {
    this._emailService.getTemplate().subscribe(
      (data) => {
        this.templates = data
      },
      () => {}
    )

    this._emailService.loadHistory().subscribe(
      (data) => {
        this.emails = data
        this.loading = false
      }
    )
  }

  viewTemplate(id: string){
    this._router.navigate([`/view/${id}`])
  }
}
