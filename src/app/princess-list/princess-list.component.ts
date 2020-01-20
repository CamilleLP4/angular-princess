import { Component, OnInit } from '@angular/core';
import { princessList } from "../princessList.ts"

@Component({
  selector: 'app-princess-list',
  templateUrl: './princess-list.component.html',
  styleUrls: ['./princess-list.component.css']
})
export class PrincessListComponent implements OnInit {

  princesses = princessList;

  constructor() { }

  ngOnInit() {
  }

  like(princessId){
    this.princesses[princessId].like++;
  }

  addPrincess(){
    this.princesses.push({ name: 'Philippe', year: 2019, imageUrl:'', script: 'c\'est rigolo', like: 0});
  }
}