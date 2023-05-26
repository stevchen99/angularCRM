import { Component, OnInit, ViewChild } from '@angular/core';
import { DatePipe } from '@angular/common';
import { ChartConfiguration, ChartDataset, ChartEvent, ChartType } from 'chart.js';

import { TbdServService } from './tbd-serv.service';
import { TheTbd } from './the-tbd';

@Component({
  selector: 'app-tbd',
  templateUrl: './tbd.component.html',
  styleUrls: ['./tbd.component.css']
})
export class TbdComponent implements OnInit {

  barChartType: ChartType = 'bar';
  barChartData: ChartDataset[] = [];
  temp: any[] = [];
  chartLabels: any[] = [];
  chartOptions = {};

  constructor(private tbdService: TbdServService, private datePipe: DatePipe) { }

  ngOnInit(): void {
    this.getTbdSum()
  }

  getTbdSum(): void {
    this.tbdService.getTbd().subscribe((tempo: TheTbd[]) => {

      this.temp = tempo

      let test = [
      { Raison_Social: 'Mac Do', HeureCum: '140', date: '2022-07-17' },
      { Raison_Social: 'Mac Do', HeureCum: '20', date: '2022-07-18' },
      { Raison_Social: 'Burger King', HeureCum: '100', date: '2022-07-17' },
      { Raison_Social: 'Burger King', HeureCum: '90', date: '2022-07-18' },
      { Raison_Social: 'Burger King', HeureCum: '60', date: '2022-07-18' }]

      // Group Last Four by Type
      let groupedByTypeResult: any[] = test.reduce(function (
        obj: any,
        item: any
      ) {
        let Raison_Social = item.Raison_Social;

        obj[Raison_Social] = obj[Raison_Social] || { label: item.Raison_Social, data: [] };
        obj[Raison_Social].data.push(item.HeureCum);

        return obj;
      },
        {});

      console.log(groupedByTypeResult)
      // Remove key to append to chartData
      let chartData = [];
      for (let type in groupedByTypeResult) {
        chartData.push({
          label: groupedByTypeResult[type].label,
          data: groupedByTypeResult[type].data,
          borderWidth: 1,
          fill: false
        });
      }

      this.barChartData = chartData;

      this.chartLabels = [
        ...new Map(
          test.map((item) => [
            item.date,
            this.datePipe.transform(item.date, 'yyyy-MM-dd'),
          ])
        ).values(),
      ];

      this.chartOptions = {
        responsive: true,
        // We use these empty structures as placeholders for dynamic theming.
        scales: {
          x: {},
          y: {
            min: 10
          }
        },
        plugins: {
          legend: {
            display: true,
          },
        }
      };
      
    }
    )

  }

  // events
  public chartClicked({ event, active }: { event?: ChartEvent, active?: {}[] }): void {
    console.log(event, active);
  }

  public chartHovered({ event, active }: { event?: ChartEvent, active?: {}[] }): void {
    console.log(event, active);
  }
}


