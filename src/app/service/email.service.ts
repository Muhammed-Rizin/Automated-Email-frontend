import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CreateTemplateDto, TemplateDto } from '../types/template.type';
import { Email } from '../types/email.type';

const httpOptions = {
  headers: new HttpHeaders({
    'content-Type': 'application/json',
  }),
};

@Injectable({
  providedIn: 'root'
})
export class EmailService {
  apiUrl = 'http://localhost:5000'
  constructor(
    private _http : HttpClient
  ) { }

  getTemplate() : Observable<TemplateDto[]> {
    return this._http.get<TemplateDto[]>(`${this.apiUrl}/template/get_templates`, httpOptions)
  }
  
  addTemplate(data: CreateTemplateDto) : Observable<{message : string}>{
    return this._http.post<{message : string}>(`${this.apiUrl}/template/add_template`, {data}, httpOptions)
  }
  
  newEmail (to : string , id : string): Observable<{message : string}> {
    return this._http.post<{message : string}>(`${this.apiUrl}/email/send`, {to, id}, httpOptions)
  }

  deleteTemplate(id : string): Observable<{message : string}> {
    return this._http.delete<{message : string}>(`${this.apiUrl}/template/delete_template?id=${id}`, httpOptions)
  }

  getTemplateById(id :string) : Observable<TemplateDto>{
    return this._http.get<TemplateDto>(`${this.apiUrl}/template/get_template?id=${id}`, httpOptions)
  }

  getTemplateFromTrash() : Observable<TemplateDto[]>{
    return this._http.get<TemplateDto[]>(`${this.apiUrl}/template/get_template_trash`, httpOptions)
  }

  permanentlyDeleteTemplate(id : string) {
    return this._http.delete<{message : string}>(`${this.apiUrl}/template/delete_from_trash?id=${id}`, httpOptions)
  }

  recoverTemplate(id : string) {
    return this._http.patch<{message : string}>(`${this.apiUrl}/template/recover?id=${id}`, httpOptions)
  }
  
  loadHistory() : Observable<Email[]>{
    return this._http.get<Email[]>(`${this.apiUrl}/email/history`, httpOptions)
  }
}
