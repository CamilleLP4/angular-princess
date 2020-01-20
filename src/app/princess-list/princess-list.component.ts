import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-princess-list',
  templateUrl: './princess-list.component.html',
  styleUrls: ['./princess-list.component.css']
})
export class PrincessListComponent implements OnInit {

  princesses = [
    {name: 'Blanche Neige', year: 1938, imageUrl:'https://www.teteamodeler.com/images/assets/8508bc69207e232f9f94de031d61c85a.jpg', like: 0},
    {name: 'Cendrillon', year: 1950, imageUrl:'https://www.teteamodeler.com/images/assets/6626a421eda3a7020e74b6d33fce244e.jpg', like: 0},
    {name: 'Josselin', year: 2019, imageUrl:'https://cdn.discordapp.com/attachments/631565747281199104/656950061712015392/201907311605280471226.jpg', like: 0},
    {name: 'Jules', year: 2020, imageUrl:'', like: 0}
  ];

  constructor() { }

  ngOnInit() {
  }

  like(princessId){
    this.princesses[princessId].like++;
  }
}