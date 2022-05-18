import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { TheCompany } from './the-company';



@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.css']
})

export class ClientComponent implements OnInit {
  selected: any[] | undefined;
  public dataClient: any = [];
  CreEdtUser = false;
  leCompany: TheCompany = { LeId: 0, company: '', descr: '' };

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.getData();
  }  
  

  getData() {
    const url = 'https://le-esp.fr/CRM/Read.php';
    this.http.get(url).subscribe((res) => {
      this.dataClient = res;
      console.log(this.dataClient);
    });
  }

  public edtClient(Theid: number, TheCompany: string, TheDescr: string): void {
    this.leCompany.LeId = Theid;
    this.leCompany.company = TheCompany;
    this.leCompany.descr = TheDescr;

    this.CreEdtUser = true;

  }

  createOuUpdateCompany() {
    if (this.leCompany.LeId == 0) {
      const url = 'https://le-esp.fr/CRM/Create.php';
      var done = {
        company: this.leCompany.company,
        descr: this.leCompany.descr,
      };
      this.http.post(url, done).subscribe((res) => {});
      console.log(done);
    } else {
      const url = 'https://le-esp.fr/CRM/Update.php';
      var UpdDon = {
        LeId: this.leCompany.LeId,
        company: this.leCompany.company,
        descr: this.leCompany.descr,
      };
      this.http.post(url, UpdDon).subscribe((res) => {});
      console.log(UpdDon);
    }
    
    this.CreEdtUser = false;
    this.getData();
  }



}


