import { Component, OnInit } from '@angular/core';
import { HistoServService } from './histo-serv.service';
import { TheHisto } from './the-histo';

@Component({
  selector: 'app-histo',
  templateUrl: './histo.component.html',
  styleUrls: ['./histo.component.css']
})
export class HistoComponent implements OnInit {

  Histos : TheHisto[] = []

  constructor(private histoService : HistoServService) { }

  ngOnInit(): void {
    this.getHistos()
  }

getHistos() {
  return this.histoService.getHistos().subscribe((tempo : TheHisto[]) => {
    this.Histos = tempo
    console.log(tempo)
  })
}

}
