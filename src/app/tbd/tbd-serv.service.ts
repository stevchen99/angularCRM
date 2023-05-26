import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TheTbd } from './the-tbd';

@Injectable({
  providedIn: 'root'
})
export class TbdServService {
  ApiPHP = 'https://le-esp.fr/CRM/';

  constructor(private httpClient: HttpClient) { }

  getTbd():Observable<TheTbd[]> {
    return this.httpClient.get<TheTbd[]>(`${this.ApiPHP}\GetTBD_Sum.php`);
  }
}
