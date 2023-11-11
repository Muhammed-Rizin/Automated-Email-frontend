import { ThisReceiver } from '@angular/compiler';
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EmailService } from 'src/app/service/email.service';
import { TemplateDto } from 'src/app/types/template.type';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-view-template',
  templateUrl: './view-template.component.html',
  styleUrls: ['./view-template.component.css']
})
export class ViewTemplateComponent {
  id : string
  to !: string
  loading : boolean = true
  error = false
  constructor(
    private _emailService : EmailService,
    private _route : ActivatedRoute,
    private _router : Router,
    private _title : Title
  ){
    this.id = this._route.snapshot.params['id']
  }

  template !: TemplateDto
  ngOnInit() {
    this._emailService.getTemplateById(this.id).subscribe(
      (data) => {
        this.template = data;
        this.loading = false
        this._title.setTitle(data.title)
      },
      () => {}
    )
  }

  deleteTemplate(id : string){
    // confirmation
    this.loading = true
    this._emailService.deleteTemplate(id).subscribe(()=> {
      this._router.navigate(['/template'])
      // notification
    },() => {
      // send notification
    })
  }

  sendEmail(){
    if(this.to){
    this.loading = true
    this.error = false
      this._emailService.newEmail(this.to, this.id).subscribe(
        () => {
          // Notification
        },
        () => {
      this.error = true
        }
        )
        this.loading = false
        this.to = ''
      }else {
// notification
    }
  }

  permanentlyDeleteTemplate(id : string) {
    this.loading = true
    this._emailService.permanentlyDeleteTemplate(id).subscribe(
      () => {
        this._router.navigate(['/trash'])
      // notification
      },
      () => {
        // notification 
      }
    )
  }

  recoverTemplate(id : string){
    this._emailService.recoverTemplate(id).subscribe(
      () => {
        this._router.navigate(['/template'])
      // notification
      },
      () => {
        // notification
      }
    )
  }
}
