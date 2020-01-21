import { Component, OnInit } from '@angular/core';

import { PrincessService } from '../princess.service';

@Component({
  selector: 'app-princess-list',
  templateUrl: './princess-list.component.html',
  styleUrls: ['./princess-list.component.css']
})
export class PrincessListComponent implements OnInit {

  princesses = this.princessService.princessList;

  constructor(private princessService: PrincessService) { }

  ngOnInit() {
  }

  like(princessId){
    this.princesses[princessId].like++;
  }

  addPrincess(){
    this.princesses.push({ name: 'Philippe', year: 2019, imageUrl:'', script: 'c\'est rigolo', like: 0});
  }
}