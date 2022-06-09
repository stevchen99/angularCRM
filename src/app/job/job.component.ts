import { Component, OnInit } from '@angular/core';
import { JobServService } from './job-serv.service';
import { TheJob } from './the-job';

@Component({
  selector: 'app-job',
  templateUrl: './job.component.html',
  styleUrls: ['./job.component.css'],
})
export class JobComponent implements OnInit {
  Jobs: TheJob[] = [];

  constructor(private apiService: JobServService) {}

  ngOnInit(): void {}

  getJobs() {
    this.apiService.getJobs().subscribe((tempo: TheJob[]) => {
      this.Jobs = tempo;
      console.log(tempo);
    });
  }
}
