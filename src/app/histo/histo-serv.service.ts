import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TheHisto } from './the-histo';

@Injectable({
  providedIn: 'root'
})
export class HistoServService {

  ApiPHP = 'https://le-esp.fr/CRM/';


  constructor(private httpclient : HttpClient) { }

getHistos() : Observable<TheHisto[]> {
  return this.httpclient.get<TheHisto[]>(`${this.ApiPHP}/HistoRead.php`)
}

}
