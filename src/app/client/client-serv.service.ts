import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TheCompany } from './the-company';

@Injectable({
  providedIn: 'root'
})
export class ClientServService {
  ApiPHP = 'https://le-esp.fr/CRM/';
   ApiRead = 'https://le-esp.fr/CRM/Read.php';
   ApiUpdate = 'https://le-esp.fr/CRM/Update.php';
   ApiCreate = 'https://le-esp.fr/CRM/Create.php';
   ApiDelete = 'https://le-esp.fr/CRM/Delete.php';
  constructor(private httpClient : HttpClient) { }

  getClient() : Observable<TheCompany[]>
  {return this.httpClient.get<TheCompany[]>(this.ApiRead)}

  getClientListe() : Observable<TheCompany[]>
  {return this.httpClient.get<TheCompany[]>(`${this.ApiPHP}/GetClient.php`)}

  UpdateClient(client : TheCompany) : Observable<TheCompany>
  {return this.httpClient.post<TheCompany>(this.ApiUpdate, client)}

  CreateClient(client : TheCompany) : Observable<TheCompany>
  {return this.httpClient.post<TheCompany>(this.ApiCreate, client)}

 DeleteClient(client : number) : Observable<TheCompany>
  {return this.httpClient.get<TheCompany>(`${this.ApiDelete}/?LeId=${client}`)}
 

}
