import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { EmailService } from 'src/app/service/email.service';
import { CreateTemplateDto } from 'src/app/types/template.type';

@Component({
  selector: 'app-new-template',
  templateUrl: './new-template.component.html',
  styleUrls: ['./new-template.component.css']
})
export class NewTemplateComponent {
  constructor(
    private _fromBuilder : FormBuilder,
    private _emailService : EmailService,
    private _router : Router
  ){}

  loading = true

  newTemplateForm !: FormGroup
  ngOnInit(){
    this.newTemplateForm = this._fromBuilder.group({
      title : ['', Validators.minLength(10)],
      content : ['', Validators.minLength(20)],
    })
    this.loading = false
  }

  submit(){
    if(this.newTemplateForm.valid){
      this.loading = true
      const data : CreateTemplateDto = this.newTemplateForm.getRawValue()
      console.log(data)
      this._emailService.addTemplate(data).subscribe(
        (data) => {
          this._router.navigate(['/template'])
        },
        () => {
          // Notification
        }
      )
    }else {
      // push invalid notification
    }

  }
}
