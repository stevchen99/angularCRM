import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TheJob } from './the-job';

@Injectable()
export class JobServService {
  ApiPHP = 'https://le-esp.fr/CRM/';

  constructor(private httpClient: HttpClient) {}

  getJobs(): Observable<TheJob[]> {
    return this.httpClient.get<TheJob[]>(`${this.ApiPHP}/JobRead.php`);
  }

  CreateJob(job: TheJob): Observable<TheJob> {
    return this.httpClient.post<TheJob>(`${this.ApiPHP}/JobCreate.php`, job);
  }

  DeleteJob(job : number) : Observable<TheJob>
  {return this.httpClient.get<TheJob>(`${this.ApiPHP}/JobDelete.php?LeId=${job}`)}

}
