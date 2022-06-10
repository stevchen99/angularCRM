import { Component, OnInit } from '@angular/core';
import { empty } from 'rxjs';
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
  Client = {} as TheCompany ;
  CreEdtJob = false;
  leJob: TheJob = { IdTache: 0, IdCLient: this.Client,  Libelle: '', HeureInit : 0, HeureActu:0 };

  constructor(private jobService: JobServService,
              private clientservice: ClientServService) {}

  ngOnInit(): void {
    this.getClients()
    this.getJobs()
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

public delJob(thid: number): void {
  this.jobService.DeleteJob(thid).subscribe((res: TheJob) => {
    this.getJobs()
  });
}

createOuUpdateJob() {
  if (this.leJob.IdTache == 0) {
   
    var lejob: TheJob = { IdTache: 0, IdCLient: this.leJob.IdCLient,  Libelle: this.leJob.Libelle, HeureInit : this.leJob.HeureInit, HeureActu :0 };
   console.log(lejob)
    this.jobService.CreateJob(lejob).subscribe((res: TheJob) => {
      this.getJobs()
    });
  } else {  
  

    // var leCompany2: TheCompany = { LeId: this.leCompany.LeId, Company: this.leCompany.Company, descr: this.leCompany.descr };
    // this.apiService.UpdateClient(leCompany2).subscribe((res: TheCompany) => {
    //   this.getJobs()
    // }
    // );
  }
  this.CreEdtJob = false;
}

}
