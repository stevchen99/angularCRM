import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tbd',
  templateUrl: './tbd.component.html',
  styleUrls: ['./tbd.component.css']
})
export class TbdComponent implements OnInit {
  thedata = arr;
  constructor() { }

  ngOnInit(): void {
  }

}

type MySUer = Array<{
  Id: number;
  Name : string,  
  Color: string
}>

const arr : MySUer = [
  { Id:1 , Name:'test',  Color: 'Blacm'},
  {Id:2 , Name:'tesdfst',  Color: 'Blasdfcm'}
];
