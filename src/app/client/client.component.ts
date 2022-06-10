import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ClientServService } from './client-serv.service';
import { TheCompany } from './the-company';



@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.css']
})

export class ClientComponent implements OnInit {
  selected: any[] | undefined;
  public dataClient: any = [];
  dataclient2: TheCompany[] = []
  CreEdtUser = false;
  leCompany: TheCompany = { LeId: 0, Company: '', descr: '' };

  constructor(private http: HttpClient, private apiService: ClientServService) { }

  ngOnInit(): void {
    this.getData();
    this.getData2();
  }


  getData() {
    const url = 'https://le-esp.fr/CRM/Read.php';
    this.http.get(url).subscribe((res) => {
      this.dataClient = res;
      //8 console.log(this.dataClient);
    });
  }

  getData2() {
    this.apiService.getClient().subscribe((tempo: TheCompany[]) => {
      this.dataclient2 = tempo;
      console.log(tempo);
    })
  }



  public edtClient(Theid: number, TheCompany: string, TheDescr: string): void {
    this.leCompany.LeId = Theid;
    this.leCompany.Company = TheCompany;
    this.leCompany.descr = TheDescr;

    this.CreEdtUser = true;

  }

  public crtClient(): void {
    this.CreEdtUser = true;
  }

  public delClient(thid: number): void {
    this.apiService.DeleteClient(thid).subscribe((res: TheCompany) => {
      this.getData2()
    });
  }

  createOuUpdateCompany() {
    if (this.leCompany.LeId == 0) {
      const url = 'https://le-esp.fr/CRM/Create.php';
      var leCompany2: TheCompany = { LeId: 0, Company: this.leCompany.Company, descr: this.leCompany.descr };
      var done = {
        company: this.leCompany.Company,
        descr: this.leCompany.descr,
      };
      this.apiService.CreateClient(leCompany2).subscribe((res: TheCompany) => {
        this.getData2()
      });
    } else {
      const url = 'https://le-esp.fr/CRM/Update.php';
      var UpdDon = {
        LeId: this.leCompany.LeId,
        company: this.leCompany.Company,
        descr: this.leCompany.descr,
      };

      var leCompany2: TheCompany = { LeId: this.leCompany.LeId, Company: this.leCompany.Company, descr: this.leCompany.descr };
      this.apiService.UpdateClient(leCompany2).subscribe((res: TheCompany) => {
        this.getData2()
      }
      );
    }
    this.CreEdtUser = false;
  }



}


