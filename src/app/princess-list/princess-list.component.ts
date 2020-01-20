import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-princess-list',
  templateUrl: './princess-list.component.html',
  styleUrls: ['./princess-list.component.css']
})
export class PrincessListComponent implements OnInit {

  princesses = [
    {name: 'Blanche Neige', year: 1938},
    {name: 'Cendrillon', year: 1950},
    {name: 'Josselin', year: 2019},
    {name: 'Jules', year: 2020}
  ];

  constructor() { }

  ngOnInit() {
  }

}