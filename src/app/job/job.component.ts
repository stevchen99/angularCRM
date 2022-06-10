import { Component, OnInit } from '@angular/core';
import { ClientServService } from '../client/client-serv.service';
import { TheCompany } from '../client/the-company';
import { JobServService } from './job-serv.service';
import { TheJob } from './the-job';

@Component({
  selector: 'app-job',
  templateUrl: './job.component.html',
  styleUrls: ['./job.component.css'],
})
export class JobComponent implements OnInit {
  Jobs: TheJob[] = [];
  Clients : TheCompany[] = []
  CreEdtJob = false;
  constructor(private jobService: JobServService,
              private clientservice: ClientServService) {}

  ngOnInit(): void {
    this.getClients()
  }

  getClients() {
    this.clientservice.getClientListe().subscribe((tempo: TheCompany[]) => {
      this.Clients = tempo;
      console.log(tempo);
    });
  }

  getJobs() {
    this.jobService.getJobs().subscribe((tempo: TheJob[]) => {
      this.Jobs = tempo;
      console.log(tempo);
    });
  }

  public crtJob(): void {
    this.CreEdtJob = true;
}
}
