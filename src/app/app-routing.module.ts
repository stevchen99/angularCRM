import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientComponent } from './client/client.component';
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
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
