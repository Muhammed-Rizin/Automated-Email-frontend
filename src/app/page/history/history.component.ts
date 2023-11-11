import { Component } from '@angular/core';
import { EmailService } from 'src/app/service/email.service';
import { Email } from 'src/app/types/email.type';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css']
})
export class HistoryComponent {
  loading = true
  emails : Email[] = [] 

  constructor(
    private _emailService : EmailService
  ){}

  ngOnInit() {
    this._emailService.loadHistory().subscribe(
      (data) => {
        this.emails = data
        this.loading = false
      }
    )
  }
}
