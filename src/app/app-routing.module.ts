import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientComponent } from './client/client.component';
import { HistoComponent } from './histo/histo.component';
import { JobComponent } from './job/job.component';
import { TbdComponent } from './tbd/tbd.component';

const routes: Routes = [
  {
    path: 'tbd',
    component: TbdComponent,
  },
  {
    path: 'client',
    component: ClientComponent,
  },
  {
    path: 'job',
    component: JobComponent,
  },
  {
    path: 'histo',
    component: HistoComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
