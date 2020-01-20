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
}